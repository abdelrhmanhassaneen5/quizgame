/* تحدّي الأصحاب — Service Worker (offline-first)
   ارفع هذا الملف في نفس مجلد index.html.
   عند أي تحديث للعبة غيّر رقم الإصدار في السطر التالي ليتم تجديد الكاش عند الطلاب. */
var VERSION = 'qd-v9.6.0';
var CORE = VERSION + '-core';
var RUNTIME = VERSION + '-runtime';

/* ملفات أساسية + ملفات اختيارية (أي ملف غير موجود يتم تجاوزه بدون إفشال التثبيت) */
var PRECACHE = [
  './', 'index.html', 'questions.js', 'words.js', 'curriculum.js', 'lessons.js',
  'mister.png', 'mister-cheer.png', 'mister-hint.png',
  'https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&family=Lemonada:wght@600;700&display=swap',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js',
  'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js'
];
var VOICES = ['ok', 'bad', 'win', 'report', 'combo', 'welcome', 'gift', 'build', 'tax', 'shield', 'rage', 'pet', 'police', 'cards', 'class']
  .map(function (k) { return k + '.mp3'; });

/* نطاقات تُخزَّن بنمط cache-first (خطوط جوجل + مكتبة Firebase) */
var CDN_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com', 'www.gstatic.com'];

function putSafe(cache, url) {
  var cross = /^https?:/i.test(url) && url.indexOf(self.location.origin) !== 0;
  var req = new Request(url, cross ? { mode: 'cors', credentials: 'omit' } : { cache: 'reload' });
  return fetch(req).then(function (res) {
    if (res && (res.ok || res.type === 'opaque')) return cache.put(url, res);
  }).catch(function () {});
}

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CORE).then(function (cache) {
      return Promise.all(PRECACHE.concat(VOICES).map(function (u) { return putSafe(cache, u); }));
    }).then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) {
        return k.indexOf('qd-') === 0 && k.indexOf(VERSION) !== 0;
      }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

function fromCache(req, opts) {
  return caches.match(req, opts || {});
}
function saveCopy(req, res) {
  if (res && (res.ok || res.type === 'opaque') && res.status !== 206) {
    var copy = res.clone();
    caches.open(RUNTIME).then(function (c) { c.put(req, copy); }).catch(function () {});
  }
  return res;
}

self.addEventListener('fetch', function (e) {
  var req = e.request;
  if (req.method !== 'GET') return;
  var url;
  try { url = new URL(req.url); } catch (err) { return; }
  if (url.protocol !== 'http:' && url.protocol !== 'https:') return;
  var same = url.origin === self.location.origin;

  /* 1) فتح الصفحة: الشبكة أولاً (لتصل التحديثات)، ولو مفيش إنترنت نرجّع النسخة المحفوظة */
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(function (res) {
        if (res && res.ok && same) {
          var copy = res.clone();
          caches.open(CORE).then(function (c) { c.put('index.html', copy); }).catch(function () {});
        }
        return res;
      }).catch(function () {
        return fromCache(req, { ignoreSearch: true }).then(function (r) {
          return r || fromCache('index.html') || fromCache('./');
        }).then(function (r) {
          return r || new Response('<meta charset="utf-8"><body dir="rtl" style="font-family:sans-serif;text-align:center;padding:40px">افتح المنصة مرة واحدة والإنترنت شغال عشان تتحمّل وتشتغل بعد كده بدون إنترنت.</body>', { headers: { 'Content-Type': 'text/html; charset=utf-8' } });
        });
      })
    );
    return;
  }

  /* 2) ملفات اللعبة على نفس الموقع: من الكاش فوراً مع تحديث صامت في الخلفية */
  if (same) {
    if (req.headers.has('range')) {
      /* ملفات الصوت: المتصفح يطلبها على أجزاء، فنقصّ الجزء المطلوب من النسخة المحفوظة */
      e.respondWith(
        fromCache(req.url, { ignoreSearch: true }).then(function (hit) {
          if (!hit) return fetch(req);
          return hit.arrayBuffer().then(function (buf) {
            var m = /bytes=(\d*)-(\d*)/.exec(req.headers.get('range') || '');
            var start = m && m[1] ? +m[1] : 0;
            var end = m && m[2] ? Math.min(+m[2], buf.byteLength - 1) : buf.byteLength - 1;
            if (m && !m[1] && m[2]) { start = Math.max(0, buf.byteLength - (+m[2])); end = buf.byteLength - 1; }
            if (start > end || start >= buf.byteLength) return new Response(null, { status: 416, headers: { 'Content-Range': 'bytes */' + buf.byteLength } });
            return new Response(buf.slice(start, end + 1), {
              status: 206, statusText: 'Partial Content',
              headers: {
                'Content-Type': hit.headers.get('Content-Type') || 'audio/mpeg',
                'Content-Range': 'bytes ' + start + '-' + end + '/' + buf.byteLength,
                'Content-Length': String(end - start + 1),
                'Accept-Ranges': 'bytes'
              }
            });
          });
        }).catch(function () { return fetch(req); })
      );
      return;
    }
    e.respondWith(
      fromCache(req, { ignoreSearch: true }).then(function (hit) {
        var net = fetch(req).then(function (res) { return saveCopy(req, res); }).catch(function () { return hit; });
        return hit || net;
      })
    );
    return;
  }

  /* 3) خطوط جوجل ومكتبة Firebase: من الكاش أولاً */
  if (CDN_HOSTS.indexOf(url.hostname) >= 0) {
    e.respondWith(
      fromCache(req).then(function (hit) {
        return hit || fetch(req).then(function (res) { return saveCopy(req, res); });
      })
    );
    return;
  }
  /* أي طلب آخر (Firestore وغيره) يمر للشبكة مباشرة بدون تدخل */
});

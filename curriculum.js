// ملف منهج تدريبات الوحدات والقصص
// p = ابتدائي (الصفوف 1 لـ 6)
// m = إعدادي (الصفوف 1 لـ 3)
// q = السؤال، o = مصفوفة الاختيارات (4 اختيارات)، a = رقم الإجابة الصحيحة (0، 1، 2، 3)
// hint = رسالة تظهر عند الإجابة لتوضيح القاعدة

var CURRICULUM = {
  // --- منهج الإعدادي ---
  m: {
    // الصف الأول الإعدادي (grade 1)
    1: {
      units: [
        // Unit 1
        [
          { q: "........ the end of the day, we play sports together.", o: ["On", "About", "At", "Next"], a: 2, hint: "نستخدم حرف الجر At مع عبارة the end of." },
          { q: "Students have to ........ their assignment before Friday.", o: ["watch", "write", "move", "belong"], a: 1, hint: "الطلاب يجب عليهم 'كتابة' (write) واجباتهم." },
          { q: "I am really interested ........ science and space.", o: ["in", "on", "at", "about"], a: 0, hint: "كلمة interested يأتي معها دائماً حرف الجر in." },
          { q: "A printer is used for ........ texts or images on paper.", o: ["print", "printing", "prints", "printed"], a: 1, hint: "بعد كلمة used for نستخدم الفعل مضافاً له ing." },
          { q: "The underlined word 'website' means a/an ........", o: ["technology toy", "online game", "page on the internet", "smartboard"], a: 2, hint: "الموقع الإلكتروني (website) هو صفحة على الإنترنت." },
          { q: "The writer connects the ........ to join the online classes.", o: ["smartboard", "headphones", "mouse", "webcam"], a: 1, hint: "حسب القطعة، الكاتب يوصل السماعات (headphones) ليحضر الحصص الأونلاين." },
          { q: "In Egypt, it is ________ cold in August. It's the hottest month.", o: ["always", "usually", "never", "often"], a: 2, hint: "شهر أغسطس هو الأحر، لذلك الجو 'أبداً' (never) لا يكون بارداً فيه." },
          { q: "Hazem and Ali ________ how to use technology wisely.", o: ["learns", "learning", "learn", "learnt"], a: 2, hint: "Hazem and Ali جمع (they)، لذلك يأتي الفعل في المصدر بدون إضافات (learn)." },
          { q: "The children ________ in the park on Sundays.", o: ["doesn't play", "don't play", "not play", "isn't playing"], a: 1, hint: "الفاعل جمع (children)، فننفي المضارع البسيط باستخدام don't." },
          { q: "Does Maged ________ on the weekend?", o: ["studies", "study", "studying", "studied"], a: 1, hint: "بعد كلمة Does يجب أن يأتي الفعل في المصدر (بدون أي إضافات)." }
        ],
        // Unit 2
        [
          { q: "............ are special methods or ways of doing something.", o: ["Texts", "Techniques", "Tools", "Breaks"], a: 1, hint: "التقنيات (Techniques) هي طرق خاصة لفعل شيء ما." },
          { q: "He studies in a quiet place to avoid ............", o: ["benefits", "life", "distraction", "energy"], a: 2, hint: "ندرس في مكان هادئ لتجنب التشتت (distraction)." },
          { q: "I can ..................... English and French.", o: ["speaks", "speak", "spoke", "speaking"], a: 1, hint: "بعد الفعل الناقص can يأتي الفعل في المصدر بدون إضافات." },
          { q: "We are ..................... ready for the school concert now.", o: ["get", "got", "getting", "gets"], a: 2, hint: "كلمة now تدل على المضارع المستمر (am/is/are + v-ing)." },
          { q: "The underlined pronoun 'us' refers to the writer and his/her............", o: ["family", "cousins", "friends", "teachers"], a: 2, hint: "حسب القطعة، الضمير us يعود على الكاتب وأصدقائه (friends)." },
          { q: "The underlined word 'correct' means '............'.", o: ["untrue", "wrong", "lazy", "true"], a: 3, hint: "كلمة correct (صحيح) تعني true." },
          { q: "He isn't able to answer the question, [can't]", o: ["He isn't can't answer.", "He can't answers.", "He can't answer the question.", "He don't can answer."], a: 2, hint: "isn't able to تعني لا يستطيع (can't)، ويأتي بعدها المصدر." },
          { q: "I get better step by step. [getting]", o: ["I getting better.", "I am getting better step by step.", "I am get better.", "I was getting better."], a: 1, hint: "عند استخدام getting نستخدم زمن المضارع المستمر (I am getting)." },
          { q: "Yes, they are cooking now. [Are]", o: ["Are they cook now?", "Are they cooking now?", "Are you cooking now?", "They are cooking now?"], a: 1, hint: "للسؤال بمعنى هل، نقدم الفعل المساعد Are على الفاعل they." },
          { q: "Rana sleeps on her bed. [now]", o: ["Rana sleeps now.", "Rana is sleep now.", "Rana sleeping now.", "Rana is sleeping on her bed now."], a: 3, hint: "وجود now يحول الجملة للمضارع المستمر (is + v-ing)." }
        ],
        // Unit 3
        [
          { q: "Dr. Gamal Hemdan was a/an............ and writer.", o: ["officer", "doctor", "librarian", "geographer"], a: 3, hint: "الدكتور جمال حمدان كان جغرافياً (geographer) وكاتباً." },
          { q: "He was born in............", o: ["Beheira", "Qalyubia", "Alexandria", "Menofia"], a: 1, hint: "حسب النص، وُلد في محافظة القليوبية (Qalyubia)." },
          { q: "He studied............ at Cairo University.", o: ["science", "geography", "math", "history"], a: 1, hint: "درس الجغرافيا (geography) في جامعة القاهرة." },
          { q: "He got his PhD from a/an ............in England", o: ["university", "community", "clinic", "organization"], a: 0, hint: "حصل على الدكتوراه من جامعة (university) في إنجلترا." },
          { q: "She is a famous ........ who studies the Earth's surface.", o: ["geographer", "geography", "photographer", "biography"], a: 0, hint: "الشخص الذي يدرس سطح الأرض يسمى جغرافياً (geographer)." },
          { q: "A/An............ means success in reaching a goal.", o: ["value", "invention", "achievement", "model"], a: 2, hint: "الإنجاز (achievement) يعني النجاح في الوصول لهدف." },
          { q: "Yesterday, my brother ..... me how to use the computer.", o: ["showing", "shows", "showed", "show"], a: 2, hint: "كلمة Yesterday تدل على الماضي البسيط، فنختار الفعل بإضافة ed (showed)." },
          { q: "They ............ get ready for the exam yesterday.", o: ["don't", "didn't", "wasn't", "don't"], a: 1, hint: "لنفي الفعل في الماضي البسيط (yesterday) نستخدم didn't + المصدر." },
          { q: "Dr. Samia's classes make students love .............", o: ["scientists", "learning", "the community", "plastic"], a: 1, hint: "حسب القطعة، حصصها تشجع الطلاب على حب التعلم (learning)." },
          { q: "The underlined word 'encourage' can be replaced by............", o: ["leave", "return", "inspire", "recycle"], a: 2, hint: "كلمة يُشجع (encourage) تعطي نفس معنى يُلهم (inspire)." }
        ],
        // Unit 4
        [],
        // Unit 5
        [],
        // Unit 6
        []
      ],
      story: [
        // Chapter 1
        [
          { q: "Omar felt ........ at the beginning.", o: ["happy", "excited", "nervous", "sad"], a: 2, hint: "في البداية كان عمر يشعر بالتوتر (nervous)." },
          { q: "The children felt ........ after they opened the box.", o: ["angry", "scared", "happy", "worried"], a: 2, hint: "شعر الأطفال بالسعادة (happy) بعد فتح الصندوق." }
        ],
        // Chapter 2
        [
          { q: "The children crossed the bridge holding their hands.", o: ["True", "False"], a: 0, hint: "بالفعل، الأطفال عبروا الجسر وهم ممسكون بأيدي بعضهم." },
          { q: "The bridge appeared instantly as they stepped on it.", o: ["True", "False"], a: 0, hint: "نعم، الجسر ظهر فجأة بمجرد أن خطوا عليه." },
          { q: "Who said: 'Let's sing together. Maybe unity is the key.'?", o: ["Omar", "Zain", "Fatma", "Nour"], a: 3, hint: "نور (Nour) هي من اقترحت الغناء معاً." },
          { q: "Who said: 'Courage means we try even when we are scared.'?", o: ["Mr. Ahmed", "Omar", "Zain", "Nour"], a: 2, hint: "زين (Zain) هو من قال هذه العبارة المشجعة." }
        ],
        // Chapter 3
        [
          { q: "What did the children walk on in the second challenge?", o: ["A rainbow", "A wooden path", "An invisible bridge", "A tunnel"], a: 2, hint: "في التحدي الثاني، ساروا على جسر خفي (invisible bridge)." },
          { q: "What opened after they sang together?", o: ["A window", "A treasure chest", "A silver box", "A golden door"], a: 2, hint: "بعد أن غنوا معاً، انفتح الصندوق الفضي (silver box)." },
          { q: "Was he happy yesterday? [Yes,...]", o: ["Yes, he is.", "Yes, he was.", "Yes, he did.", "Yes, he wasn't."], a: 1, hint: "السؤال بدأ بـ Was، فتكون الإجابة Yes, he was." },
          { q: "They were at the park a week ago. [went]", o: ["They go to the park a week ago.", "They went to the park a week ago.", "They was going to the park a week ago.", "They went at the park a week ago."], a: 1, hint: "نستبدل were بـ went لتعطي معنى ذهبوا إلى الحديقة، مع حرف الجر to." },
          { q: "Ali stays in Alexandria. [in 2016]", o: ["Ali stays in Alexandria in 2016.", "Ali stay in Alexandria in 2016.", "Ali stayed in Alexandria in 2016.", "Ali is staying in Alexandria in 2016."], a: 2, hint: "تحديد سنة في الماضي (in 2016) يحول الفعل للماضي البسيط (stayed)." },
          { q: "I never smoked. [didn't]", o: ["I didn't smoked.", "I didn't smoke.", "I didn't never smoke.", "I didn't smokes."], a: 1, hint: "بعد didn't يجب أن يأتي الفعل في المصدر (smoke) ونحذف never." }
        ]
      ]
    },
    // الصف الثاني الإعدادي (grade 2)
    2: { units: [[],[],[],[],[],[]], story: [[],[],[]] },
    // الصف الثالث الإعدادي (grade 3)
    3: { units: [[],[],[],[],[],[]], story: [[],[],[]] }
  },
  
  // --- منهج الابتدائي ---
  p: {
    1: { units: [[],[],[],[],[],[]], story: [[],[],[]] },
    
    // الصف الثاني الابتدائي (grade 2)
    2: { 
      units: [
        // Unit 1 (Covers Units 1, 2, & 3 Test)
        [
          // أسئلة الاختياري
          { q: "I sit on a ........ at school.", o: ["pencil", "chair", "teacher", "table"], a: 1, hint: "نجلس على الكرسي (chair) في المدرسة." },
          { q: "My favorite animal is the ........", o: ["cat", "hat", "fan", "pen"], a: 0, hint: "القطة (cat) هي حيوان، أما الباقي أشياء جماد." },
          { q: "I have two pens in my ........", o: ["door", "window", "pencil case", "book"], a: 2, hint: "نضع الأقلام في المقلمة (pencil case)." },
          { q: "This ........ my bag.", o: ["am", "is", "are", "be"], a: 1, hint: "المفرد (This) يأخذ الفعل (is)." },
          
          // أسئلة الترتيب (مدمجة في صورة اختيارات متعددة)
          { q: "رتب: color - What - is - this ?", o: ["What color is this?", "What is color this?", "This is what color?", "Color what is this?"], a: 0, hint: "السؤال عن اللون يبدأ بـ What color ثم الفعل المساعد is ثم this." },
          { q: "رتب: a bun - eat - I.", o: ["I eat a bun.", "Eat I a bun.", "A bun I eat.", "I a bun eat."], a: 0, hint: "الجملة تبدأ بالفاعل I ثم الفعل eat ثم المفعول a bun." },
          { q: "رتب: pens - have - I - five.", o: ["I have five pens.", "I five have pens.", "Have I five pens.", "Five pens I have."], a: 0, hint: "الفاعل I ثم الفعل have ثم العدد five ثم الاسم الجمع pens." },
          { q: "رتب: write - I - notebook - in - my.", o: ["I write in my notebook.", "I in my notebook write.", "Write I in my notebook.", "My notebook write in I."], a: 0, hint: "الفاعل I ثم الفعل write ثم حرف الجر in ثم my notebook." },
          { q: "رتب: after - Close - your - reading - book.", o: ["Close your book after reading.", "After close reading your book.", "Your book close after reading.", "Reading after close your book."], a: 0, hint: "فعل الأمر يأتي في البداية (Close) ثم المفعول (your book) ثم (after reading)." },
          { q: "رتب: my - read - I - book.", o: ["I read my book.", "I my book read.", "Read I my book.", "My book I read."], a: 0, hint: "الفاعل I ثم الفعل read ثم المفعول my book." }
        ],
        [],[],[],[],[]
      ], 
      story: [[],[],[]] 
    },
    
    3: { units: [[
          // أسئلة القواعد والكلمات
          { q: "I meet someone new, I say 'Nice to ........ you'.", o: ["meet", "make", "run", "do"], a: 0, hint: "عند مقابلة شخص جديد نقول Nice to meet you." },
          { q: "When class starts, we ........", o: ["sit down", "shout", "leave", "sleep"], a: 0, hint: "عندما يبدأ الفصل، نجلس (sit down)." },
          { q: "My brother is ........ . He makes me laugh.", o: ["funny", "friendly", "helpful", "sad"], a: 0, hint: "بما أنه يجعلني أضحك، فهو مضحك (funny)." },
          { q: "I ........ my teeth every morning.", o: ["brush", "learn", "play", "make"], a: 0, hint: "نحن نغسل أسناننا (brush) بالفرشاة كل صباح." },
          { q: "Mahmoud has a book. ........ book is new.", o: ["His", "Her", "My", "Its"], a: 0, hint: "محمود مذكر، لذا نستخدم صفة الملكية His." },
          { q: "We ........ salted fish on Sham El-Nessim.", o: ["eat", "brush", "play", "drink"], a: 0, hint: "نحن نأكل (eat) السمك المملح في شم النسيم." },
          { q: "He ........ my brother.", o: ["is", "am", "are", "be"], a: 0, hint: "الضمير He يأخذ الفعل is." },
          { q: "She helps patients. She is a ........", o: ["doctor", "teacher", "baker", "farmer"], a: 0, hint: "الذي يساعد المرضى هو الطبيب (doctor)." },
          { q: "I went to the ........ to read a book.", o: ["library", "supermarket", "train station", "park"], a: 0, hint: "نذهب إلى المكتبة (library) لنقرأ الكتب." },
          { q: "We ........ the Cairo Tower yesterday.", o: ["visited", "visit", "visits", "visiting"], a: 0, hint: "كلمة yesterday تدل على الماضي البسيط، فنضيف ed للفعل." },
          { q: "I ........ my homework at 7 p.m.", o: ["do", "watch", "play", "make"], a: 0, hint: "نحن نقوم بعمل الواجب (do homework)." },
          { q: "We ........ breakfast in the morning.", o: ["eat", "read", "wake up", "play"], a: 0, hint: "نحن نتناول/نأكل (eat) الإفطار." },
          { q: "The cat is in ........ of the box.", o: ["front", "between", "behind", "next"], a: 0, hint: "حرف الجر in يأتي مع كلمة front of (أمام)." },
          { q: "She ........ the piano.", o: ["plays", "play", "are playing", "playing"], a: 0, hint: "الضمير She مفرد غائب، فنضيف s للفعل في المضارع البسيط." },
          { q: "Last week, we ........ pictures and saw the whole city.", o: ["took", "traveled", "jumped", "played"], a: 0, hint: "نحن نلتقط الصور (take pictures)، وفي الماضي تصبح took." },
          { q: "My grandfather ........ me a story.", o: ["reads", "cooks", "swims", "plays"], a: 0, hint: "جدي يقرأ (reads) لي قصة." },
          
          // أسئلة الإملاء (Missing Letters)
          { q: "اختار الإملاء الصحيح لكلمة (هادئ):", o: ["quiet", "queit", "quiat", "qieut"], a: 0, hint: "هادئ تعني quiet." },
          { q: "اختار الإملاء الصحيح لكلمة (غاضب):", o: ["angry", "angrey", "ingry", "angary"], a: 0, hint: "غاضب تعني angry." },
          { q: "اختار الإملاء الصحيح لكلمة (أم):", o: ["mother", "mather", "muther", "mothar"], a: 0, hint: "أم تعني mother." },
          { q: "اختار الإملاء الصحيح لكلمة (معلم):", o: ["teacher", "techer", "tacher", "teachar"], a: 0, hint: "معلم تعني teacher." },
          
          // أسئلة علامات الترقيم (Punctuation)
          { q: "أي جملة علامات الترقيم فيها صحيحة؟", o: ["I'm from Egypt.", "i'm from Egypt", "I'm from egypt.", "i'm from egypt."], a: 0, hint: "الضمير I والدول (Egypt) تبدأ بحرف كبير، ونضع نقطة في النهاية." },
          { q: "أي جملة علامات الترقيم فيها صحيحة؟", o: ["My mother is a doctor.", "my mother is a doctor", "My mother is a Doctor.", "My mother is a doctor"], a: 0, hint: "بداية الجملة حرف كبير، ونضع نقطة في النهاية." }
        ],[],[],[],[],[]], story: [[],[],[]] },
    4: { 
      units: [
        // Unit 1 (Covers Units 1, 2, & 3 Test)
        [
          // Section A & B & C: Choose & Complete
          { q: "Sarah is a healthy girl. She has good ........", o: ["habits", "trash", "cave", "nets"], a: 0, hint: "البنت الصحية لديها عادات (habits) جيدة." },
          { q: "She ........ up early at 6:00 a.m.", o: ["wake", "wakes", "waking", "woke"], a: 1, hint: "مع الضمير She في المضارع البسيط، نضع للفعل s." },
          { q: "She does some simple ........ in the garden.", o: ["exercises", "unhealthy", "feed", "trash"], a: 0, hint: "هي تقوم ببعض التمارين (exercises) البسيطة." },
          { q: "Every Saturday, Amira and Adam ........ to help their community.", o: ["volunteers", "volunteer", "volunteering", "volunteered"], a: 1, hint: "أميرة وآدم جمع (they)، لذلك يأتي الفعل في المصدر (volunteer)." },
          { q: "They clean ........ from the streets.", o: ["trash", "trees", "clothes", "grass"], a: 0, hint: "هم ينظفون القمامة (trash) من الشوارع." },
          { q: "The Red Sea dugong eats sea ........", o: ["grass", "nets", "footprints", "trash"], a: 0, hint: "حيوان الأطوم (dugong) يأكل العشب البحري (sea grass)." },
          { q: "She eats ........ food. These foods give her energy.", o: ["healthy", "unhealthy", "trash", "bad"], a: 0, hint: "الطعام الذي يعطي طاقة هو الطعام الصحي (healthy)." },
          { q: "They ........ trees in the park.", o: ["plant", "collect", "feed", "volunteer"], a: 0, hint: "نحن نزرع (plant) الأشجار في الحديقة." },
          { q: "They ........ clothes and give them to people who need them.", o: ["collect", "plant", "feed", "read"], a: 0, hint: "هم يجمعون (collect) الملابس لإعطائها للمحتاجين." },
          
          // Section D: Correct Form
          { q: "He ........ coffee every morning. [drink]", o: ["drinks", "drink", "drinking", "drank"], a: 0, hint: "كلمة every تدل على المضارع البسيط، ومع He نضيف s للفعل." },
          { q: "Hani doesn't ........ to play tennis. [like]", o: ["likes", "like", "liking", "liked"], a: 1, hint: "بعد doesn't يأتي الفعل في المصدر دائماً (like)." },
          { q: "He ........ to school every day. [go]", o: ["goes", "go", "going", "went"], a: 0, hint: "الفعل go ينتهي بـ o، لذلك نضيف له es مع الضمير He." },
          { q: "........ your brother read a story every night? [Do]", o: ["Does", "Do", "Is", "Are"], a: 0, hint: "الفاعل مفرد (your brother)، فنسأل بـ Does." },
          
          // Section E: Punctuate
          { q: "أي جملة علامات الترقيم فيها صحيحة؟", o: ["I'm from Egypt.", "i'm from Egypt", "I'm from egypt.", "i'm from egypt."], a: 0, hint: "الضمير I وأسماء الدول تبدأ بحرف كبير، ونضع نقطة في النهاية." },
          { q: "أي جملة علامات الترقيم فيها صحيحة؟", o: ["My mother is a doctor.", "my mother is a doctor", "My mother is a Doctor.", "My mother is a doctor"], a: 0, hint: "بداية الجملة حرف كبير، ونضع نقطة في النهاية." }
        ],
        [],[],[],[],[]
      ], 
      story: [[],[],[]] 
    },
    5: { 
      units: [
        // Unit 1 (Covers Units 1, 2, & 3 Test)
        [
          // Q1: Choose the correct answer
          { q: "We should look after our ........ and keep them clean.", o: ["animals", "books", "bags", "clothes"], a: 3, hint: "يجب أن نعتني بملابسنا (clothes) ونبقيها نظيفة." },
          { q: "My father works in a ........ . He helps sick people.", o: ["school", "hospital", "market", "farm"], a: 1, hint: "الذي يساعد المرضى يعمل في المستشفى (hospital)." },
          { q: "I ........ a new bike yesterday.", o: ["buy", "bought", "buying", "buys"], a: 1, hint: "كلمة yesterday تدل على الماضي، فنستخدم التصريف الثاني bought." },
          { q: "We are going to visit the museum ........ Saturday.", o: ["in", "on", "at", "of"], a: 1, hint: "أيام الأسبوع (Saturday) تأخذ حرف الجر on." },
          { q: "She ........ her homework every day.", o: ["do", "does", "doing", "did"], a: 1, hint: "كلمة every day تدل على المضارع البسيط، ومع المفرد She نستخدم does." },
          
          // Q2: Choose the correct answer
          { q: "Sports help us to be ........", o: ["fit", "sad", "angry", "bored"], a: 0, hint: "الرياضة تساعدنا أن نكون لائقين بدنياً (fit)." },
          { q: "Fruits and vegetables give us ........ that our bodies need.", o: ["energy", "money", "toys", "glasses"], a: 0, hint: "الفواكه والخضروات تعطينا الطاقة (energy)." },
          { q: "The heart is one of the most important ........ of our body.", o: ["helpers", "organs", "tools", "machines"], a: 1, hint: "القلب من أهم الأعضاء (organs) في جسمنا." },
          { q: "Doctors check patients, ........ and give them treatment.", o: ["diagnose", "build", "decorate", "respect"], a: 0, hint: "الأطباء يفحصون المرضى ويشخصون (diagnose) المرض." },
          { q: "You should wash your hands before and after ........", o: ["exercise", "brush", "watch", "eat"], a: 3, hint: "يجب غسل اليدين قبل وبعد الأكل (eat)." },
          
          // Q3: Choose the correct answer
          { q: "The water covered the streets and many cars got ........", o: ["clean", "stuck", "shiny", "dry"], a: 1, hint: "المياه غطت الشوارع والعديد من السيارات علقت (stuck)." },
          { q: "It was very ........ . We couldn't see the road.", o: ["rainy", "hot", "cold", "sunny"], a: 0, hint: "لم نستطع رؤية الطريق لأنه كان ممطراً (rainy) جداً." },
          { q: "The children are playing in the ........", o: ["desert", "sky", "pond", "school"], a: 3, hint: "الأطفال عادة يلعبون في المدرسة (school)." },
          
          // Q4: Read and complete
          { q: "My uncle is a doctor. He works in a big ........ in Cairo.", o: ["hospital", "fun", "treatment", "diseases"], a: 0, hint: "الطبيب يعمل في المستشفى (hospital)." },
          { q: "He uses his knowledge to check ........", o: ["patients", "hospital", "diseases", "treatment"], a: 0, hint: "الطبيب يفحص المرضى (patients)." },
          { q: "He diagnoses their ........", o: ["diseases", "treatment", "fun", "hospital"], a: 0, hint: "الطبيب يشخص الأمراض (diseases)." },
          { q: "He diagnoses their diseases and provide ........", o: ["treatment", "patients", "fun", "hospital"], a: 0, hint: "ويوفر لهم العلاج (treatment)." }
        ],
        [],[],[],[],[]
      ], 
      story: [[],[],[]] 
    },
    6: { units: [
        // Unit 1 (Covers Units 1, 2, & 3 Test)
        [
          // Section A
          { q: "I bought a new camera last week to ........ photos.", o: ["give", "take", "talk", "look"], a: 1, hint: "نستخدم الفعل take مع كلمة photos (يلتقط صوراً)." },
          { q: "Ras Mohamed is a/an ........ area, so people must care for it.", o: ["protected", "unsafe", "dangerous", "noisy"], a: 0, hint: "محمية رأس محمد هي منطقة محمية (protected)." },
          { q: "A fishing ........ is a tool made of rope or string used to catch fish.", o: ["loom", "net", "road", "cloth"], a: 1, hint: "شبكة الصيد (net) تُستخدم لاصطياد السمك." },
          { q: "In the morning, students sing the national ........", o: ["role", "story", "anthem", "line"], a: 2, hint: "الطلاب يغنون النشيد الوطني (national anthem)." },
          { q: "Some people work in ........ . They make cement and clothes.", o: ["boats", "ships", "parks", "factories"], a: 3, hint: "الأسمنت والملابس تُصنع في المصانع (factories)." },
          { q: "When it's hot, people drink water and rest in the ........", o: ["shade", "street", "heat", "dust"], a: 0, hint: "عندما يكون الجو حاراً، نستريح في الظل (shade)." },
          { q: "Tourists like to ........ in the Red Sea to see colorful fish.", o: ["cook", "draw", "snorkel", "climb"], a: 2, hint: "السياح يحبون الغطس (snorkel) لرؤية الأسماك." },
          { q: "Listen! Someone ........ at the door.", o: ["is knocking", "knocks", "knock", "knocked"], a: 0, hint: "كلمة Listen تدل على المضارع المستمر (is + v-ing)." },

          // Section B (Correct form)
          { q: "Look! Ahmed ........ football now. [play]", o: ["plays", "played", "is playing", "playing"], a: 2, hint: "كلمتي Look و now تدلان على المضارع المستمر (is playing)." },
          { q: "Maged ........ his school uniform every day. [wear]", o: ["wear", "wears", "wearing", "wore"], a: 1, hint: "كلمة every day تدل على المضارع البسيط، وماجد مفرد فنضيف s للفعل." },
          { q: "How often ........ he play football?", o: ["do", "is", "does", "are"], a: 2, hint: "مع الفاعل المفرد he في المضارع البسيط نستخدم الفعل المساعد does." },
          { q: "Right now, my friend and I ........ London. [visit]", o: ["visit", "visits", "are visiting", "is visiting"], a: 2, hint: "Right now تدل على المضارع المستمر، والفاعل جمع (my friend and I) فنستخدم are visiting." },

          // Section C (Order)
          { q: "رتب: at - moment - are - the - We - working - not.", o: ["We are not working at the moment.", "We not are working at the moment.", "At the moment are we not working.", "We are working not at the moment."], a: 0, hint: "الفاعل We ثم الفعل are not working ثم الظرف at the moment." },
          { q: "رتب: went on - to - a trip - We - last - Wadi El Rayan - Thursday.", o: ["We went on a trip to Wadi El Rayan last Thursday.", "We went to a trip on Wadi El Rayan last Thursday.", "Last Thursday to Wadi El Rayan we went on a trip.", "A trip we went on to Wadi El Rayan last Thursday."], a: 0, hint: "الفاعل We ثم الفعل went on a trip ثم المكان to Wadi El Rayan ثم الزمان last Thursday." },
          { q: "رتب: every - Mohamed - People - Ras - visit - year.", o: ["People visit Ras Mohamed every year.", "People every year visit Ras Mohamed.", "Ras Mohamed visit people every year.", "Every year Ras Mohamed visit people."], a: 0, hint: "الفاعل People ثم الفعل visit ثم المفعول Ras Mohamed ثم الزمان every year." },

          // Section D
          { q: "There are a lot of ........ in the desert.", o: ["rivers", "plants", "sand dunes", "crops"], a: 2, hint: "يوجد الكثير من الكثبان الرملية (sand dunes) في الصحراء." },
          { q: "Scientists found the ........ of ancient whales in Wadi El-Hitan.", o: ["skeletons", "food", "sand dunes", "trips"], a: 0, hint: "العلماء وجدوا هياكل عظمية (skeletons) للحيتان." },
          { q: "'To ........' means to look for information to learn more about something.", o: ["visit", "research", "control", "speak"], a: 1, hint: "البحث (research) يعني البحث عن معلومات لتعلم شيء جديد." },
          { q: "Water resources ........ sure people get clean water.", o: ["doctors", "vets", "make", "engineers"], a: 2, hint: "نستخدم الفعل make مع كلمة sure لتصبح make sure (يتأكد)." },

          // Section E
          { q: "She ........ coffee every morning. [drink]", o: ["drinks", "drink", "drinking", "drank"], a: 0, hint: "كلمة every تدل على المضارع البسيط، ومع She نضيف s للفعل." },
          { q: "Hani doesn't ........ to play tennis. [like]", o: ["likes", "like", "liking", "liked"], a: 1, hint: "بعد doesn't يأتي الفعل في المصدر دائماً (like)." },
          { q: "........ your brother read a story every night? [Do]", o: ["Does", "Do", "Is", "Are"], a: 0, hint: "الفاعل مفرد (your brother)، فنسأل بـ Does." }
        ],
        [],[],[],[],[]
      ], 
      story: [[],[],[]] 
    }
  }
};

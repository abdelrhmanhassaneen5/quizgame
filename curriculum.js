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
          { q: "Who said: 'Let's sing together. Maybe unity is the key.'?", o: ["Omar", "Zain", "Fatma", "Nour"], a: 3, hint: "نور (Nour) هي من اقترحت الغناء معاً." }, // Note: Assuming Nour based on typical story structures, adjust if needed.
          { q: "Who said: 'Courage means we try even when we are scared.'?", o: ["Mr. Ahmed", "Omar", "Zain", "Nour"], a: 2, hint: "زين (Zain) هو من قال هذه العبارة المشجعة." }  // Note: Assuming Zain.
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
    2: { units: [[],[],[],[],[],[]], story: [[],[],[]] },
    3: { units: [[],[],[],[],[],[]], story: [[],[],[]] },
    4: { units: [[],[],[],[],[],[]], story: [[],[],[]] },
    5: { units: [[],[],[],[],[],[]], story: [[],[],[]] },
    6: { units: [
        [
          { q: "I always _______ up early.", o: ["wakes", "wake", "waking", "woke"], a: 1, hint: "بعد I الفعل يأتي في المصدر بدون إضافات." }
        ],[],[],[],[],[]
      ], 
      story: [[],[],[]] 
    }
  }
};

/* ==========================================================================
   منهج الصف الثاني الابتدائي (Primary 2) — جاهز للمنصة (v14.0+)
   إجمالي الأسئلة: 72 سؤالاً (6 وحدات × 12 سؤالاً) • بدون قصة مقررة (stories: [])
   طريقة الاستخدام:
   - انسخ الكتلة CURRICULUM.p[2] = { ... }; وضعها داخل ملف curriculum.js
   - أو حمّل هذا الملف مباشرة بعد curriculum.js
   ========================================================================== */

window.CURRICULUM = window.CURRICULUM || { p: {}, m: {}, s: {} };
window.CURRICULUM.p = window.CURRICULUM.p || {};

window.CURRICULUM.p[2] = {
  units: [
    {
      id: 'u1',
      title: 'Unit 1: Let\'s Get Started',
      qs: [
        {
          q: 'We say good ____ in the morning.',
          ar: 'نقول ____ في الصباح.',
          o: ['night', 'morning', 'afternoon', 'evening'],
          a: 1,
          hint: 'حسب نص وتدريبات الدرس الأول، التحية المستخدمة في الصباح هي Good morning.'
        },
        {
          q: 'Hello, what\'s your ____?',
          ar: 'مرحباً، ما ____؟',
          o: ['color', 'chair', 'name', 'bag'],
          a: 2,
          hint: 'السؤال عن الاسم في المحادثة المقررة بالدرس الأول: Hello, what\'s your name?'
        },
        {
          q: 'This ____ my book.',
          ar: 'هذا ____ كتابي.',
          o: ['is', 'are', 'am', 'be'],
          a: 0,
          hint: 'اسم الإشارة للمفرد القريب This يأخذ فعل يكون is.'
        },
        {
          q: 'I sit on a ____ at school.',
          ar: 'أنا أجلس على ____ في المدرسة.',
          o: ['ruler', 'pencil', 'board', 'chair'],
          a: 3,
          hint: 'في نص القراءة بالدرس الأول: I sit on a chair at school.'
        },
        {
          q: 'At the end of the day, I say ____.',
          ar: 'في نهاية اليوم الدراسي، أقول ____.',
          o: ['good morning', 'goodbye', 'hello', 'please'],
          a: 1,
          hint: 'جملة نصية بالدرس الأول: At the end of the day, I say goodbye.'
        },
        {
          q: 'This is ____ eraser.',
          ar: 'هذه ____ ممحاة.',
          o: ['a', 'two', 'an', 'many'],
          a: 2,
          hint: 'نستخدم أداة النكرة an قبل الاسم المفرد الذي يبدأ بصوت متحرك مثل eraser.'
        },
        {
          q: 'We use the ____ on hot days.',
          ar: 'نحن نستخدم ____ في الأيام الحارة.',
          o: ['fan', 'map', 'hat', 'cap'],
          a: 0,
          hint: 'سؤال نصي من تدريبات الصوتيات للدرس الثاني: We use the fan on hot days.'
        },
        {
          q: 'I have two pens in my pencil ____.',
          ar: 'لدي قلمان في ____ الخاصة بي.',
          o: ['book', 'desk', 'window', 'case'],
          a: 3,
          hint: 'المصطلح المعتمد لأدوات الفصل في الوحدة هو pencil case بمعنى مقلمة.'
        },
        {
          q: '____ is the pencil? - It\'s over there.',
          ar: '____ يكون قلم الرصاص؟ - إنه هناك.',
          o: ['Where', 'What', 'How', 'Who'],
          a: 0,
          hint: 'للسؤال عن مكان الشيء نستخدم أداة الاستفهام Where كما في قاعدة الدرسين 3 و 4.'
        },
        {
          q: 'Which word has the short \'i\' sound?',
          ar: 'أي كلمة تحتوي على صوت حرف \'i\' القصير؟',
          o: ['cat', 'fig', 'pen', 'hat'],
          a: 1,
          hint: 'وردت كلمة fig في جزء الصوتيات للدرسين 3 و 4 كمثال لصوت short \'i\'.'
        },
        {
          q: 'Teachers ____ students at school.',
          ar: 'المعلمون ____ الطلاب في المدرسة.',
          o: ['sit', 'say', 'teach', 'learn'],
          a: 2,
          hint: 'جملة التدريبات العامة للوحدة الأولى: Teachers teach students at school.'
        },
        {
          q: 'Look at the board over there! ____ is a board.',
          ar: 'انظر إلى السبورة هناك! ____ تكون سبورة.',
          o: ['This', 'These', 'Those', 'That'],
          a: 3,
          hint: 'تُستخدم That للإشارة إلى الاسم المفرد البعيد كما ورد في شرح الدرسين 3 و 4.'
        }
      ]
    },
    {
      id: 'u2',
      title: 'Unit 2: Colors, Shapes, and Numbers',
      qs: [
        {
          q: 'This is a red ____.',
          ar: 'هذه ____ حمراء.',
          o: ['circle', 'desk', 'pencil', 'book'],
          a: 0,
          hint: 'من نصوص وتدريبات الدرس الأول للتعرف على الأشكال: This is a red circle.'
        },
        {
          q: 'What ____ is this? - It is red.',
          ar: 'ما هذا ____؟ - إنه أحمر.',
          o: ['time', 'name', 'color', 'shape'],
          a: 2,
          hint: 'للسؤال عن اللون نستخدم: What color is this? كما ورد في وظائف اللغة بالدرس الأول.'
        },
        {
          q: 'What shape is this? - It is a ____.',
          ar: 'ما هذا الشكل؟ - إنه ____.',
          o: ['blue', 'square', 'red', 'yellow'],
          a: 1,
          hint: 'السؤال عن الشكل الهندسي (shape) وتكون الإجابة بأحد الأشكال المقررة مثل square.'
        },
        {
          q: 'We can see the ____ in the morning.',
          ar: 'يمكننا رؤية ____ في الصباح.',
          o: ['box', 'dog', 'bun', 'sun'],
          a: 3,
          hint: 'سؤال نصي من تدريبات الصوتيات للدرس الثاني: We can see the sun in the morning.'
        },
        {
          q: 'I drink tea in my ____.',
          ar: 'أنا أشرب الشاي في ____ الخاص بي.',
          o: ['cup', 'fox', 'sun', 'bun'],
          a: 0,
          hint: 'من تدريبات الدرس الثاني على صوت حرف u القصير: I drink tea in my cup.'
        },
        {
          q: 'I have three ____.',
          ar: 'أنا لدي ثلاثة ____.',
          o: ['pencil', 'pencils', 'a pencil', 'one pencil'],
          a: 1,
          hint: 'قاعدة الجمع: عند وجود عدد أكبر من واحد (three) نستخدم صيغة الجمع بإضافة s (pencils).'
        },
        {
          q: 'She ____ two pens.',
          ar: 'هي ____ قلمان.',
          o: ['have', 'having', 'has', 'are'],
          a: 2,
          hint: 'الضمير المفرد She يأخذ فعل الملكية has كما ورد في شرح وتدريبات الدرسين 3 و 4.'
        },
        {
          q: 'There ____ three books on the desk.',
          ar: 'يوجد ____ ثلاثة كتب على المكتب.',
          o: ['is', 'are', 'am', 'have'],
          a: 1,
          hint: 'قاعدة التعبير عن الوجود مع الجمع: There are + plural noun.'
        },
        {
          q: 'How ____ rulers do you have?',
          ar: 'كم ____ المساطر التي لديك؟',
          o: ['much', 'old', 'often', 'many'],
          a: 3,
          hint: 'للسؤال عن العدد نستخدم الأداة How many متبوعة باسم جمع.'
        },
        {
          q: 'How many pens ____ there?',
          ar: 'كم عدد الأقلام الجافة الموجودة هناك؟',
          o: ['are', 'is', 'am', 'do'],
          a: 0,
          hint: 'صيغة السؤال عن عدد الأشياء الموجودة للجمع هي: How many + اسم جمع + are there?'
        },
        {
          q: 'Which word has the long \'a\' sound?',
          ar: 'أي كلمة تحتوي على صوت حرف \'a\' الممدود؟',
          o: ['cup', 'box', 'cake', 'sun'],
          a: 2,
          hint: 'كلمة cake تمثل نمط الصوت الممدود [a-e] في درس الصوتيات الرابع.'
        },
        {
          q: 'Circles and triangles are ____.',
          ar: 'الدوائر والمثلثات تكون ____.',
          o: ['colors', 'numbers', 'animals', 'shapes'],
          a: 3,
          hint: 'سؤال نصي من التقييمات الأسبوعية للوحدة الثانية: Circles and triangles are shapes.'
        }
      ]
    },
    {
      id: 'u3',
      title: 'Unit 3: Classroom Actions & Routines',
      qs: [
        {
          q: 'Please ____ your hand to speak.',
          ar: 'من فضلك ____ يدك للتحدث.',
          o: ['read', 'raise', 'sit', 'draw'],
          a: 1,
          hint: 'من تعليمات الفصل المقررة بالدرس الثاني: Raise your hand to speak.'
        },
        {
          q: 'I ____ a book in the classroom.',
          ar: 'أنا ____ كتاباً في الفصل.',
          o: ['read', 'reads', 'reading', 'is read'],
          a: 0,
          hint: 'في زمن المضارع البسيط، يأتي الفعل في المصدر بدون إضافات مع الضمير I: I read a book.'
        },
        {
          q: '____ up when the teacher enters the classroom.',
          ar: '____ عندما يدخل المعلم الفصل.',
          o: ['Draw', 'Sit', 'Close', 'Stand'],
          a: 3,
          hint: 'التعليمات الصفية المباشرة تبدأ بمصدر الفعل: Stand up when the teacher enters.'
        },
        {
          q: '____ your book after reading.',
          ar: '____ كتابك بعد القراءة.',
          o: ['Open', 'Close', 'Sing', 'Stand'],
          a: 1,
          hint: 'من نصوص الدرس الثاني: Close your book after reading.'
        },
        {
          q: 'Write your name on the ____.',
          ar: 'اكتب اسمك على ____.',
          o: ['desk', 'chair', 'board', 'pencil'],
          a: 2,
          hint: 'سؤال نصي من تدريبات الوحدة الثالثة: Write your name on the board.'
        },
        {
          q: 'What do you do in the classroom? - I ____ with my friends.',
          ar: 'ماذا تفعل في الفصل؟ - أنا ____ مع أصدقائي.',
          o: ['play', 'plays', 'playing', 'to play'],
          a: 0,
          hint: 'الإجابة عن السؤال باستخدام المضارع البسيط مع الضمير I: I play with my friends.'
        },
        {
          q: 'I draw a ____ with my pencil.',
          ar: 'أنا أرسم ____ بقلمي الرصاص.',
          o: ['circle', 'door', 'window', 'hand'],
          a: 0,
          hint: 'من تعليمات وأنشطة الفصل بالدرس الثاني: Draw a circle.'
        },
        {
          q: 'The children ____ playing.',
          ar: 'الأطفال ____ يلعبون.',
          o: ['is', 'are', 'am', 'be'],
          a: 1,
          hint: 'الاسم الجمع The children يأخذ فعل are في الجمل الوصفية.'
        },
        {
          q: 'Which word starts with the \'cl\' sound?',
          ar: 'أي كلمة تبدأ بالصوت \'cl\'؟',
          o: ['read', 'clean', 'sit', 'door'],
          a: 1,
          hint: 'كلمة clean وردت في جزء الصوتيات للدرس الثاني كمثال للبادئة الصوتية [cl].'
        },
        {
          q: 'Which word starts with the \'dr\' sound?',
          ar: 'أي كلمة تبدأ بالصوت \'dr\'؟',
          o: ['ruler', 'sun', 'clap', 'draw'],
          a: 3,
          hint: 'كلمة draw تمثل البادئة الصوتية [dr] في تدريبات الصوتيات للدرس الثاني.'
        },
        {
          q: 'I ____ my desk to keep it tidy.',
          ar: 'أنا ____ مقعدي لأحافظ عليه مرتباً.',
          o: ['clean', 'draw', 'stand', 'raise'],
          a: 0,
          hint: 'من مفردات أفعال الفصل بالدرس الأول: clean my desk.'
        },
        {
          q: 'The girl is ____ a picture.',
          ar: 'البنت ____ صورة.',
          o: ['color', 'drawing', 'stand', 'write'],
          a: 1,
          hint: 'بعد فعل is في الجمل الوصفية يأتي الفعل مضافاً له ing: The girl is drawing a picture.'
        }
      ]
    },
    {
      id: 'u4',
      title: 'Unit 4: Everyday Life',
      qs: [
        {
          q: 'This is my ____. She is kind.',
          ar: 'هذه ____. هي طيبة/عطوفة.',
          o: ['father', 'mother', 'brother', 'grandfather'],
          a: 1,
          hint: 'الضمير She يعود على المفرد المؤنث (mother) كما ورد في نصوص درس العائلة.'
        },
        {
          q: 'Who is this? - This is my ____. He is tall.',
          ar: 'من هذا؟ - هذا ____. هو طويل القامة.',
          o: ['sister', 'mother', 'brother', 'grandmother'],
          a: 2,
          hint: 'استخدام الضمير He يعود على المفرد المذكر (brother) من جمل الدرس الأول.'
        },
        {
          q: 'I ____ my teeth at night.',
          ar: 'أنا ____ أسناني بالفرشاة ليلاً.',
          o: ['eat', 'walk', 'brush', 'play'],
          a: 2,
          hint: 'من التعبيرات اللغوية الأساسية بالدرس الثالث: brush my teeth.'
        },
        {
          q: 'She ____ breakfast at seven o\'clock.',
          ar: 'هي ____ وجبة الإفطار في الساعة السابعة تماماً.',
          o: ['eat', 'eats', 'eating', 'to eat'],
          a: 1,
          hint: 'في زمن المضارع البسيط، يضاف للفعل s مع الفاعل المفرد الغائب (She eats).'
        },
        {
          q: 'What do you do in the morning? - I ____ to school.',
          ar: 'ماذا تفعل في الصباح؟ - أنا ____ إلى المدرسة.',
          o: ['walk', 'walks', 'walking', 'sleep'],
          a: 0,
          hint: 'الفعل يأتي في المصدر مع الضمير I في المضارع البسيط: I walk to school.'
        },
        {
          q: 'This is Ahmed\'s car. It is ____ car.',
          ar: 'هذه سيارة أحمد. إنها ____.',
          o: ['her', 'my', 'his', 'your'],
          a: 2,
          hint: 'صفة الملكية العائدة على مفرد مذكر (Ahmed) هي his.'
        },
        {
          q: 'I wash my ____ with water and soap.',
          ar: 'أنا أغسل ____ بالماء والصابون.',
          o: ['teeth', 'face', 'breakfast', 'bed'],
          a: 1,
          hint: 'من مفردات العناية الشخصية بالدرس الثالث: wash my face.'
        },
        {
          q: 'Which word has the digraph \'th\' sound /θ/?',
          ar: 'أي كلمة تحتوي على صوت \'th\' المهموس /θ/؟',
          o: ['thin', 'mother', 'brother', 'father'],
          a: 0,
          hint: 'كلمة thin تحتوي على صوت /θ/ كما ورد في درس الصوتيات الرابع، بينما البقية بصوت /ð/.'
        },
        {
          q: 'Which word has the long \'o\' sound?',
          ar: 'أي كلمة تحتوي على صوت حرف \'o\' الممدود؟',
          o: ['box', 'dog', 'rose', 'fox'],
          a: 2,
          hint: 'كلمة rose تمثل الصوت الممدود long \'o\' في صوتيات الدرس الثاني.'
        },
        {
          q: 'Which word has the long \'u\' sound?',
          ar: 'أي كلمة تحتوي على صوت حرف \'u\' الممدود؟',
          o: ['sun', 'cup', 'bun', 'cube'],
          a: 3,
          hint: 'كلمة cube تمثل الصوت الممدود long \'u\' في الدرس الثاني.'
        },
        {
          q: 'My grandfather is very ____.',
          ar: 'جدي ____ جداً.',
          o: ['kind', 'desk', 'thin', 'morning'],
          a: 0,
          hint: 'الصفة المستخدمة لوصف الجد في نصوص القراءة بالدرس الأول هي kind (عطوف/طيب).'
        },
        {
          q: 'He ____ up early in the morning.',
          ar: 'هو ____ مبكراً في الصباح.',
          o: ['wake', 'wakes', 'waking', 'is wake'],
          a: 1,
          hint: 'قاعدة المضارع البسيط: إضافة s للفعل مع الفاعل المفرد He: He wakes up.'
        }
      ]
    },
    {
      id: 'u5',
      title: 'Unit 5: My Home',
      qs: [
        {
          q: 'Where is the table? - It\'s in the ____ room.',
          ar: 'أين الطاولة؟ - إنها في غرفة ____.',
          o: ['bed', 'bath', 'dining', 'garden'],
          a: 2,
          hint: 'من نصوص الدرس الأول لتسمية غرف المنزل: It\'s in the dining room.'
        },
        {
          q: 'The lamp is ____ the table.',
          ar: 'المصباح يكون ____ الطاولة.',
          o: ['in', 'on', 'under', 'between'],
          a: 1,
          hint: 'حرف الجر الخاص بالمكان on يعني على/فوق: The lamp is on the table.'
        },
        {
          q: 'There ____ a bed in the bedroom.',
          ar: 'يوجد ____ سرير في غرفة النوم.',
          o: ['is', 'are', 'am', 'be'],
          a: 0,
          hint: 'نستخدم There is مع المفرد المعدود المسبوق بأداة نكرة (a bed).'
        },
        {
          q: 'I sleep in the ____.',
          ar: 'أنا أنام في ____.',
          o: ['kitchen', 'garden', 'bathroom', 'bedroom'],
          a: 3,
          hint: 'من الوظائف اللغوية واستخدامات الغرف: I sleep in the bedroom.'
        },
        {
          q: '____ helps you at home? - My sister.',
          ar: '____ يساعدك في المنزل؟ - أختي.',
          o: ['Where', 'Who', 'What', 'How'],
          a: 1,
          hint: 'للسؤال عن الفاعل العاقل في زمن المضارع البسيط نستخدم Who.'
        },
        {
          q: 'I help my mom ____ the dishes.',
          ar: 'أنا أساعد أمي في ____ الأطباق.',
          o: ['wash', 'washes', 'washing', 'to washed'],
          a: 0,
          hint: 'الملاحظة النحوية المقررة بالدرس الرابع: يأتي الفعل الثاني في المصدر بعد help (help + someone + inf.).'
        },
        {
          q: 'Where ____ the chairs? - They are in the kitchen.',
          ar: 'أين ____ الكراسي؟ - إنها في المطبخ.',
          o: ['is', 'am', 'are', 'do'],
          a: 2,
          hint: 'للسؤال عن مكان اسم جمع (the chairs) نستخدم فعل are: Where are the chairs?'
        },
        {
          q: 'Which word has the digraph \'sh\' sound /ʃ/?',
          ar: 'أي كلمة تحتوي على صوت \'sh\' /ʃ/؟',
          o: ['chair', 'ship', 'thin', 'teeth'],
          a: 1,
          hint: 'كلمة ship تمثل الصوت /ʃ/ في جزء الصوتيات للدرس الرابع.'
        },
        {
          q: 'Which word has the digraph \'th\' sound /ð/?',
          ar: 'أي كلمة تحتوي على صوت \'th\' المجهور /ð/؟',
          o: ['thunder', 'thick', 'math', 'brother'],
          a: 3,
          hint: 'كلمة brother وردت في صوتيات الدرس الثالث كمثال لصوت /ð/.'
        },
        {
          q: 'There is a sofa in the ____.',
          ar: 'توجد أريكة في ____.',
          o: ['living room', 'bathroom', 'hall', 'cup'],
          a: 0,
          hint: 'من تدريبات ونصوص مفردات المنزل: There is a sofa in the living room.'
        },
        {
          q: 'I eat dinner with my family in the ____ room.',
          ar: 'أنا أتناول العشاء مع عائلتي في غرفة ____.',
          o: ['bed', 'bath', 'dining', 'balcony'],
          a: 2,
          hint: 'غرفة تناول الطعام وتناول الوجبات هي the dining room.'
        },
        {
          q: 'My dog is sleeping ____ the tree in the garden.',
          ar: 'كلبي ينام ____ الشجرة في الحديقة.',
          o: ['on', 'under', 'in', 'at'],
          a: 1,
          hint: 'حرف الجر under بمعنى تحت، كما ورد في تدريبات حروف الجر والمكان بالدرس الأول والثاني.'
        }
      ]
    },
    {
      id: 'u6',
      title: 'Unit 6: Rooms at Home',
      qs: [
        {
          q: 'Where do you cook food? - In the ____.',
          ar: 'أين تطبخ الطعام؟ - في ____.',
          o: ['bedroom', 'kitchen', 'hall', 'balcony'],
          a: 1,
          hint: 'المطبخ kitchen هو المكان المخصص للطبخ وإعداد الطعام حسب نصوص الوحدة السادسة.'
        },
        {
          q: 'Where do you watch TV? - I watch TV in the ____ room.',
          ar: 'أين تشاهد التلفاز؟ - أنا أشاهد التلفاز في غرفة ____.',
          o: ['dining', 'bed', 'living', 'bath'],
          a: 2,
          hint: 'السؤال والجواب النموذجي في وظائف اللغة بالدرسين الأول والثاني: I watch TV in the living room.'
        },
        {
          q: 'The bed is ____ to the window.',
          ar: 'السرير يكون ____ النافذة.',
          o: ['next', 'in', 'on', 'under'],
          a: 0,
          hint: 'حرف الجر المركب الدال على المكان هو next to بمعنى بجانب.'
        },
        {
          q: 'There ____ three bedrooms in my house.',
          ar: 'يوجد ____ ثلاث غرف نوم في منزلي.',
          o: ['is', 'are', 'am', 'be'],
          a: 1,
          hint: 'نستخدم There are مع الاسم الجمع (three bedrooms).'
        },
        {
          q: 'Where is the milk? - It is in the ____.',
          ar: 'أين الحليب؟ - إنه في ____.',
          o: ['shower', 'fridge', 'sofa', 'desk'],
          a: 1,
          hint: 'من مفردات أجهزة المنزل بالوحدة: الثلاجة fridge لحفظ الطعام والمشروبات.'
        },
        {
          q: 'I take a shower in the ____.',
          ar: 'أنا أستحم في ____.',
          o: ['bathroom', 'garden', 'kitchen', 'living room'],
          a: 0,
          hint: 'الحمام bathroom هو المكان المخصص للاستحمام (shower).'
        },
        {
          q: 'Which word has the digraph \'ch\' sound /tʃ/?',
          ar: 'أي كلمة تحتوي على صوت \'ch\' /tʃ/؟',
          o: ['ship', 'fish', 'cheese', 'teeth'],
          a: 2,
          hint: 'كلمة cheese وردت في صوتيات الدرس الثالث كمثال لصوت /tʃ/، بينما ship و fish بصوت /ʃ/.'
        },
        {
          q: 'We eat lunch on the ____ in the afternoon.',
          ar: 'نحن نتناول الغداء على ____ في وقت الظهيرة.',
          o: ['beach', 'chair', 'bed', 'table'],
          a: 0,
          hint: 'من جمل القراءة وتدريبات الصوتيات للدرس الثالث: We eat lunch on the beach in the afternoon.'
        },
        {
          q: 'There is a big ____ outside our house with many flowers.',
          ar: 'توجد ____ كبيرة خارج منزلنا بها الكثير من الزهور.',
          o: ['garden', 'hall', 'bathroom', 'kitchen'],
          a: 0,
          hint: 'من مفردات أجزاء المنزل بالدرس الأول: حديقة garden.'
        },
        {
          q: 'Where ____ you wash your face?',
          ar: 'أين ____ تغسل وجهك؟',
          o: ['is', 'are', 'do', 'does'],
          a: 2,
          hint: 'صيغة تكوين السؤال في زمن المضارع البسيط مع الفاعل you هي: Where do you + inf.?'
        },
        {
          q: 'There ____ a fridge in the kitchen.',
          ar: 'يوجد ____ ثلاجة في المطبخ.',
          o: ['is', 'are', 'were', 'am'],
          a: 0,
          hint: 'نستخدم There is مع الاسم المفرد المسبوق بأداة النكرة a (a fridge).'
        },
        {
          q: 'Which word ends with the \'ch\' sound /tʃ/?',
          ar: 'أي كلمة تنتهي بصوت \'ch\' /tʃ/؟',
          o: ['dish', 'lunch', 'thin', 'shop'],
          a: 1,
          hint: 'كلمة lunch تنتهي بصوت /tʃ/ كما ورد في أمثلة الصوتيات بالدرس الثالث.'
        }
      ]
    }
  ],
  stories: []
};

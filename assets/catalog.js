/* بيانات سين المشتركة: الأيقونات والخدمات والباقات والنماذج. عدّل الأسعار والخدمات من هنا فقط. */
window.SEEN = window.SEEN || {};
SEEN.ICONS = {
  book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M9 7h7M9 11h5"/>',
  project:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 7v7M12 7v4M16 7v9"/>',
  checks:'<path d="m3 17 2 2 4-4"/><path d="m3 7 2 2 4-4"/><path d="M13 6h8M13 12h8M13 18h8"/>',
  translate:'<path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/>',
  chart:'<path d="M3 3v18h18"/><path d="M8 17v-5M13 17V8M18 17v-9"/>',
  resume:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><circle cx="12" cy="12.5" r="2"/><path d="M8.5 18a3.5 3.5 0 0 1 7 0"/>',
  building:'<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
  globe:'<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  presentation:'<path d="M2 3h20"/><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"/><path d="m7 21 5-5 5 5"/><path d="M8 11l3-3 2 2 3-3"/>',
  layout:'<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/>',
  code:'<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/><path d="m14 4-4 16"/>',
  pen:'<path d="m12 19 7-7 3 3-7 7-3-3z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="m2 2 7.586 7.586"/><circle cx="11" cy="11" r="2"/>',
  calendar:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>',
  screen:'<rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/><path d="m10 7 5 3-5 3z"/>',
  sheet:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8M16 17H8M10 9H8"/>',
  exam:'<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
  bulb:'<path d="M9 18h6M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/>',
  notebook:'<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M2 6h4M2 10h4M2 14h4M2 18h4"/><path d="M10 8h6M10 12h6M10 16h4"/>',
  briefcase:'<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  pointer:'<path d="m9 9 5 12 1.8-5.2L21 14Z"/><path d="M7.2 2.2 8 5.1M5.1 8l-2.9-.8M14 4.1 12 6M6 12l-1.9 2"/>',
  poster:'<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M8 6h8M8 10h8"/><rect x="8" y="13" width="8" height="5" rx="1"/>',
  infographic:'<path d="M12 2v20"/><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/><path d="M14 5h6M4 12h6M14 19h5"/>',
  mindmap:'<circle cx="12" cy="12" r="3"/><circle cx="4" cy="5" r="2"/><circle cx="20" cy="5" r="2"/><circle cx="4" cy="19" r="2"/><circle cx="20" cy="19" r="2"/><path d="m6 6 4 4M18 6l-4 4M6 18l4-4M18 18l-4-4"/>',
  idcard:'<rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2.5"/><path d="M14 10h5M14 14h3"/>',
  social:'<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  mail:'<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  award:'<circle cx="12" cy="8" r="6"/><path d="M15.5 13 17 22l-5-3-5 3 1.5-9"/>',
  board:'<rect x="2" y="3" width="20" height="14" rx="1"/><path d="M12 17v4M8 21h8"/><path d="M6 8h6M6 12h9"/>',
  star:'<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
  chat:'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8M8 13h5"/>',
  card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',
  target:'<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  zap:'<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>',
  cap:'<path d="M22 10 12 5 2 10l10 5 10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/><path d="M22 10v6"/>',
  tag:'<path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><path d="M7 7h.01"/>',
  lock:'<rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  headset:'<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>',
  refresh:'<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>',
  bank:'<path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3"/>',
  phone:'<rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/>',
  copy:'<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  check:'<path d="M20 6 9 17l-5-5"/>',
  profile:'<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="10" r="3"/><path d="M7 18a5 5 0 0 1 10 0"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  eye:'<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  arrow:'<path d="M19 12H5M12 19l-7-7 7-7"/>',
  down:'<path d="M12 5v14M19 12l-7 7-7-7"/>',
  up:'<path d="M12 19V5M5 12l7-7 7 7"/>',
  instagram:'<rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
  xlogo:'<path d="M4 4l16 16M20 4L4 20"/>',
  tiktok:'<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3c.5 2.6 2.4 4.5 5 4.8"/>',
  whatsapp:'<path d="m3 21 1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/>'
};
Object.assign(SEEN.ICONS, {
  rocket:'<path d="M4.5 16.5c-1.5 1.3-2 5-2 5s3.7-.5 5-2c.7-.8.7-2.1-.1-2.9a2.2 2.2 0 0 0-2.9-.1z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.9A12.9 12.9 0 0 1 22 2c0 2.7-.8 7.5-6 11a22.4 22.4 0 0 1-4 2z"/><path d="M9 12H4s.5-3 2-4c1.6-1.1 5 0 5 0M12 15v5s3-.5 4-2c1.1-1.6 0-5 0-5"/>',
  spell:'<path d="m6 16 6-12 6 12"/><path d="M8 12h8"/><path d="m16 20 2 2 4-4"/>',
  mic:'<rect x="9" y="2" width="6" height="12" rx="3"/><path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4M8 22h8"/>',
  plane:'<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
  layers:'<path d="m12 2 10 5-10 5L2 7z"/><path d="m2 17 10 5 10-5M2 12l10 5 10-5"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5M12 3v12"/>',
  x:'<path d="M18 6 6 18M6 6l12 12"/>',
  sparkle:'<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/>'
});
SEEN.svg = (n, cls) => `<svg class="${cls||'ico'}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${SEEN.ICONS[n]||''}</svg>`;

/*DISCOUNT*/SEEN.DISCOUNT_END = '2026-12-03T23:59:59+03:00'; SEEN.DISCOUNT = Date.now() < Date.parse(SEEN.DISCOUNT_END) ? 20 : 0; /* عرض الافتتاح على الخدمات فقط، الباقات بدون خصم، وينتهي لحاله */
SEEN.dp = p => Math.round(p * (100 - SEEN.DISCOUNT) / 100);/*/DISCOUNT*/

SEEN.CATS = {
  students: ['الطلاب', 'Students', 'cap'],
  careers:  ['التوظيف والموظفين', 'Careers', 'briefcase'],
  teachers: ['المعلمين والإداريين', 'Teachers', 'board'],
  business: ['أصحاب المشاريع', 'Business owners', 'rocket'],
  design:   ['التصميم والتقنية', 'Design & Tech', 'pen'],
  automation: ['أتمتة الأعمال', 'Business Automation', 'zap']
};

/* id = معرّف ثابت يُحفظ في قاعدة البيانات، لا تغيّره بعد ما تبدأ الطلبات */
SEEN.SERVICES = [
  {id:'research',name:'بحوث جامعية',page:'research.html',desc:'بحث كامل بمراجع حقيقية وتنسيق حسب جامعتك',price:80,cat:'students',icon:'book',sample:'research-review',hot:true,en:['University Research','A complete paper with real references formatted to your university']},
  {id:'cv',name:'سيرة ذاتية احترافية',page:'cv.html',desc:'سيرة تعدّي فرز الشركات وتوصل لمسؤول التوظيف',price:50,tiers:[['لغة واحدة','One language',50],['عربي وإنجليزي','Arabic + English',79]],cat:'careers',icon:'resume',sample:'cv-ats-ar,cv-ats',hot:true,en:['Professional CV','A CV that passes company screening and reaches the recruiter']},
  {id:'linkedin',name:'تحسين حساب لينكدإن',page:'linkedin.html',desc:'حساب يلفت مسؤولي التوظيف بالعربي أو الإنجليزي',price:79,cat:'careers',icon:'profile',hot:true,sample:'linkedin-demo',tiers:[['أساسي','Basic',79],['شامل','Full',100]],en:['LinkedIn Profile Makeover','A profile that catches recruiters in Arabic or English']},
  {id:'companies',name:'ملف 100 شركة',page:'companies-list.html',desc:'100 شركة حسب تخصصك ومدينتك في جدول جاهز',price:50,cat:'careers',icon:'building',hot:true,sample:'companies-50',en:['100 Companies List','100 companies matched to your major and city in a ready sheet']},
  {id:'cover-letter',page:'cover-letter.html',name:'خطاب تعريفي',desc:'خطاب مخصص لكل وظيفة يربط خبرتك بمتطلباتها',price:35,cat:'careers',icon:'mail',isNew:true,en:['Cover Letter','A tailored letter that links your experience to the job']},
  {id:'interview',page:'interview.html',name:'تجهيز المقابلة الشخصية',desc:'أسئلة متوقعة لوظيفتك مع إجابات مبنية على خبرتك وطريقة «الموقف والمهمة والتصرف والنتيجة»',price:79,cat:'careers',icon:'mic',isNew:true,en:['Interview Prep','Likely questions for your role with STAR answers built on your experience']},
  {id:'course-projects',name:'مشاريع مقررات',page:'course-projects.html',desc:'مشروع متكامل حسب متطلبات الدكتور من الفكرة حتى التقرير',price:80,cat:'students',icon:'project',en:['Course Projects','A full project to your instructor\'s requirements from idea to report']},
  {id:'summaries',name:'تلخيص مناهج',page:'summaries.html',desc:'ملخصات مرتبة ومختصرة تسهّل عليك المذاكرة',price:30,cat:'students',icon:'notebook',en:['Course Summaries','Clear and concise summaries that make studying easier']},
  {id:'homework',name:'حل واجبات',page:'homework.html',desc:'حل واجبات جميع المواد بخطوات واضحة ومراجعة دقيقة قبل التسليم',price:30,cat:'students',icon:'checks',en:['Homework Help','Homework for all subjects solved with clear steps and checked before delivery']},
  {id:'translation',name:'ترجمة ملفات',page:'translation.html',desc:'ترجمة دقيقة بين العربي والإنجليزي بنفس تنسيق ملفك',price:30,cat:'students',icon:'translate',sample:'translation-demo',en:['File Translation','Accurate Arabic and English translation that keeps your file layout']},
  {id:'proofreading',page:'proofreading.html',name:'تدقيق لغوي وتنسيق',desc:'تصحيح الأخطاء وتنسيق الملف والمراجع حسب نظام التوثيق الأمريكي أو دليل جامعتك',price:35,cat:'students',icon:'spell',isNew:true,en:['Proofreading & Formatting','Language fixes plus layout and references in APA or your university style']},
  {id:'sop',page:'sop.html',name:'خطاب نوايا للابتعاث والقبول',desc:'خطاب نوايا أو خطاب تحفيزي يقنع لجنة القبول',price:149,cat:'students',icon:'plane',isNew:true,en:['Statement of Purpose','A statement of purpose or motivation letter that convinces the admissions panel']},
  {id:'presentations',name:'عروض تقديمية',page:'presentations.html',desc:'عرض مرتب يشد الحضور ويوضح فكرتك',price:60,cat:'students',icon:'presentation',sample:'presentation',en:['Presentations','A clear presentation that holds your audience']},
  {id:'poster',name:'بوستر علمي',page:'scientific-poster.html',desc:'بوستر أكاديمي لمشروع التخرج أو البحث',price:69,cat:'students',icon:'poster',sample:'poster-demo',en:['Scientific Poster','An academic poster for your graduation project or research']},
  {id:'mind-maps',name:'خرائط ذهنية مصممة',page:'mind-maps.html',desc:'ملخصات بصرية بالألوان والأيقونات وخمس خرائط بـ79 ريال',price:25,cat:'students',icon:'mindmap',sample:'mindmap-demo',en:['Mind Maps','Visual summaries with colors and icons and 5 maps for 79 SAR']},
  {id:'study-planner',name:'جدول مذاكرة ومخطط',page:'study-planner.html',desc:'مخطط أسبوعي أو فصلي جاهز للطباعة',price:20,cat:'students',icon:'calendar',sample:'schedule-demo',en:['Study Planner','A weekly or semester planner ready to print']},
  {id:'tech-projects',name:'واجبات ومشاريع تقنية',page:'tech-projects.html',desc:'حل واجبات ومشاريع تقنية المعلومات والبرمجة',price:100,cat:'students',icon:'code',sample:'installments,converter',en:['Tech Assignments and Projects','IT and programming assignments and projects']},
  {id:'internship-report',page:'internship-report.html',name:'تقرير التدريب الميداني',desc:'تقرير التدريب التعاوني كامل حسب نموذج جامعتك من الغلاف حتى التوصيات',price:149,cat:'students',icon:'briefcase',isNew:true,en:['Internship Report','A complete co-op training report in your university format']},
  {id:'stats-analysis',page:'stats-analysis.html',name:'تحليل إحصائي للاستبانات',desc:'تحليل استبانتك بالجداول والاختبارات وتفسير النتائج جاهز للفصل الرابع',price:150,cat:'students',icon:'chart',isNew:true,en:['Statistical Analysis (SPSS)','Survey analysis with tables, tests and interpretation ready for your results chapter']},
  {id:'research-proposal',page:'research-proposal.html',name:'مقترح بحث أو رسالة',desc:'خطة بحث مرتبة: المشكلة والأسئلة والأهداف والمنهجية والجدول الزمني',price:199,cat:'students',icon:'book',isNew:true,en:['Research Proposal','A clear plan: problem, questions, objectives, method and timeline']},
  {id:'excel-automation',page:'excel-automation.html',name:'أتمتة ملفات إكسل',desc:'ملف يحسب ويرتب ويطلع تقاريره لحاله بالمعادلات والقوائم المنسدلة',price:120,cat:'careers',icon:'sheet',isNew:true,en:['Excel Automation','A workbook that calculates, sorts and reports by itself with formulas and dropdowns']},
  {id:'survey',page:'survey.html',name:'استبيان إلكتروني وتحليل نتائجه',desc:'نصمم الاستبيان على نماذج قوقل ونطلع لك تقرير بالنتائج والرسوم',price:79,cat:'careers',icon:'checks',isNew:true,en:['Online Survey + Results Report','We build your Google Form and deliver a results report with charts']},
  {id:'product-descriptions',page:'product-descriptions.html',name:'وصف منتجات للمتاجر',desc:'أوصاف مقنعة ومتوافقة مع البحث لمتجرك في سلة أو زد',price:59,cat:'business',icon:'tag',isNew:true,en:['Product Descriptions','Persuasive, search-friendly descriptions for your Salla or Zid store']},
  {id:'linkedin-content',page:'linkedin-content.html',name:'محتوى لينكدإن',desc:'منشورات أسبوعية تبني حضورك المهني وتلفت الشركات',price:149,cat:'careers',icon:'profile',isNew:true,en:['LinkedIn Content','Weekly posts that build your professional presence']},
  {id:'excel-dashboard',name:'لوحة مؤشرات إكسل',page:'excel-dashboard.html',desc:'بياناتك في رسوم ومؤشرات واضحة تتحدث تلقائيًا',price:149,cat:'careers',icon:'chart',sample:'dashboard-demo',en:['Excel Dashboard','Your data in clear charts and indicators that update automatically']},
  {id:'executive-summary',name:'ملخص تنفيذي للتقارير',page:'executive-summary.html',desc:'تقريرك الطويل في صفحة واحدة بالأرقام والتوصيات',price:79,cat:'careers',icon:'notebook',sample:'execsum-demo',en:['Executive Summary','Your long report on one page with key numbers and recommendations']},
  {id:'personal-website',name:'موقع شخصي',page:'personal-website.html',desc:'موقع احترافي يعرض سيرتك وأعمالك في رابط واحد',price:199,cat:'careers',icon:'globe',sample:'website-demo',en:['Personal Website','A professional site showing your CV and work in one link']},
  {id:'teacher-portfolio',name:'ملف إنجاز المعلم',page:'teacher-portfolio.html',desc:'ملف منظم بالشواهد حسب عناصر تقييم الأداء',price:79,cat:'teachers',icon:'briefcase',sample:'portfolio-demo',en:['Teacher Portfolio','An organized evidence portfolio based on performance review criteria']},
  {id:'gradebook',name:'سجل درجات ومتابعة',page:'gradebook.html',desc:'سجل يحسب المجموع والتقدير والمتوسط تلقائيًا',price:40,cat:'teachers',icon:'sheet',sample:'grades-demo',en:['Gradebook','A gradebook that calculates totals grades and averages automatically']},
  {id:'activity-report',name:'تقرير نشاط مدرسي',page:'school-activity-report.html',desc:'تقرير منسق بالأهداف والشواهد والتوصيات بهوية المدرسة',price:40,cat:'teachers',icon:'exam',sample:'report-demo',en:['School Activity Report','A formatted report with goals evidence and recommendations']},
  {id:'lesson-presentation',name:'عرض تقديمي تعليمي',page:'lesson-presentation.html',desc:'شرائح تعليمية جذابة تناسب الدرس والمرحلة',price:60,cat:'teachers',icon:'screen',en:['Lesson Presentation','Engaging teaching slides suited to the lesson and grade']},
  {id:'worksheets',name:'أوراق عمل',page:'worksheets.html',desc:'أوراق عمل وتمارين منسقة لكل درس',price:40,cat:'teachers',icon:'sheet',en:['Worksheets','Well formatted worksheets and exercises for each lesson']},
  {id:'exams',name:'اختبارات',page:'exams.html',desc:'اختبارات ونماذج أسئلة مع نموذج الإجابة',price:60,cat:'teachers',icon:'exam',en:['Exams','Exams and question sets with an answer key']},
  {id:'teaching-aids',name:'وسائل تعليمية',page:'teaching-aids.html',desc:'وسائل وأنشطة تخلي الطلاب يتفاعلون في الحصة',price:70,cat:'teachers',icon:'bulb',en:['Teaching Aids','Aids and activities that get students involved']},
  {id:'lesson-plans',name:'تحضير الدروس',page:'lesson-plans.html',desc:'تحاضير جاهزة ومنظمة وفق استراتيجيات التدريس',price:60,cat:'teachers',icon:'notebook',en:['Lesson Plans','Ready and organized lesson plans based on teaching strategies']},
  {id:'company-profile',page:'company-profile.html',name:'بروفايل الشركة',desc:'ملف تعريفي فخم لمشروعك: من نحن والخدمات والأعمال والعملاء',price:249,cat:'business',icon:'layers',isNew:true,en:['Company Profile','A premium profile for your business: about, services, work and clients']},
  {id:'pitch-deck',page:'pitch-deck.html',name:'عرض للمستثمرين',desc:'عرض مختصر يشرح المشكلة والحل والسوق والأرقام',price:349,cat:'business',icon:'rocket',isNew:true,en:['Investor Pitch Deck','A tight deck covering problem, solution, market and numbers']},
  {id:'feasibility',page:'feasibility.html',name:'دراسة جدوى مبسطة',desc:'تكاليف وإيرادات متوقعة ونقطة التعادل في ملف إكسل وتقرير',price:499,cat:'business',icon:'chart',isNew:true,en:['Lean Feasibility Study','Costs, projected revenue and break-even in an Excel model and report']},
  {id:'content-plan',page:'content-plan.html',name:'خطة محتوى سوشيال لشهر',desc:'30 فكرة منشور مع النصوص والهاشتاقات وجدول نشر',price:199,cat:'business',icon:'social',isNew:true,en:['Monthly Content Plan','30 post ideas with captions, hashtags and a posting schedule']},
  {id:'landing-page',page:'landing-page.html',name:'صفحة هبوط لمشروعك',desc:'صفحة سريعة تعرض منتجك وتجيب طلبات على واتساب',price:299,cat:'design',icon:'globe',isNew:true,en:['Landing Page','A fast page that presents your product and brings WhatsApp orders']},
  {id:'auto-orders',page:'auto-orders.html',name:'أتمتة الطلبات',desc:'تجميع الطلبات وتنظيمها وإرسال التأكيدات والتنبيهات وتحديثات الحالة تلقائيًا',price:0,quote:true,cat:'automation',icon:'checks',isNew:true,en:['Order Automation','Collect and organize orders, with automatic confirmations, alerts and status updates']},
  {id:'auto-appointments',page:'auto-appointments.html',name:'أتمتة المواعيد',desc:'تنظيم الحجوزات وإرسال التأكيدات والتذكيرات قبل الموعد',price:0,quote:true,cat:'automation',icon:'calendar',isNew:true,en:['Appointment Automation','Organized bookings with confirmations and reminders before each appointment']},
  {id:'auto-crm',page:'auto-crm.html',name:'أتمتة متابعة العملاء',desc:'حفظ بيانات المهتمين وتنظيم الاستفسارات وتذكير المسؤول بمتابعتها',price:0,quote:true,cat:'automation',icon:'profile',isNew:true,en:['Customer Follow-up Automation','Save leads, organize inquiries and remind your team to follow up']},
  {id:'auto-reports',page:'auto-reports.html',name:'أتمتة التقارير',desc:'تجميع بيانات المبيعات والمصاريف والطلبات وإرسال ملخصات دورية',price:0,quote:true,cat:'automation',icon:'chart',isNew:true,en:['Report Automation','Combine sales, expenses and orders data and receive periodic summaries']},
  {id:'logo',name:'تصميم شعارات',page:'logo-design.html',desc:'شعار يعبّر عن مشروعك مع أكثر من فكرة تختار منها',price:149,cat:'design',icon:'pen',en:['Logo Design','A logo that speaks for your project with several ideas to pick from']},
  {id:'infographic',name:'إنفوجرافيك',page:'infographic.html',desc:'معلوماتك وأرقامك في تصميم بصري جذاب',price:45,cat:'design',icon:'infographic',sample:'infographic-demo',en:['Infographic','Your information and numbers in an attractive visual design']},
  {id:'report-template',name:'قالب تقرير أو خطاب رسمي',page:'report-template.html',desc:'قالب منسق بهوية جهتك للتقارير والخطابات',price:79,cat:'design',icon:'sheet',en:['Report and Letter Template','A branded template for your reports and official letters']},
  {id:'invitations',name:'بطاقات دعوة وتهنئة',page:'invitations.html',desc:'دعوات تخرج ومناسبات بتصميم أنيق',price:25,cat:'design',icon:'mail',sample:'invitation-demo',en:['Invitation Cards','Elegant invitations for graduations and occasions']},
  {id:'certificates',name:'شهادات شكر وتقدير',page:'certificates.html',desc:'10 شهادات بالأسماء بتصميم رسمي جاهز للطباعة',price:50,cat:'design',icon:'award',sample:'certificate',en:['Certificates','10 named certificates in a formal print ready design']}
];

SEEN.PACKAGES = [
  {id:'pkg-job',name:'باقة الوظيفة',page:'job-package.html',price:129,was:171,hot:true,
   items:['سيرة ذاتية متوافقة مع أنظمة التوظيف','ملف 100 شركة حسب تخصصك ومدينتك','تحسين حساب لينكدإن','خطاب تعريفي احترافي','نصائح لتجهيز المقابلة'],
   en:['Job Package',['ATS-friendly CV','100 companies list for your major and city','LinkedIn makeover','Professional cover letter','Interview tips']]},
  {id:'pkg-grad',page:'graduation-package.html',name:'باقة التخرج',price:129,was:171,isNew:true,
   items:['بوستر علمي لمشروع التخرج','عرض تقديمي للمناقشة','تدقيق لغوي وتنسيق التقرير','سيرة ذاتية لأول وظيفة'],
   en:['Graduation Package',['Graduation project poster','Defense presentation','Report proofreading & formatting','First-job CV']]},
  {id:'pkg-teacher',name:'باقة المعلم',page:'teacher-package.html',price:95,was:127,
   items:['ملف إنجاز المعلم حسب عناصر التقييم','سجل درجات ومتابعة تلقائي','تقرير نشاط مدرسي بهوية المدرسة','3 تعديلات مجانية'],
   en:['Teacher Package',['Teacher portfolio by review criteria','Automatic gradebook','School activity report with your school branding','3 free revisions']]},
  {id:'pkg-launch',page:'launch-package.html',name:'باقة انطلاقة مشروع',price:549,was:716,isNew:true,
   items:['تصميم شعار بأكثر من فكرة','بروفايل الشركة','صفحة هبوط تستقبل الطلبات','خطة محتوى لأول شهر'],
   en:['Business Launch Package',['Logo with several concepts','Company profile','Landing page that takes orders','First-month content plan']]}
];

SEEN.WORKS = [
  {img:'cv-ats-ar',title:'سيرة ذاتية بالعربي',desc:'سيرة مرتبة متوافقة مع أنظمة التوظيف وإنجازات بالأرقام',demo:1,en:['Arabic CV','A clean CV built for hiring systems with measurable achievements']},
  {img:'cv-ats',title:'سيرة ذاتية بالإنجليزي',desc:'نفس السيرة بالإنجليزي وبنفس التنسيق',demo:1,en:['English CV','The same CV in English with the same layout']},
  {img:'linkedin-demo',title:'لينكدإن قبل وبعد',desc:'إعادة هيكلة الحساب والغلاف وصورة الحساب',demo:1,en:['LinkedIn before and after','Headline, About and experience rebuilt']},
  {img:'research-review',title:'بحث: مراجعة أدبيات',desc:'مراجعة 15 دراسة محكّمة في تعلّم الآلة لكشف التسلل الشبكي بتوثيق علمي',en:['Research: literature review','A review of 15 peer-reviewed studies, fully referenced']},
  {img:'companies-50',title:'ملف 100 شركة',desc:'جدول إكسل بالشركات المناسبة لتخصصك في مدينتك مع مواقعها',en:['100 companies list','An Excel sheet of companies for your major and city']},
  {img:'dashboard-demo',title:'لوحة مؤشرات إكسل',desc:'مؤشرات رئيسية ورسوم للمبيعات الشهرية وحسب المنطقة',demo:1,en:['Excel dashboard','Key indicators and sales charts']},
  {img:'poster-demo',title:'بوستر علمي',desc:'مقدمة وأهداف ومنهجية ونتائج برسم بياني وخاتمة',demo:1,en:['Scientific poster','Intro, objectives, method, results and conclusion']},
  {img:'presentation',title:'عرض تقديمي',desc:'4 شرائح عن إدارة الوقت للطلاب بتصميم واضح',en:['Presentation','A 4-slide deck on time management']},
  {img:'portfolio-demo',title:'ملف إنجاز المعلم',desc:'غلاف وفهرس محاور ملف الإنجاز حسب عناصر التقييم',demo:1,en:['Teacher portfolio','Cover and index by review criteria']},
  {img:'installments',title:'حاسبة تسعير التقسيط',desc:'برنامج يحسب سعر البيع بعد عمولة تابي وتمارا والضريبة',en:['Installment pricing calculator','Selling price after Tabby/Tamara fees and VAT']},
  {img:'converter',title:'تطبيق تحويل العملات',desc:'تطبيق جوال يحوّل بين الدولار والريال',live:'works/currency-converter.html',en:['Currency converter app','A mobile app converting USD and SAR']},
  {img:'infographic-demo',title:'إنفوجرافيك',desc:'خطوات كتابة البحث بأيقونات وخط زمني واضح',demo:1,en:['Infographic','Research steps with icons and a timeline']},
  {img:'mindmap-demo',title:'خريطة ذهنية',desc:'فكرة رئيسية وفروع ملونة تسهّل المراجعة',demo:1,en:['Mind map','One main idea with colored branches']},
  {img:'execsum-demo',title:'ملخص تنفيذي',desc:'تقرير من 40 صفحة في صفحة واحدة بالأرقام والتوصيات',demo:1,en:['Executive summary','A 40-page report on one page']},
  {img:'website-demo',title:'موقع شخصي',desc:'نبذة ومهارات وخبرات وأعمال مع زر تحميل السيرة',demo:1,en:['Personal website','Bio, skills, experience and a CV download']},
  {img:'certificate',title:'شهادة شكر وتقدير',desc:'تصميم رسمي بهوية مدرسية جاهز للطباعة',en:['Certificate','A formal school-branded A4 design']},
  {img:'invitation-demo',title:'بطاقة دعوة',desc:'دعوة حفل تخرج بتصميم رسمي أنيق',demo:1,en:['Invitation','An elegant graduation invitation']},
  {img:'translation-demo',title:'ترجمة ملف',desc:'ملخص بحث مترجم للإنجليزية بنفس التنسيق',demo:1,en:['Translation','An abstract translated with the layout kept']},
  {img:'grades-demo',title:'سجل درجات',desc:'يحسب المجموع والتقدير ومتوسط الفصل تلقائيًا',demo:1,en:['Gradebook','Totals, grades and class average automatically']},
  {img:'report-demo',title:'تقرير برنامج مدرسي',desc:'أهداف وإجراءات وشواهد وتوصيات مع خانات التوقيع',demo:1,en:['School report','Goals, actions, evidence and recommendations']}
];

SEEN.STATUS = {
  new:        ['طلب جديد','New','#6b7280'],
  quoted:     ['تم إرسال السعر','Quoted','#b7791f'],
  paid:       ['تم الدفع','Paid','#2563eb'],
  in_progress:['جاري التنفيذ','In progress','#7c3aed'],
  review:     ['معاينة ومراجعة','In review','#0e7490'],
  delivered:  ['تم التسليم','Delivered','#15803d'],
  cancelled:  ['ملغي','Cancelled','#b91c1c']
};
SEEN.STATUS_FLOW = ['new','quoted','paid','in_progress','review','delivered'];

SEEN.findItem = id => SEEN.SERVICES.find(s=>s.id===id) || SEEN.PACKAGES.find(p=>p.id===id);
SEEN.wa = text => `https://wa.me/${(window.SEEN_CONFIG||{}).WHATSAPP||'966594827253'}?text=${encodeURIComponent(text)}`;
SEEN.dbReady = () => { const c = window.SEEN_CONFIG||{}; return !!(c.SUPABASE_URL && c.SUPABASE_ANON_KEY); };
/* استدعاء دالة في قاعدة البيانات بدون مكتبات */
SEEN.rpc = async (fn, args) => {
  const c = window.SEEN_CONFIG;
  const r = await fetch(`${c.SUPABASE_URL}/rest/v1/rpc/${fn}`, {method:'POST', headers:{'Content-Type':'application/json', apikey:c.SUPABASE_ANON_KEY, Authorization:`Bearer ${c.SUPABASE_ANON_KEY}`}, body:JSON.stringify(args||{})});
  const txt = await r.text(); let data = null; try{ data = txt ? JSON.parse(txt) : null; }catch(e){ data = txt; }
  if(!r.ok) throw new Error((data && (data.message||data.hint)) || ('HTTP '+r.status));
  return data;
};
SEEN.lang = () => { try{ return localStorage.getItem('seen-lang')==='en' ? 'en' : 'ar'; }catch(e){ return 'ar'; } };

/* إحصائيات سين: يسجّل الزيارة ومن وين جات، بدون أي بيانات شخصية (رقم جلسة عشوائي بس) */
(function(){
  try{
    if(localStorage.getItem('seen-admin')==='1') return;            /* زياراتك أنت ما تنحسب */
    if(/^(localhost|127\.)/.test(location.hostname)&&!/statstest/.test(location.search)) return;          /* المعاينة على الجهاز ما تنحسب */
    var U='https://bwdkxoqhtcalyflnwkkr.supabase.co', K='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ3ZGt4b3FodGNhbHlmbG53a2tyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU2MTk1MDYsImV4cCI6MjExMTE5NTUwNn0.GBo_6_-qRsU8im5NrKOL3e1haSPYIPP1dPljnnegWoo';
    var ss=window.sessionStorage, sid=ss.getItem('seen-sid');
    if(!sid){sid=Math.random().toString(36).slice(2)+Date.now().toString(36);ss.setItem('seen-sid',sid);}
    var src=ss.getItem('seen-src'), ref='';
    if(!src){
      var q=new URLSearchParams(location.search), tag=(q.get('src')||q.get('utm_source')||'').toLowerCase();
      if(!tag&&location.search==='?x') tag='x';
      var MAP={wa:'واتساب',whatsapp:'واتساب',x:'إكس',twitter:'إكس',tt:'تيك توك',tiktok:'تيك توك',ig:'انستقرام',instagram:'انستقرام',snap:'سناب شات',snapchat:'سناب شات',google:'قوقل',gbp:'ملف قوقل',maps:'ملف قوقل',li:'لينكدإن',linkedin:'لينكدإن',yt:'يوتيوب',youtube:'يوتيوب'};
      try{ref=document.referrer?new URL(document.referrer).hostname.replace(/^www\./,''):'';}catch(e){}
      if(tag) src=MAP[tag]||tag;
      else if(!ref) src='مباشر أو تطبيق';
      else if(/(^|\.)justseensa\.com$/.test(ref)) src='مباشر أو تطبيق';
      else if(/google\./.test(ref)) src='بحث قوقل';
      else if(/bing\.|duckduckgo|yahoo|yandex/.test(ref)) src='بحث ثاني';
      else if(/(^|\.)t\.co$|twitter|x\.com/.test(ref)) src='إكس';
      else if(/tiktok/.test(ref)) src='تيك توك';
      else if(/whatsapp|wa\.me|l\.wl\.co/.test(ref)) src='واتساب';
      else if(/instagram/.test(ref)) src='انستقرام';
      else if(/snapchat/.test(ref)) src='سناب شات';
      else if(/linkedin|lnkd/.test(ref)) src='لينكدإن';
      else if(/facebook|fb\./.test(ref)) src='فيسبوك';
      else if(/youtube/.test(ref)) src='يوتيوب';
      else if(/chatgpt|openai|claude|perplexity|gemini|copilot/.test(ref)) src='الذكاء الاصطناعي';
      else src='مواقع ثانية';
      ss.setItem('seen-src',src);
    }
    window.SEEN_STATS={sid:sid,src:src};
    var dev=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)?'جوال':'كمبيوتر';
    fetch(U+'/rest/v1/rpc/log_visit',{method:'POST',keepalive:true,headers:{apikey:K,Authorization:'Bearer '+K,'Content-Type':'application/json'},
      body:JSON.stringify({p:{sid:sid,path:location.pathname.replace(/\/$/,'/index.html')||'/',source:src,ref:ref,device:dev}})}).catch(function(){});
  }catch(e){}
})();

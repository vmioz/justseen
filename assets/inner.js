/* يضيف زر «اطلب أونلاين» بجانب أزرار واتساب في صفحات الخدمات */
(function(){
  var MAP={'research.html':'research','cv.html':'cv','linkedin.html':'linkedin','companies-list.html':'companies','course-projects.html':'course-projects','summaries.html':'summaries','homework.html':'homework','translation.html':'translation','presentations.html':'presentations','scientific-poster.html':'poster','mind-maps.html':'mind-maps','study-planner.html':'study-planner','tech-projects.html':'tech-projects','excel-dashboard.html':'excel-dashboard','executive-summary.html':'executive-summary','personal-website.html':'personal-website','teacher-portfolio.html':'teacher-portfolio','gradebook.html':'gradebook','school-activity-report.html':'activity-report','lesson-presentation.html':'lesson-presentation','worksheets.html':'worksheets','exams.html':'exams','teaching-aids.html':'teaching-aids','lesson-plans.html':'lesson-plans','logo-design.html':'logo','infographic.html':'infographic','report-template.html':'report-template','invitations.html':'invitations','certificates.html':'certificates','job-package.html':'pkg-job','teacher-package.html':'pkg-teacher'};
  var page=location.pathname.split('/').pop()||'index.html', id=MAP[page];
  if(!id) return;
  document.querySelectorAll('.btns').forEach(function(box){
    if(box.querySelector('.order-online')) return;
    var en=document.documentElement.classList.contains('en');
    ['ar','en'].forEach(function(l){
      var a=document.createElement('a'); a.className='cta gold order-online'; a.href='order.html?s='+id; a.setAttribute('data-l',l);
      a.textContent=l==='ar'?'اطلب أونلاين':'Order online'; if(l==='en'){a.lang='en';a.dir='ltr';}
      box.insertBefore(a, box.firstChild);
    });
  });
})();

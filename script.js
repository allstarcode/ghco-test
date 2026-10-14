// script.js — small UI helpers: mobile nav toggle and smooth scrolling
document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.nav-toggle');
  const header = document.querySelector('.site-header');
  if(toggle && header){
    toggle.addEventListener('click', ()=>{
      header.classList.toggle('open');
      const expanded = header.classList.contains('open');
      toggle.setAttribute('aria-expanded', String(expanded));
    });
    // Close nav when clicking outside
    document.addEventListener('click', (e)=>{
      if(!header.contains(e.target) && header.classList.contains('open')){
        header.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
      }
    });
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.length>1){
        const el = document.querySelector(href);
        if(el){
          e.preventDefault();
          el.scrollIntoView({behavior:'smooth',block:'start'});
          // close nav on mobile
          if(header.classList.contains('open')){
            header.classList.remove('open');
          }
        }
      }
    });
  });
});

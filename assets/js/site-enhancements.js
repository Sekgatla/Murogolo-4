/* Shared progressive enhancements for Murogolo Primary School. */
(function(){
  'use strict';
  var year=document.querySelector('[data-current-year]'); if(year) year.textContent=String(new Date().getFullYear());
  var menu=document.getElementById('sideMenu'), openBtn=document.getElementById('menuBtn'), closeBtn=document.getElementById('menuClose');
  if(menu&&openBtn){
    var focusable='a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])';
    menu.addEventListener('keydown',function(e){
      if(e.key!=='Tab'||!menu.classList.contains('open')) return;
      var items=Array.prototype.slice.call(menu.querySelectorAll(focusable)).filter(function(el){return el.offsetParent!==null;});
      if(!items.length)return;
      if(e.shiftKey&&document.activeElement===items[0]){e.preventDefault();items[items.length-1].focus();}
      else if(!e.shiftKey&&document.activeElement===items[items.length-1]){e.preventDefault();items[0].focus();}
    });
    if(closeBtn) closeBtn.setAttribute('aria-label','Close navigation menu');
  }
  document.querySelectorAll('a[href="#"]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();});});
})();

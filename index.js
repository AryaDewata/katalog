window.onscroll = (function(){backgroundNavbar()});

  function backgroundNavbar () {
     const nav = document.querySelector('nav');
     const menu = document.querySelectorAll('.menu a');
     
       if ( document.documentElement.scrollTop < 20 ) {
        //  nav.style.removeProperty ( ' background - color ' );
          nav.style.background = 'transparent' ;
          nav.style.color = "#fff";
          menu.forEach(e=>e.style.color ='#fff');
        }
           else { 
            // nav.style.removeProperty('background-color');
            nav.style.background = "#fff"; 
            nav.style.color = '#000';
            menu.forEach(e=>e.style.color ='#000');
           } 
        }
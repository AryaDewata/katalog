const nav = document.querySelector('nav');
const menu = document.querySelectorAll('.menu a');

window.onscroll = (function(){
  backgroundNavbar();
})

function backgroundNavbar () {    
  if ( document.documentElement.scrollTop < 30 ) {
    nav.style.background = 'transparent' ;
    nav.style.color = "#fff";
    menu.forEach(e => e.style.color ='#fff');
  } else { 
    nav.style.background = "#fff"; 
    nav.style.color = '#000';
    menu.forEach(e => e.style.color ='#000');
    } 
}
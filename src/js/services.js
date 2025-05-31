const header = document.querySelector('.header');
const originalheight = header.offsetHeight;
const menubtn = document.querySelector('#menubtn')
const closemenubtn = document.querySelector('#closemenubtn')
const mobilemenu = document.querySelector('#mobile-menu')

window.addEventListener('scroll',()=>{
  let scrollPosition = window.scrollY;
  if (scrollPosition > originalheight){
    header.classList.add('fixed');
    header.classList.add('bg-[rgba(0,0,0,0.8)]')
  }else{
    header.classList.remove('fixed');
    header.classList.remove('bg-[rgba(0,0,0,0.8)]')
  }
})


menubtn.addEventListener('click',()=>{
  mobilemenu.classList.remove('-translate-y-200')
})

closemenubtn.addEventListener('click',()=>{
  mobilemenu.classList.add('-translate-y-200')
})
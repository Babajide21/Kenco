const header = document.querySelector('.header');
const originalheight = header.offsetHeight;
const menubtn = document.querySelector('#menubtn')
const closemenubtn = document.querySelector('#closemenubtn')
const mobilemenu = document.querySelector('#mobile-menu')

window.addEventListener('scroll',()=>{
  let scrollPosition = window.scrollY;
  if (scrollPosition > originalheight){
    // header.classList.add('fixed');
    headtext.classList.remove('text-lg')
    headtext.classList.remove('md:text-xl')
    headtext.classList.add('text-md')
    headtext.classList.add('md:text-lg')
    header.classList.add('bg-[rgba(0,0,0,0.8)]')
    header.classList.remove('py-8')
    header.classList.add('py-4')
  }else{
    // header.classList.remove('fixed');
    headtext.classList.add('text-lg')
    headtext.classList.add('md:text-xl')
    headtext.classList.remove('text-md')
    headtext.classList.remove('md:text-lg')
    header.classList.remove('bg-[rgba(0,0,0,0.8)]')
    header.classList.add('py-8')
    header.classList.remove('py-4')
  }
})


menubtn.addEventListener('click',()=>{
  mobilemenu.classList.remove('-translate-y-200')
})

closemenubtn.addEventListener('click',()=>{
  mobilemenu.classList.add('-translate-y-200')
})
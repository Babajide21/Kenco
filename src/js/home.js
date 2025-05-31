const header = document.querySelector('.header');
const originalheight = header.offsetHeight;
const menubtn = document.querySelector('#menubtn')
const closemenubtn = document.querySelector('#closemenubtn')
const mobilemenu = document.querySelector('#mobile-menu')
const form = document.querySelector('.form')
const textdrop = document.querySelector('#textdrop')
const text = document.querySelector('#text')
const textContainer = document.querySelector("#textContainer");
const icon = document.querySelector("#fontIcon");
const textsec = document.querySelector('#textsec')
const textdrop2 = document.querySelector('#textdrop2')
const fontIcon = document.querySelector('#fontIcon2')
const textContainer2 = document.querySelector('#textContainer2')
const textdrop3 = document.querySelector('#textdrop3')
const fontIcon2 = document.querySelector('#fontIcon3')
const textcontainer3 = document.querySelector('#textcontainer3')

menubtn.addEventListener('click',()=>{
  mobilemenu.classList.remove('-translate-y-200')
})

closemenubtn.addEventListener('click',()=>{
  mobilemenu.classList.add('-translate-y-200')
})

textdrop.addEventListener('click',()=>{
  textContainer.classList.toggle("max-h-[1000px]");
  textContainer.classList.toggle("max-h-0");
  textsec.classList.toggle('items-center')
  icon.classList.toggle("fa-plus");
  icon.classList.toggle("fa-minus");
})

textdrop2.addEventListener('click',()=>{
  textContainer2.classList.toggle('max-h-[1000px]')
  textContainer2.classList.toggle('max-h-0')
  textContainer2.classList.toggle('py-4')
  fontIcon.classList.toggle('fa-plus')
  fontIcon.classList.toggle('fa-minus')
})

textdrop3.addEventListener('click',()=>{
  textcontainer3.classList.toggle('max-h-[1000px]')
  textcontainer3.classList.toggle('max-h-0')
  // textcontainer3.classList.toggle('py-4')
  fontIcon2.classList.toggle('fa-plus')
  fontIcon2.classList.toggle('fa-minus')
})

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
form.addEventListener('submit',(e)=>{
  e.preventDefault()
})
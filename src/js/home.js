const header = document.querySelector('.header');
const originalheight = header.offsetHeight;
const headtext = document.querySelector('#headtext')
const menubtn = document.querySelector('#menubtn')
const closemenubtn = document.querySelector('#closemenubtn')
const mobilemenu = document.querySelector('#mobile-menu')
const form = document.querySelector('#contactForm')
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
  textsec.classList.toggle('items-center')
  fontIcon.classList.toggle('fa-plus')
  fontIcon.classList.toggle('fa-minus')
})

textdrop3.addEventListener('click',()=>{
  textcontainer3.classList.toggle('max-h-[1000px]')
  textcontainer3.classList.toggle('max-h-0')
  textsec.classList.toggle('items-center')
  // textcontainer3.classList.toggle('py-4')
  fontIcon2.classList.toggle('fa-plus')
  fontIcon2.classList.toggle('fa-minus')
})

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

const fields = [
  { id: 'firstName', errorId: 'error-firstName' },
  { id: 'lastName', errorId: 'error-lastName' },
  { id: 'email', errorId: 'error-email' },
  { id: 'message', errorId: 'error-message' }
];
form.addEventListener('submit',(e)=>{
  e.preventDefault()
 let isValid = true;
  let firstInvalidField = null;

  fields.forEach(field => {
    const input = document.getElementById(field.id);
    const error = document.getElementById(field.errorId);

    if (input.value.trim() === '') {
      error.classList.remove('hidden');
      input.classList.add('border-red-500');
      if (!firstInvalidField) firstInvalidField = input;
      isValid = false;
    } else {
      error.classList.add('hidden');
      input.classList.remove('border-red-500');
    }
  });

  if (!isValid) {
    firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
    firstInvalidField.focus();
  } else {
    alert('Form submitted successfully!');
    form.reset(); // clears the form
  }
})
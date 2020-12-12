console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');
});



let replay = document.querySelector('.replayBtn');
let part = document.querySelector('.jsPart')
let hide = document.querySelector('.hidePart')
let cardBtn = document.querySelector('.cardBtn')
let cancel = document.querySelector('.cancelBtn')

if(replay){
  replay.addEventListener('click',function(){
    part.classList.replace('d-flex','d-none');
    cardBtn.classList.replace('d-flex','d-none');
    hide.classList.toggle("d-none");
    // part.classList.toggle('d-flex');
  
  },false)
  
  cancel.addEventListener('click',function(){
    part.classList.replace('d-none','d-flex');
    cardBtn.classList.replace('d-none','d-flex');
    hide.classList.toggle("d-none");
    // part.classList.toggle('d-flex');
  
  },false)
}





/////viewPart-Js///////
let vBtn = document.querySelector('.viewBtn');
let vIcon = document.querySelector('.viewIcon');
let vfooter = document.querySelector('.viewFooter');


  

vBtn.addEventListener('click',function(e){
    e.preventDefault()
  if(vIcon.textContent === "keyboard_arrow_down" ){
    vfooter.classList.replace('d-none','d-flex')
    vIcon.textContent= "keyboard_arrow_up";
  }else{
    vfooter.classList.replace('d-flex','d-none')
    vIcon.textContent= "keyboard_arrow_down";
  }
})


// vBtn.addEventListener('click',function(e){
//   e.preventDefault()
// if(vIcon.textContent === "keyboard_arrow_up" ){
//   vfooter.classList.replace('d-none','d-flex')
//   vIcon.textContent= "keyboard_arrow_";
// }else{
//   vfooter.classList.replace('d-flex','d-none')
//   vIcon.textContent= "keyboard_arrow_down";
// }
// })
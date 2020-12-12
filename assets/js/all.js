"use strict";

console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
});
var replay = document.querySelector('.replayBtn');
var part = document.querySelector('.jsPart');
var hide = document.querySelector('.hidePart');
var cardBtn = document.querySelector('.cardBtn');
var cancel = document.querySelector('.cancelBtn');

if (replay) {
  replay.addEventListener('click', function () {
    part.classList.replace('d-flex', 'd-none');
    cardBtn.classList.replace('d-flex', 'd-none');
    hide.classList.toggle("d-none"); // part.classList.toggle('d-flex');
  }, false);
  cancel.addEventListener('click', function () {
    part.classList.replace('d-none', 'd-flex');
    cardBtn.classList.replace('d-none', 'd-flex');
    hide.classList.toggle("d-none"); // part.classList.toggle('d-flex');
  }, false);
} /////viewPart-Js///////


var vBtn = document.querySelector('.viewBtn');
var vIcon = document.querySelector('.viewIcon');
var vfooter = document.querySelector('.viewFooter');
vBtn.addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target.nodeName);

  if (vIcon.textContent === "keyboard_arrow_down") {
    vfooter.classList.replace('d-none', 'd-flex');
    vIcon.textContent = "keyboard_arrow_up";
  } else {
    vfooter.classList.replace('d-flex', 'd-none');
    vIcon.textContent = "keyboard_arrow_down";
  }
});
//# sourceMappingURL=all.js.map

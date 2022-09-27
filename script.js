// const { ClickAwayListener } = require("@mui/material");
const container = document.querySelector(".container");
let option1 = document.querySelector(".anime-option1");
let option2 = document.querySelector(".anime-option2");
let option3 = document.querySelector(".anime-option3");
let menu = document.querySelector(".menu_bars");
let closed = document.querySelector(".close");
var y = document.querySelector(".etext");
var z = document.querySelector(".circle");
var w = document.querySelector(".square");
let mainMenu = document.querySelector(".menu_ol");
let mainM = document.querySelector(".unauth_tab .menu");
let mainM_AUTH = document.querySelector(".auth_tab #menu");
let drop1 = document.querySelector(".profile_displayname_abbr");
let drop2 = document.querySelector(".profile_icon");
let panel = document.querySelector(".panel");
let bodyClass = document.querySelector(".body");
const dropdown = document.querySelector(".profile_dropdown_container");
let circle_cancel = document.querySelector(".circle_closed");
let editTextLayer = document.querySelector(".editTextLayer");
let textInput = document.querySelector("#anime-element");
let favouritestab = document.querySelector(".favouritestab");
let editText = document.querySelector(".editText");
let userNotes = document.querySelector(".userNotes");
let add_note = document.querySelector(".add_note");
let threedot = document.querySelector(".threedot");
let viewCode = document.querySelector(".viewCode");
let codeView_cancel = document.querySelector(".codeView-cancel");
let editText_cancel = document.querySelector(".editText-cancel");
let code_copy = document.querySelector(".code-copy");
// let normal_star = document.querySelectorAll(".animation_options div span #icon");
// let golden_star = document.querySelectorAll(".golden");
let stars = document.querySelectorAll(".stars");

let favouriteOverlay = document.querySelector(".favouriteOverlay");
let userNoteOverlay = document.querySelector("#userNoteOverlay");
// let threedot_dropdown = document.querySelector(".dropdown");
let pin_note = document.querySelector(".pin-note");
let unpin = document.querySelector(".unpin");
let editNoteOverlay = document.querySelector("#editNoteOverlay");
let view_codeLayer = document.querySelector(".view-codeLayer");

// container.addEventListener("click", removeLayers)
menu.addEventListener("click", showmenu);
closed.addEventListener("click", showmenu);
option1.addEventListener("click", changeOption);
option2.addEventListener("click", changeOption);
option3.addEventListener("click", changeOption);
drop1.addEventListener("click", showdropdown);
drop2.addEventListener("click", showdropdown);
circle_cancel.addEventListener("click", showdropdown);
favouritestab.addEventListener("click", showFavourLayer);
userNotes.addEventListener("click", showUserNoteLayer);
add_note.addEventListener("click", showEditTextLayer);
// normal_star.addEventListener('click', changeStarGolden);
// golden_star.addEventListener('click', changeStarNormal);

viewCode.addEventListener("click", showViewCodetLayer);
codeView_cancel.addEventListener("click", showViewCodetLayer);
editText.addEventListener("click", EditTextLayer);
editText_cancel.addEventListener("click", EditTextLayer);
// code_copy.addEventListener('click', CopyText);
pin_note.addEventListener("click", pinned);
unpin.addEventListener("click", unpinned);
textInput.defaultValue = "Anima95";
// threedot.addEventListener('click',showThreedotDropdown)

//  function removeLayers(){
//     if(favouriteOverlay.style.display == "block" || userNoteOverlay.style.display == "block"){
//       userNoteOverlay.style.display = "none"
//       favouriteOverlay.style.display = "none"
//     }

// }

function showmenu() {
  if (mainMenu.style.display == "block") {
    mainMenu.style.display = "none";
  } else {
    mainMenu.style.display = "block";
  }

  if (mainM.style.display == "none") {
    mainM.style.display = "block";
  }

  if (mainM_AUTH.style.display == "none") {
    mainM_AUTH.style.display = "block";
  }
}

function showdropdown() {
  if (dropdown.style.display == "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

function changeOption() {
  if (this == option1) {
    y.style.display = "block";
    z.style.display = "none";
    w.style.display = "none";
    this.setAttribute("class", "fa-solid fa-font selected anime-option1");
    option2.setAttribute("class", "fa-solid fa-circle anime-option2");
    option3.setAttribute("class", "fa-solid fa-square anime-option3");
  } else if (this == option2) {
    z.style.display = "block";
    y.style.display = "none";
    w.style.display = "none";
    this.setAttribute("class", "fa-solid fa-circle selected anime-option2");
    option1.setAttribute("class", "fa-solid fa-font anime-option1");
    option3.setAttribute("class", "fa-solid fa-square anime-option3");
  }
  if (this == option3) {
    w.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
    this.setAttribute("class", "fa-solid fa-square selected anime-option3");
    option1.setAttribute("class", "fa-solid fa-font anime-option1");
    option2.setAttribute("class", "fa-solid fa-circle   anime-option2");
  }
}

function showFavourLayer() {
  if (favouriteOverlay.style.display == "block") {
    favouriteOverlay.style.display = "none";
  } else {
    favouriteOverlay.style.display = "block";
    userNoteOverlay.style.display = "none";
    view_codeLayer.style.display = "none";
  }
}

function showUserNoteLayer() {
  if (userNoteOverlay.style.display == "block") {
    userNoteOverlay.style.display = "none";
  } else {
    userNoteOverlay.style.display = "block";
    favouriteOverlay.style.display = "none";
    view_codeLayer.style.display = "none";
  }
}

function showEditTextLayer() {
  if (editNoteOverlay.style.display == "block") {
    editNoteOverlay.style.display = "none";
  } else {
    editNoteOverlay.style.display = "block";
  }
}

function showViewCodetLayer() {
  if (view_codeLayer.style.display == "block") {
    view_codeLayer.style.display = "none";
  } else {
    view_codeLayer.style.display = "block";
    favouriteOverlay.style.display = "none";
    userNoteOverlay.style.display = "none";
  }
}
function EditTextLayer(){
  if (editTextLayer.style.display == "block"){
    editTextLayer.style.display = "none"
  }else{
    editTextLayer.style.display = "block"
  }
}

function pinned() {
  pin_note.style.display = "none";
  unpin.style.display = "block";
  document.querySelector("#pinshow").style.display = "inline";
}

function unpinned() {
  pin_note.style.display = "block";
  unpin.style.display = "none";
  document.querySelector("#pinshow").style.display = "none";
}

function changeStars(thise) {
  if (thise.children[1].style.display == "none") {
    thise.children[1].style.display = "inline";
    thise.children[0].style.display = "none";
  } else {
    thise.children[1].style.display = "none";
    thise.children[0].style.display = "inline";
  }
}

//function favouritesTab() {
//    var element = document.getElementById("favouriteOverlay");
//    element.classList.toggle("favouriteShow")
//}

document
  .querySelector(".menu_bars")
  .addEventListener("click", () =>
    document.querySelector(".menu_ol").classList.toggle("show")
  );

document
  .querySelector(".fav1")
  .addEventListener("click", () =>
    document
      .querySelector(".favouriteOverlay")
      .classList.toggle("favouriteShow")
  );

// document.querySelector('.profile_icon').addEventListener
// ('click', () => document.querySelector('.profileOverlay').classList.toggle('profileShow'));

function moveDown() {
  var element = document.getElementsByClassName("element");
  for(i=0;i<element.length;i++){
    if(element[i].classList.contains("move_down")){
      element[i].classList.remove("move_down");
    }
    else{
    element[i].classList.add("move_down");
    }
    element[i].classList.remove("move_up","move_left","appear-from-right","bounce","fade","blink","tremble","rotate");
  }
}

function moveUp() {
  var element = document.getElementsByClassName("element");
  for(i=0;i<element.length;i++){
    if(element[i].classList.contains("move_up")){
      element[i].classList.remove("move_up");
    }
    else{
    element[i].classList.add("move_up");
    }
    element[i].classList.remove("move_down","move_left","appear-from-right","bounce","fade","blink","tremble","rotate");
}
}

function moveLeft() {
  var element = document.getElementsByClassName("element");
  for(i=0;i<element.length;i++){
    if(element[i].classList.contains("move_left")){
      element[i].classList.remove("move_left");
    }
    else{
    element[i].classList.add("move_left");
    }
    
    element[i].classList.remove("move_up","move_down","appear-from-right","bounce","fade","blink","tremble","rotate");
}
}

function moveRight() {
  var element = document.getElementsByClassName("element");
  for(i=0;i<element.length;i++){
    if(element[i].classList.contains("appear-from-right")){
      element[i].classList.remove("appear-from-right");
    }
    else{
    element[i].classList.add("appear-from-right");
    }
    element[i].classList.remove("move_up","move_left","move_down","bounce","fade","blink","tremble","rotate");
}
  
  
}

function bounce() {
  var element = document.getElementsByClassName("element");
  for(i=0;i<element.length;i++){
    if(element[i].classList.contains("bounce")){
      element[i].classList.remove("bounce");
    }
    else{
    element[i].classList.add("bounce");
    }
    element[i].classList.remove("move_up","move_left","appear-from-right","move_down","fade","blink","tremble","rotate");
}
}

function fade() {
  var element = document.getElementsByClassName("element");
  for(i=0;i<element.length;i++){
    if(element[i].classList.contains("fade")){
      element[i].classList.remove("fade");
    }
    else{
    element[i].classList.add("fade");
    }
    
    element[i].classList.remove("move_up","move_left","appear-from-right","bounce","move_down","blink","tremble","rotate");
}
}

function blink() {
  var element = document.getElementsByClassName("element");
  for(i=0;i<element.length;i++){
    if(element[i].classList.contains("blink")){
      element[i].classList.remove("blink");
    }
    else{
    element[i].classList.add("blink");
    }
    
    element[i].classList.remove("move_up","move_left","appear-from-right","bounce","fade","move_down","tremble","rotate");
  }
}

function tremble() {
  var element = document.getElementsByClassName("element");
  for(i=0;i<element.length;i++){
    if(element[i].classList.contains("tremble")){
      element[i].classList.remove("tremble");
    }
    else{
    element[i].classList.add("tremble");
    }
    
    element[i].classList.remove("move_up","move_left","appear-from-right","bounce","fade","blink","move_down","rotate");
  }
}

function rotate() {
  var element = document.getElementsByClassName("element");
  for(i=0;i<element.length;i++){
    if(element[i].classList.contains("rotate")){
      element[i].classList.remove("rotate");
    }
    else{
    element[i].classList.add("rotate");
    }
    
    element[i].classList.remove("move_up","move_left","appear-from-right","bounce","fade","blink","tremble","move_down");
  }
}

function colorbg(event) {
  var color = event.value;
  document.getElementsByTagName("textarea")[0].style.backgroundColor = color;
  document.getElementsByClassName("change")[0].style.backgroundColor = color;
}


function ChangetextElement(){
  if(textInput.value == ""){
  y.innerHTML = textInput.defaultValue;
  }
  else{
    y.innerHTML = textInput.value;
  }

}
//USerNote OverLay JS
// function toggleText(){
//     var x = document.getElementById('notes');
//     if (x.style.display === 'none'){
//         x.style.display = 'block'
//     } else{
//         x.style.display = 'none'
//     };
// };
// document.getElementById('notes').style.display = 'none';

//Element options experiment
if (document.querySelector("body").offsetHeight < screen.height) {
  panel.style.height = "100vh";
  bodyClass.style.height = "100vh";
}

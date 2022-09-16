// const { ClickAwayListener } = require("@mui/material");
const container = document.querySelector(".container");
let option1 = document.querySelector(".anime-option1");
let option2 = document.querySelector(".anime-option2");
let option3 = document.querySelector(".anime-option3");
let menu = document.querySelector(".menu_bars");
let closed = document.querySelector(".close");
var y = document.querySelector('.etext');
 var z = document.querySelector('.circle');
 var w = document.querySelector('.square');
 let mainMenu = document.querySelector(".menu_ol");
 let mainM = document.querySelector(".unauth_tab .menu");
 let mainM_AUTH = document.querySelector(".auth_tab #menu");
 let drop1 = document.querySelector(".profile_displayname_abbr");
let drop2 = document.querySelector(".profile_icon");
let panel = document.querySelector(".panel");
let bodyClass = document.querySelector(".body");
const dropdown = document.querySelector(".profile_dropdown_container");
let circle_cancel = document.querySelector(".circle_closed");

let favouritestab = document.querySelector(".favouritestab");
let editText = document.querySelector(".editText");
let userNotes = document.querySelector(".userNotes");
let add_note = document.querySelector(".add_note");
let threedot = document.querySelector(".threedot");
let viewCode = document.querySelector(".viewCode");
let codeView_cancel = document.querySelector(".codeView-cancel");
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
menu.addEventListener("click",showmenu);
closed.addEventListener("click",showmenu);
option1.addEventListener("click",changeOption);
option2.addEventListener("click",changeOption);
option3.addEventListener("click",changeOption);
drop1.addEventListener("click", showdropdown);
drop2.addEventListener("click", showdropdown);
circle_cancel.addEventListener("click", showdropdown);
favouritestab.addEventListener("click", showFavourLayer);
userNotes.addEventListener("click", showUserNoteLayer);
add_note.addEventListener('click', showEditTextLayer);
// normal_star.addEventListener('click', changeStarGolden);
// golden_star.addEventListener('click', changeStarNormal);



viewCode.addEventListener('click', showViewCodetLayer);
codeView_cancel.addEventListener('click', showViewCodetLayer);
// code_copy.addEventListener('click', CopyText);
pin_note.addEventListener('click', pinned);
unpin.addEventListener('click', unpinned);
// threedot.addEventListener('click',showThreedotDropdown)



//  function removeLayers(){
//     if(favouriteOverlay.style.display == "block" || userNoteOverlay.style.display == "block"){
//       userNoteOverlay.style.display = "none"
//       favouriteOverlay.style.display = "none" 
//     }

    
// }




function showmenu(){
    if (mainMenu.style.display == "none"){
        mainMenu.style.display = "block"
    }
    else{
        mainMenu.style.display = "none"
    }

     if (mainM.style.display == "none"){
        mainM.style.display = "block"
    }

      if (mainM_AUTH.style.display == "none"){
        mainM_AUTH.style.display = "block"
    }
}

function showdropdown(){
     if (dropdown.style.display == "none"){
        dropdown.style.display = "block"
    }
    else{
        dropdown.style.display = "none"
    }
}


function changeOption(){
    if (this==option1){
        y.style.display="block";
        z.style.display="none";
        w.style.display="none";
        this.setAttribute("class","fa-solid fa-font selected anime-option1");
        option2.setAttribute("class","fa-solid fa-circle anime-option2");
        option3.setAttribute("class","fa-solid fa-square anime-option3");
    }
    else if(this==option2){
        z.style.display="block";
        y.style.display="none";
        w.style.display="none";
         this.setAttribute("class","fa-solid fa-circle selected anime-option2");
        option1.setAttribute("class","fa-solid fa-font anime-option1");
        option3.setAttribute("class","fa-solid fa-square anime-option3");
    }
     if (this==option3){
        w.style.display="block";
        y.style.display="none";
        z.style.display="none";
         this.setAttribute("class","fa-solid fa-square selected anime-option3");
        option1.setAttribute("class","fa-solid fa-font anime-option1");
        option2.setAttribute("class","fa-solid fa-circle   anime-option2");
    }
}

function showFavourLayer(){
    if (favouriteOverlay.style.display == "none"){
        favouriteOverlay.style.display = "block"
         userNoteOverlay.style.display = "none"
         view_codeLayer.style.display = "none"
    }
    else{
        favouriteOverlay.style.display = "none"
    }
}


function showUserNoteLayer(){
    if (userNoteOverlay.style.display == "none"){
        userNoteOverlay.style.display = "block"
        favouriteOverlay.style.display = "none"
        view_codeLayer.style.display = "none"
    }
    else{
        userNoteOverlay.style.display = "none"
    }
}


function showEditTextLayer(){
    if (editNoteOverlay.style.display == "none"){
        editNoteOverlay.style.display = "block"
    }
    else{
        editNoteOverlay.style.display = "none"
    }
}


function showViewCodetLayer(){
     if (view_codeLayer.style.display == "block"){
        view_codeLayer.style.display = "none"
       
    }
    else{
        view_codeLayer.style.display = "block"
         favouriteOverlay.style.display = "none"
         userNoteOverlay.style.display = "none"
    }
}

function pinned(){   
    pin_note.style.display = "none";
    unpin.style.display="block";
    document.querySelector('#pinshow').style.display = "inline";
}


function unpinned(){
    
    pin_note.style.display = "block";
    unpin.style.display="none";
    document.querySelector('#pinshow').style.display = "none";
}

// console.log(normal_star);
// console.log(golden_star);


// for(count=0;count<normal_star.length;count++){
//     let isElementClick = false;
//     console.log(normal_star[count].style.display); 
//     console.log(golden_star[count].style.display);
//     normal_star[count].addEventListener('click', changeElementClick = () => {
//         isElementClick = true;        
//     })
//     if(isElementClick == true){
//         console.log(isElementClick)
//         normal_star[count].style.display = "none";
//         golden_star[count].style.display = "inline";
//     }
// }


// function changeStarGolden(){
//    golden_star.style.display = "inline";
// normal_star.style.display = "none";
// }
// function changeStarNormal(){
//    golden_star.style.display = "none";
//    normal_star.style.display = "inline";
// }



















//function favouritesTab() {
//    var element = document.getElementById("favouriteOverlay");
//    element.classList.toggle("favouriteShow")
//}






document.querySelector('.menu_bars').addEventListener
('click', () => document.querySelector('.menu_ol').classList.toggle('show'));

document.querySelector('.fav1').addEventListener
('click', () => document.querySelector(".favouriteOverlay").classList.toggle('favouriteShow'));

// document.querySelector('.profile_icon').addEventListener
// ('click', () => document.querySelector('.profileOverlay').classList.toggle('profileShow'));

function moveDown() {
    var element = document.getElementById("element");
    element.classList.toggle("move_down")
}

function moveUp() {
    var element = document.getElementById("element");
    element.classList.toggle("move_up")
}

function moveLeft() {
    var element = document.getElementById("element");
    element.classList.toggle("move_left")
}

function moveRight() {
    var element = document.getElementById("element");
    element.classList.toggle("appear-from-right")
}

function bounce() {
    var element = document.getElementById("element");
    element.classList.toggle("bounce")
}

function fade() {
    var element = document.getElementById("element");
    element.classList.toggle("fade")
}

function blink() {
    var element = document.getElementById("element");
    element.classList.toggle("blink")
}

function tremble() {
    var element = document.getElementById("element");
    element.classList.toggle("tremble")
}

function rotate() {
    var element = document.getElementById("element");
    element.classList.toggle("rotate")
}






function colorbg(event){
    var color = event.value;
    document.getElementsByTagName('textarea')[0].style.backgroundColor=color;
    document.getElementsByClassName('change')[0].style.backgroundColor=color;
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
function changeStars(thise){
    if(thise.children[1].style.display == "none"){
        thise.children[1].style.display = "inline"
        thise.children[0].style.display = "none"
    }
    else{
        thise.children[1].style.display = "none"
        thise.children[0].style.display = "inline"
    }
}
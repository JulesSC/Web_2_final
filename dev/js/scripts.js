// import $ from "jquery";

// let $nav = $('nav[data-nav]');
// let isVisible = false;

// $(".nav-btns").on("click", function(){
//     console.log("click");
//     if(isVisible === false){
//         $nav.show();
//         isVisible = true;
//     }
//     else{
//         $nav.hide();
//         isVisible = false;
//     }
// })

import { burgerTL } from "./burgerAnimation";
import { displayWindowSize } from "./mobileResizing";
import { menuAnimation } from "./mobileMenu";

var burgerButton = document.querySelector("#burger");

let canISeeMenu = false;

function openCloseMenu(){
    if (canISeeMenu === false){
        burgerTL.play();
        menuAnimation.play();
        canISeeMenu = true;
    }else{
        burgerTL.reverse();
        menuAnimation.reverse();
        canISeeMenu = false;
    }
}

burgerButton.addEventListener("click", openCloseMenu);

let navButtons = document.querySelectorAll(".nav-btns");

for(let i = 0; i < navButtons.length; i++){
    navButtons[i].addEventListener("click", openCloseMenu);
}

console.log(navButtons);

// burgerButton.addEventListener("click", function(){
//     // console.log("burger clicked");

//     // = // asignment: setting object 1 = to object 2
//     // == // a loose comparison
//     // === // asks if object one is exactly the same as object two

//     if (canISeeMenu === false){
//         burgerTL.play();
//         menuAnimation.play();
//         canISeeMenu = true;
//     }else{
//         burgerTL.reverse();
//         menuAnimation.reverse();
//         canISeeMenu = false;
//     }
// })
window.addEventListener('resize', displayWindowSize);

window.addEventListener('load', displayWindowSize);


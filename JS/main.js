// Header Scroll 

let nav = document.querySelector(".navbar");
window.onscroll = function() {
    if(document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}

// let nav = document.querySelector(".navbar");
// window.onscroll = function () {
//     if(document.documentElement.scrollTop > 50){
//         nav.classList.add("scroll-on");
//     }else{
//         nav.classList.remove("scroll-on");
//     }
// }

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(e){
    e.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})
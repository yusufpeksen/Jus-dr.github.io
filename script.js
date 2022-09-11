let hiddenMenuBtn = document.querySelector("#hidden-menu-btn");
let hiddenMenu = document.querySelector(".hidden-menu");


hiddenMenuBtn.addEventListener("click" , function() {
    hiddenMenu.classList.toggle("active");
})
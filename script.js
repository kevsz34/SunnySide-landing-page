const menuBtn = document.getElementById("menu-btn");
const menuNav = document.getElementById("menu-nav");
menuBtn.addEventListener("click", show);

function show(){
   menuNav.classList.toggle("flex");
}
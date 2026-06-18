const menuBtn = document.querySelector(".menu-btn");
const menuNav = document.querySelector(".menu-nav");

if(menuBtn && menuNav){
menuBtn.addEventListener("click", show);

function show(){
   menuBtn.toggleAttribute('aria-expanded', 'true');
   menuNav.classList.toggle("flex");
}
}
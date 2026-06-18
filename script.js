const menuBtn = document.querySelector(".menu-btn");
const menuNav = document.querySelector(".menu-nav");

if(menuBtn && menuNav){
menuBtn.addEventListener("click", show);
menuBtn.removeAttribute('aria-expanded', 'true');
function show(){
   menuBtn.addAttribute('aria-expanded', 'true');
   menuNav.classList.toggle("flex");
}
}
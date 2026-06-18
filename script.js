const menuBtn = document.querySelector(".menu-btn");
const menuNav = document.querySelector(".menu-nav");

if(menuBtn && menuNav){
menuBtn.addEventListener("click", show);
menuBtn.removeAttribute('aria-expanded', 'true');
menuBtn.setAttribute('aria-expanded', 'false');
function show(){
   menuBtn.removeAttribute('aria-expanded', 'false')
   menuBtn.setAttribute('aria-expanded', 'true');
   menuNav.classList.toggle("flex");
}
}
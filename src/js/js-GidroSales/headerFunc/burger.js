export function burger() {
   let burgerIcon = document.querySelector('.burger-icon');
   let menuAside = document.querySelector('.menu-aside');
   let body = document.querySelector('body');
   if (burgerIcon) {
      burgerIcon.addEventListener("click", () => {
         burgerIcon.classList.toggle('_active');
         menuAside.classList.toggle('_active');
         body.classList.toggle('_lock');
      });
   }
}
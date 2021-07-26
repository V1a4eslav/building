export function headerBottomClick() {
   let headerBottomMenu = document.querySelector('.bottom-header__menu');
   let headerBottomLink = document.querySelectorAll('.bottom-header__menu-link');
   headerBottomMenu.addEventListener("click", function (e) {
      let target = e.target;
      if (target.classList.contains('bottom-header__menu-link')) {
         headerBottomLink.forEach(el => {
            el.classList.remove('_active');
         });
         target.classList.add('_active');
      }
   });
}
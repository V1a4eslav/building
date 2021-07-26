export function headerScroll() {
   let lastScroll = 0;
   window.addEventListener("scroll", () => {
      let header = document.querySelector('.header');
      let body = document.querySelector('body');
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
         header.classList.remove('header-hide');
         return;
      }

      if (currentScroll > lastScroll && !header.classList.contains('header-hide')) {
         // down
         header.classList.add('header-hide');
         header.classList.remove('header-show');
      } else if (
         currentScroll < lastScroll &&
         header.classList.contains('header-hide')
      ) {
         // up
         header.classList.add('header-show');
         header.classList.remove('header-hide');
      }
      lastScroll = currentScroll;
   });
}

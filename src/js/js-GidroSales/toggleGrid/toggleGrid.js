export function toggleGrid() {
   let filterBtns = document.querySelector('.filter-top-catalog__grid-buttons');
   let btnGridLine = filterBtns.querySelector('.filter-top-catalog__grid-line');
   let btnGridAll = filterBtns.querySelector('.filter-top-catalog__grid-all');
   let gridProducts = document.querySelector('.grid-products');
   let btnFilterAll = document.querySelectorAll('.filter-top-catalog__grid-button');

   if (filterBtns === 0) return;


   btnFilterAll.forEach(el => {
      el.addEventListener("click", function (e) {
         if (el.classList.contains('_active')) {
            return;
         } else {
            btnFilterAll.forEach(el => {
               el.classList.remove('_active');
               this.classList.add('_active');
               if (btnGridLine.classList.contains('_active')) {
                  gridProducts.classList.add('grid-products_line');
               } else {
                  gridProducts.classList.remove('grid-products_line');
               }
            });
         }
      });
   });

}

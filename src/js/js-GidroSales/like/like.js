export function like() {
   let likeItem = document.querySelectorAll('.item-product__like');
   likeItem.forEach(el => {
      el.addEventListener("click", function (e) {
         e.preventDefault();
         el.classList.toggle('empty-like');
      });
   });
}
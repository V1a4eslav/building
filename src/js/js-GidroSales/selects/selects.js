export function selects() {
   let selectHeader = document.querySelectorAll('.select-header');
   let selectItem = document.querySelectorAll('.select-item');

   selectHeader.forEach(el => {
      el.addEventListener("click", function (e) {
         this.parentElement.classList.toggle('_active');
      });
   });
   selectItem.forEach(item => {
      item.addEventListener("click", function (e) {
         let text = this.innerText;
         let select = this.closest('.select');
         let currentText = select.querySelector('.select-current');
         currentText.innerText = text;
         select.classList.remove('_active');
      });
   });
}


export function spoller() {
   function listAccardion() {
      const selectList = document.querySelectorAll('._spoller');
      if (selectList.length === 0) return;


      selectList.forEach(el => {
         const list = el.querySelector('._spoller__body');
         const showingHeight = list.offsetHeight;

         !list.classList.contains('_active') && !el.classList.contains('_active')
            ? list.style.cssText = 'height: 0;'
            : list.style.cssText = `height: ${showingHeight}px`;

         el.firstElementChild.addEventListener("click", function (e) {
            const currentHeight = list.offsetHeight !== showingHeight ? showingHeight : 0;
            el.classList.toggle('_active');
            list.classList.toggle('_active');
            list.style.cssText = `height: ${currentHeight}px`;
         });
      });
   }
   listAccardion();
   // ==========================================

   function mobFilter() {
      let filterMobBtn = document.querySelector('.gidrocicles__filter-btn-hidden');
      let filterMainBody = document.querySelector('.filter-main__body');
      const showingHeight = filterMainBody.offsetHeight;
      if (filterMobBtn.length === 0) return;

      if (window.innerWidth <= 850) {
         !filterMainBody.classList.contains('_active')
            ? filterMainBody.style.cssText = 'height: 0;'
            : filterMainBody.style.cssText = `height: ${showingHeight}px`;

         filterMobBtn.addEventListener("click", function (e) {
            const currentHeight = filterMainBody.offsetHeight !== showingHeight ? showingHeight : 0;
            filterMainBody.classList.toggle('_active');
            filterMainBody.style.cssText = `height: ${currentHeight}px`;
         });
      }
   }
   mobFilter();
   // ==============================================

   // Дополнительные параметры фильтра, тут кастомизирую споллер
   function spollerSelect() {
      let selectBlock = document.querySelector('.select-yet');
      if (selectBlock) {
         if (selectBlock.length === 0) return;

         let selectBody = selectBlock.querySelector('.select-yet__list');
         let selectItems = selectBody.querySelectorAll('.select-yet__option');
         selectItems.forEach(el => {
            el.addEventListener("click", function (e) {
               let selectCurent = selectBlock.querySelector('.select-yet__current');
               let text = this.innerText;
               selectCurent.innerText = text;
            });
         });
      }
   }
   spollerSelect();


}


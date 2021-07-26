export function tabss() {
   if ('._tabs') {
      let tabss = document.querySelectorAll("._tabs");
      for (let index = 0; index < tabss.length; index++) {
         let tab = tabss[index];
         let tabs_items = tab.querySelectorAll("._tabs-item");
         let tabs_blocks = tab.querySelectorAll("._tabs-block");
         for (let index = 0; index < tabs_items.length; index++) {
            let tabs_item = tabs_items[index];
            tabs_item.addEventListener("click", function (e) {
               for (let index = 0; index < tabs_items.length; index++) {
                  let tabs_item = tabs_items[index];
                  tabs_item.classList.remove('_active');
                  tabs_blocks[index].classList.remove('_active');
               }
               tabs_item.classList.add('_active');
               tabs_blocks[index].classList.add('_active');
               e.preventDefault();
            });
         }
      }
   }
}
export function searchTabs() {
   let tabsSearch = document.querySelector('.tabs-search');
   let tabsSearchButton = document.querySelectorAll('.tabs-search__button');
   let searchTabsContent = document.querySelectorAll('.search-tabs-item');
   function hiddenTabContent() {
      tabsSearchButton.forEach((tab) => {
         tab.classList.remove('_active');
      });
      searchTabsContent.forEach((content) => {
         content.classList.remove('_active');
      });
   }
   function showTabConetn(i = 0) {
      tabsSearchButton[i].classList.add('_active');
      searchTabsContent[i].classList.add('_active');
   }

   tabsSearch.addEventListener("click", (e) => {
      let target = e.target;
      if (target.classList.contains('tabs-search__button')) {
         tabsSearchButton.forEach((tab, i) => {
            if (target == tab) {
               hiddenTabContent();
               showTabConetn(i);
            }
         });
      }

   });

}
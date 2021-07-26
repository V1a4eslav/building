//TAB №1===========================================TAB №1==================================================TAB №1

/*Данный код для табов где указано несколько категорий ,а также где есть таб 'показать все' */
let tabsParent = document.querySelector('.tabs__items'); //получаем доступ к родителю табов для делегирования
let tabs = document.querySelectorAll('.tabs__item'); // получаем  доступ к самим табом
let tabsContents = document.querySelectorAll('.content-tabs__item'); // тут  получаем доступ к контенту для табов 
let blogContent = document.querySelector('.blog__content');

function filter(category, contentTabsItems) {
   contentTabsItems.forEach((item) => {
      const isItemFilter = !item.classList.contains(category);
      const isShowAll = category.toLowerCase() === 'all';
      if (isItemFilter && !isShowAll) {
         item.classList.add('hide');
      } else {
         item.classList.remove('hide');
      }
   });
}

tabs.forEach((item) => {
   item.addEventListener('click', function (e) {
      const currentCategory = item.dataset.filter;// получаем доступ к нашему фильтру которому мы записали ввнутри data-filter
      filter(currentCategory, tabsContents);
      if (!e.target.classList.contains('tabs__item_active')) {
         tabs.forEach((item) => {
            item.classList.remove('tabs__item_active');
            e.target.classList.add('tabs__item_active');
         });
      }
   });
});

//Код ниже служит для того  чтоб небыло скочка изза пропажи либо добавления скролла ,чтоб контент не дергался
/*ПРИМЕР: Допустим у нас когда показаны все карточки то будет присуствовать скрол  и мы можем проскролить ниже высоты экрана.
Но когда у нас при переключении табов возникает то что в категории всего 2 обьекта которые не занимают всю высоту экрана
то скрол пропадет и контент сместится ровно на тот размер который занимал скрол .Вот по этому и был прописан данный код */
let allWidthWindow = window.innerWidth; // вся ширина окна
let widthWindowWithoutScroll = document.documentElement.clientWidth; // ширина минус прокрутка
let differenceWidth = allWidthWindow - widthWindowWithoutScroll; // разница 
if (differenceWidth > 0) {
   for (let index = 0; index < tabs.length; index++) {
      const tabItem = tabs[index];
      tabItem.addEventListener('click', widthWindow());
   }
}

function widthWindow() {
   let differenceWidthFunc = allWidthWindow - widthWindowWithoutScroll; // разница 
   if (differenceWidthFunc === 0) {
      blogContent.style.cssText = `transform: translateX(-${differenceWidth / 2}px);`;
   } else {
      blogContent.style.cssText = `transform: translateX(0px);`;
   }
}
//TAB №1======================================END TAB №1=======================================TAB №1
//===================================================================================================
//===================================================================================================




//TAB №2===========================================TAB №2======================================TAB №2
//ФРИЛАНСЕР
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
//===========================================END TAB №2==============================================
//===================================================================================================
//===================================================================================================




//===========================================TAB №3==================================================
//====================================ТАБЫ ГДЕ СОВПАДАЮТ ПОРЯДОКОВЫЕ НОМЕРА==========================

let mainSearchTabsParent = document.querySelector('.main-search__tabs');
let mainSearchItemTab = document.querySelectorAll('.main-search__tabs-item');
let mainSearchTabsContent = document.querySelectorAll('.main-search__content-item');


function hideTabsContent() {
   mainSearchItemTab.forEach((el) => {
      el.classList.remove('main-search__tabs-item_active');
   });
   mainSearchTabsContent.forEach((el) => {
      el.classList.remove('main-search__content-item_active');
   });
}
function showTabsContent(i = 0) {
   mainSearchItemTab[i].classList.add('main-search__tabs-item_active');
   mainSearchTabsContent[i].classList.add('main-search__content-item_active');
}


mainSearchTabsParent.addEventListener('click', (e) => {
   let target = e.target;
   if (target.classList.contains('main-search__tabs-item')) {
      mainSearchItemTab.forEach((tab, i) => {
         if (target == tab) {
            hideTabsContent();
            showTabsContent(i);
         }
      });
   }
});
//===========================================END TAB №3==============================================
//===================================================================================================
//===================================================================================================
//===================================================================================================
//===================================================================================================
//===================================================================================================
//===================================================================================================
//===================================================================================================
//===================================================================================================
//===================================================================================================
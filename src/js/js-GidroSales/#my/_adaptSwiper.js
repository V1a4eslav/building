/* Функция для того чтоб не инициализировать кучу слайдеров ,
а чтоб слайдер создавался автоматом .Код Игоря*/

function createSlider(elemClass, config) {
   const defaultConfig = {
      slidesPerView: 4,
      spaceBetween: 29,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
      keyboard: {
         // Управление стрелками
         onlyInViewport: true,
      }
   };
   const sliderConfig = { ...defaultConfig, ...config };

   new Swiper(elemClass, sliderConfig);
}
//======================================
/*Далее уже под каждый слайдер делаем обращение
Пример слайдера ниже:*/

const popularProductsSlider = document.querySelectorAll('.slider-popular-products__container');

popularProductsSlider.forEach((slider, index) => {
   createSlider(`.slider-popular-products__container${index + 1}`, {
      navigation: {
         nextEl: `.next-${index + 1}`,
         prevEl: `.prev-${index + 1}`
      },
   });
});
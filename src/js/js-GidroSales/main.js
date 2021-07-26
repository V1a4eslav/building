/*
Так как у нас подключен вебпак чисто для модульности js файлы мы можем экспортировать функции с модулей
и импортировать их в наш основной файл main.js
from ---> export function naame() {
            console.log('1000');
         }
in ----->  import { naame } from './jjs';
           naame();
*/

import { burger } from './headerFunc/burger';
import { headerBottomClick } from './headerFunc/headerBottomClick';
import { mainBannerSwiper } from './swiper/swiper';
import { sliders } from './swiper/swiper';
import { like } from './like/like';
import { tabss } from './tabs/tabs';
import { spoller } from './Spoller/spoller';
import { noUiSliderMy } from './noUiSliderMy/noUiSliderMy';
import { selects } from './selects/selects';
import { toggleGrid } from './toggleGrid/toggleGrid';
import { headerScroll } from './headerFunc/headerScroll';

window.addEventListener('load', () => {
   burger();
   headerScroll();
   headerBottomClick();
   mainBannerSwiper();
   sliders();
   like();
   tabss();
   spoller();
   noUiSliderMy();
   selects();
   toggleGrid();
});




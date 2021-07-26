// HTML
{/* <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css"></link> */ }
{/* <div class="image-slider swiper-container">
<!-- Слайдер -->
	<div class="image-slider__wrapper swiper-wrapper">
		<div class="image-slider__slide swiper-slide" data-hash="slide1">
			<div class="image-slider__image">
				<img class="swiper-lazy" data-src="../img/icons/cases/two.jpg" alt="Картинка">
				<div class="swiper-lazy-preloader"></div>
			</div>
			<div class="image-slider__name">Heath Facility</div>
			<div class="image-slider__text _text">Construction</div>
		</div>
		<div class="image-slider__slide swiper-slide" data-hash="slide2">
			<div class="image-slider__image">
				<img class="swiper-lazy" data-src="../img/icons/cases/two.jpg" alt="Картинка">
				<div class="swiper-lazy-preloader"></div>
			</div>
			<div class="image-slider__name">Heath Facility</div>
			<div class="image-slider__text _text">Construction</div>
		</div>
	</div>
</div> */}
new Swiper('.image-slider', {

	keyboard: {
		// Включить\выключить
		enabled: true,
		// Управление стрелками
		onlyInViewport: true,
		// Управление клавишами pageUp, pageDown
		pageUpDown: true,
	},

	mousewheel: {
		// Чувствительность колеса мыши
		sensitivity: 5,
		// Класс объекта на котором будет срабатывать прокрутка мышью.
		eventsTarget: ".image-slider",
		// свайпер выпустит событие колеса мыши и разрешит прокрутку страницы, когда свайпер находится в крайних положениях (в начале или в конце).
		// releaseOnEdges: true,
		// Минимальная дельта прокрутки колесика мыши для запуска смены слайда
		thresholdDelta: 0.2,
		// Минимальная время прокрутки колесика мыши (в мс) для запуска смены слайда
		thresholdTime: 500,
	},

	// autoplay: {
	// 	// Пауза между прокруткой
	// 	delay: 1000,
	// 	// Закончить на последнем слайде (Если отключен loop (Бесконечный слайдер))
	// 	stopOnLastSlide: false,
	// 	// Отключить после ручного переключения
	// 	disableOnInteraction: true,
	// 	// Прокрутка в обратном направлении
	// 	reverseDirection: true,
	// },

	// Отключить предзагрузка картинок
	preloadImages: false,
	// Lazy Loading (подгрузка картинок)
	lazy: {
		// Начнет подгружать, когда начнем листать
		loadOnTransitionStart: true,
		// Подгрузить сразу предыдущую и следующую картинки
		loadPrevNext: true,
		// Количество следующих / предыдущих слайдов для предварительной загрузки. Не может быть меньше, чем slidesPerView
		// loadPrevNextAmount: 1,
	},
	// Слежка за видимыми слайдами
	watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	watchSlidesVisibility: true,

	hashNavigation: {
		// Навигация с помощью стрелок браузера
		watchState: true,
		// Работает в дополнение к hashnav для замены текущего состояния URL-адреса новым вместо добавления его в историю
		replaceState: true,
	},

	// breakpoints: {
	// 	320: {
	// 		slidesPerView: 1,
	// 	},
	// 	480: {
	// 		slidesPerView: 2,
	// 	},
	// 	992: {
	// 		slidesPerView: 3,
	// 	}
	// },

	direction: 'horizontal',
	// Вертикальный слайдер
	// direction: 'vertical',
	// CSS
	// swiper-container
	// .image-slider {
	// 	padding: 0px 0 0px 0;
	// 	height: 700px;
	// }
	// Может быть 'column' или 'row'. Определяет, как слайды должны заполнять строки, по столбцу или по строке
	// slidesPerColumnFill: 'column', 

	// Установите значение false, чтобы отключить переход к следующему направлению слайда (вправо или вниз)
	allowSlideNext: true,
	// Установите значение false, чтобы отключить прокрутку к предыдущему направлению слайда (влево или вверх)
	allowSlidePrev: true,
	// Если false, то единственный способ переключить слайд - это использовать внешние функции API, такие как slidePrev или slideNext.
	allowTouchMove: true,

	// перетаскивания мышкой слайды
	simulateTouch: true,
	// Чувствительность перетаскивания (touchRatio: 0, отключает перетаскивание на всех устройствах)
	touchRatio: 2,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,
	// Переключение при клике на слайд
	slideToClickedSlide: true,
	// Пороговое значение в пикселях. Если «расстояние касания» будет ниже этого значения, то свайпер не будет двигаться.
	threshold: 10,

	// Скорость переключения слайда
	speed: 500,

	// Количество слайдов для показа
	slidesPerView: 6,
	// slidesPerView: 'auto',
	// CSS
	// .image-slider .swiper-slide {
	// 	width: auto;
	// }
	// Количество пролистываемых слайдов
	slidesPerGroup: 1,

	// Отступ между слайдами
	spaceBetween: 30,
	// Добавьте (в пикселях) дополнительное смещение слайда в конце контейнера (после всех слайдов)
	// slidesOffsetAfter: 50,
	// Добавить (в пикселях) дополнительное смещение слайда в начале контейнера (перед всеми слайдами)
	// slidesOffsetBefore: -250,

	// Активный слайд по центру
	centeredSlides: false,
	// Когда он включен, он центрирует слайды, если количество слайдов меньше, чем у slidesPerView. Не предназначен для использования в режиме loop и slidesPerColumn
	centerInsufficientSlides: false,
	// Если true, активный слайд будет центрирован без добавления пробелов в начале и конце слайдера. Обязательные centeredSlides: true. Не предназначен для использования с loop или pagination
	centeredSlidesBounds: false,

	// Стартовый слайд.
	initialSlide: 0,

	// Бесконечный слайдер (1. отключаем скрол, 2. Мультирядность = 1, 3. slidesPerView: 'auto', то добавляем к-во дублирующих слайдов loopedSlides: 0,)
	loop: false,
	// Добавление количества слайдов, которые будут клонированы после создания цикла
	// loopAdditionalSlides: 3,
	// Режим включения и цикла заполнит группы с недостаточным количеством слайдов пустыми слайдами. Подходит для использования с параметром slidesPerGroup
	// loopFillGroupWithBlank: true,
	// Когда он включен, он предотвращает переходы Swiper slide prev/next, когда переходы уже выполняются (действует, когда включен цикл)
	// loopPreventsSlide: true,
	// Если вы используете slidesPerView: 'auto' в режиме цикла, вы должны сообщить Swiper, сколько слайдов он должен зацикливать (дублировать), используя этот параметр.
	// loopedSlides: 3,

	// Обновить свайпер при изменении элементов слайдера
	observer: true,
	// Обновить свайпер при изменении родительских элементов слайдера
	observeParents: true,
	// Обновить свайпер при изменении дочерних элементов слайда
	observeSlideChildren: true,
	// Установите значение true для округления значений ширины и высоты слайдов, чтобы предотвратить размытие текста на экранах с обычным разрешением (если они у вас есть)
	roundLengths: true,
	// Установите значение false, если вы хотите отключить устойчивые границы
	resistance: true,
	// Эта опция позволяет вам контролировать коэффициент сопротивления (при фиксированом к-ве слайдов уходить за контейнер)
	resistanceRatio: 0.55,
	// Отключение функционала если слайдов меньше чем нужно
	watchOverflow: true,
	// Установите значение true, чтобы предотвратить случайное нежелательное нажатие на ссылки во время пролистывания
	preventClicks: true,
	// Установите значение true, чтобы остановить распространение события кликов по ссылкам во время пролистывания
	preventClicksPropagation: true,
	// Когда он включен, он не позволит менять слайды смахиванием или navigation/pagination на страницы во время перехода.
	preventInteractionOnTransition: true,
	// Автовысота (особенно для слайдов в нутри которых текст разных объомов). Установите значение true, и оболочка слайдера адаптирует свою высоту к высоте текущего активного слайда.
	autoHeight: true,

	// Свободный режим
	freeMode: true,
	// Минимальная скорость касания, необходимая для запуска импульса в свободном режиме
	freeModeMinimumVelocity: 0.02,
	// Если этот параметр включен, слайд будет двигаться некоторое время после того, как вы его отпустите.
	freeModeMomentum: true,
	// Установите значение false, если вы хотите отключить отскок импульса в свободном режиме.
	freeModeMomentumBounce: true,
	// Чем выше значение, тем сильнее эффект отскока импульса (слайд уходит за контейнер)
	// freeModeMomentumBounceRatio: 100,
	// Чем выше значение, тем больше импульсное расстояние после отпускания слайда
	freeModeMomentumRatio: 0.5,
	// Чем выше значение, тем больше скорость импульса после того, как вы отпустите слайдер
	freeModeMomentumVelocityRatio: 0.5,
	// Включите, чтобы включить привязку к положениям слайдов в свободном режиме
	// freeModeSticky: true,
});


// --------------------------------------------------------------------------------------------------------------------
new Swiper('.image-slider', {
	// "Библиотека"
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	// HTML
	// <div class="swiper-button-prev"></div>
	// <div class="swiper-button-next"></div>
	// CSS
	// .image-slider .swiper-button-prev::after,
	// .image-slider .swiper-button-next::after {
	// 	color: rgb(202, 21, 21);
	// 	font-size: 20px;
	// }
	// .swiper-button-prev{
	// 	margin: 0 50px;
	// 	min-width: 50px;
	// 	min-height: 50px;
	// 	border-radius: 50%;
	// 	background: black;
	// }
	

	pagination: {
		el: '.pagination',

		// Pagination
		// 1. простые кружки
		type: 'bullets',
		clickable: true,
		// активный кружок (большой) "Библиотека"
		dynamicBullets: true,
		// к-во активных кружков (больших) "Библиотека"
		dynamicMainBullets: 1,
	}
		// CSS
		// .pagination {
		// 	display: flex;
		// 	justify-content: center;
		// Только для активных кружков!!!
		// 	min-width: 100%;
		// 	.swiper-pagination-bullet {
		// 		margin: 0 16px 0 0;
		// 		border-radius: 50%;
		// 		width: 50px;
		// 		height: 50px;
		// 		background: #FFF;
		// 		&:last-child{
		// 			margin-left: 0;
		// 		}
		// 	}
		// 	.swiper-pagination-bullet-active {
		// 		background: #F49D44;
		// 	}
		// }
		// HTML
		// <div class="pagination"></div>

		// 2. 1 of 8
		pagination: {
			el: '.pagination',
			type: 'custom',
			renderCustom: function (swiper, current, total) {
				return current + ' of ' + total;
			}
		},
		// CSS
		// .pagination{
		// 	display: flex;
		// 	justify-content: center;
		// 	font-size: 50px;
		// 	color: #FFF;
		// }
		// HTML
		// <div class="pagination"></div>

		// 3. Фото 1 из 8
		pagination: {
			el: '.pagination',
			type: 'fraction',
			renderFraction: function (currentClass, totalClass) {
				return '<span>Фото</span> <span class="' + currentClass + '"></span>' +
					'<span>из</span>' +
					'<span class="' + totalClass + '"></span>';
			},
		},
		// CSS
		// .pagination{
		// 	display: flex;
		// 	justify-content: center;
		// 	// к-во фракций в слайдере (Фото 1 из 8, работает над 8)
		// 	.swiper-pagination-total{
		// 		color: rgb(197, 41, 41);
		// 		font-size: 100px;
		// 	}
		// 	span{
		// 		font-size: 30px;
		// 		color: #FFF;
		// 		padding: 0 50px 0 0;
		// 	}
		// }
		// HTML
		// <div class="pagination"></div>

		// 4. 1 2 3 4 5 6 7 8
		pagination: {
			el: '.pagination',
			type: 'bullets',
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			}
		},
		// CSS
		// .pagination{
		// 	display: flex;
		// 	justify-content: center;
		// 	span{
		// 		font-size: 30px;
		// 		color: #FFF;
		// 		padding: 0 50px 0 0;
		// 	}
		// }
		// HTML
		// <div class="pagination"></div>
			
		// 5. Прогрессбар (линия заполняеться с средины на всю ширину до прокрутки к последнему слайдеру)
		pagination: {
			el: '.pagination',
			type: 'progressbar',
			renderProgressbar: function (progressbarFillClass) {
				return '<span class="' + progressbarFillClass + '"></span>';
			},
			// увеличение линии по высоте (горизонтальный слайдер) и поширине (вертикальный слайдер) до прокрутки к последнему слайдеру
			// P.S. При progressbarOpposite: true, progressbar - станоаиться вертикальным
			progressbarOpposite: true,
		},
		// CSS
		// .pagination {
		// 	display: flex;
		// 	justify-content: flex-start;
		// 	.swiper-pagination-progressbar-fill {
		// 		background-color: black;
		// 		width: 100%;
		// 		height: 10px;
		// 	}
		// }
		// HTML
		// <div class="pagination"></div>
	}

		// Scrollbar
		scrollbar: {
			el: '.swiper-scrollbar',
			// Возможность перетаскивать скролл
			draggable: true,
			// Ширина перетаскиваемого элемента в px
			dragSize: 50,
			// Автоматически скрывать полосу прокрутки после взаимодействия с пользователем
			hide: true,
		},
		// CSS
		// .swiper-scrollbar{
		// 	.swiper-scrollbar-drag{
		// 		background-color: #FFF;
		// 		height: 10px;
			
		// 	}
		// }
		// HTML
		// <div class="swiper-scrollbar"></div>


		// Hash Navigation
		hashNavigation: {
			// Навигация с помощью стрелок браузера
			watchState: true,
			// Работает в дополнение к hashnav для замены текущего состояния URL-адреса новым вместо добавления его в историю
			replaceState: true,
		},
		// HTML
		// <div class="swiper-container">
		// 	<div class="swiper-wrapper">
		// 		<div class="swiper-slide" data-hash="slide1"></div>
		// 		<div class="swiper-slide" data-hash="slide2"></div>
		// 		<div class="swiper-slide" data-hash="slide3"></div>
		// 		<div class="swiper-slide" data-hash="slide4"></div>
		// 		<div class="swiper-slide" data-hash="slide5"></div>
		// 	</div>
		// </div>


		// Keyboard Control
		// Управление клавиатурой
		keyboard: {
			// Включить\выключить
			enabled: true,
			// Управление стрелками
			onlyInViewport: true,
			// Управление клавишами pageUp, pageDown
			pageUpDown: true,
		},


		// Mousewheel Control
		// Управление колесом мыши
		mousewheel: {
			// Чувствительность колеса мыши
			sensitivity: 10,
			// Класс объекта на котором будет срабатывать прокрутка мышью.
			eventsTarget: ".image-slider",
			// Установите значение true, чтобы колесо мыши перемещалось по оси. Таким образом, в горизонтальном режиме колесо мыши будет работать только с горизонтальной прокруткой колеса мыши и только с вертикальной прокруткой в ​​вертикальном режиме.
			forceToAxis: true,
			// Изменяет направление скольжения
			invert: true,
			// свайпер выпустит событие колеса мыши и разрешит прокрутку страницы, когда свайпер находится в крайних положениях (в начале или в конце).
			releaseOnEdges: true,
			// Минимальная дельта прокрутки колесика мыши для запуска смены слайда
			thresholdDelta: 0.5,
			// Минимальная время прокрутки колесика мыши (в мс) для запуска смены слайда
			thresholdTime: 500,
		},


		autoplay: {
			// Пауза между прокруткой
			delay: 1000,
			// Закончить на последнем слайде (Если отключен loop (Бесконечный слайдер))
			stopOnLastSlide: false,
			// Отключить после ручного переключения
			disableOnInteraction: true,
			// Прокрутка в обратном направлении
			reverseDirection: true,
		},
	


		// "Библиотека"
	// Отключить предзагрузка картинок
	preloadImages: false,
	// Lazy Loading (подгрузка картинок)
	lazy: {
		// Начнет подгружать, когда начнем листать
		loadOnTransitionStart: false,
		// Подгрузить сразу предыдущую и следующую картинки
		loadPrevNext: false,
		// Количество следующих / предыдущих слайдов для предварительной загрузки. Не может быть меньше, чем slidesPerView
		// loadPrevNextAmount: 1,
	},
	// Слежка за видимыми слайдами
	watchSlidesProgress: true,
	// Добавление класса видимым слайдам
	watchSlidesVisibility: true,
	// HTML
	// <div class="image-slider__slide swiper-slide">
	// 	<div class="image-slider__image">
	// 		<img class="swiper-lazy" data-src="../img/icons/cases/fore.jpg" alt="Картинка">
	// 		<div class="swiper-lazy-preloader"></div>
	// 	</div>
	// </div>


	// // "Библиотека"
	// // Зум картинки
	// zoom: {
	// 	// Макимальное увеличение
	// 	maxRatio: 2,
	// 	// Минимальное увеличение
	// 	minRatio: 1,
	// 	// увеличение картинки двойным нажатием мышки
	// 	toggle: true,
	// },
	// // HTML
	// // <div class="image-slider__image swiper-zoom-container">
	// // 	<img class="swiper-lazy" data-src="../img/icons/cases/two.jpg" alt="Картинка">
	// // 	<div class="swiper-lazy-preloader"></div>
	// // </div>
	// // CSS 
	// // Имя класса CSS увеличенного контейнера
	// // .swiper-slide-zoomed{
	// // 	border-radius: 50%;
	// // 	background-color: #333;
	// // 	height: 1000px;
	// // 	width: 1000px;
	// // }


	// breakpoints: {
	// 	320: {
	// 		slidesPerView: 1,
	// 	},
	// 	480: {
	// 		slidesPerView: 2,
	// 	},
	// 	992: {
	// 		slidesPerView: 3,
	// 	}
	// },

	// Соотношение сторон
	// breakpoints: {
	// 	'@0.75': {
	// 		slidesPerView: 1,
	// 	},
	// 	'@1.00': {
	// 		slidesPerView: 2,
	// 	},
	// 	'@1.50': {
	// 		slidesPerView: 3,
	// 	}
	// },


		// "Библиотека"
	// Плавный переход от одного слайда к другому (не листает, а меняет слайды) (подходит для одного слайда)
	effect: 'fade',
	fadeEffect: {
		// Параллельная смена прозрачности
		crossFade: true,
	},

	// "Библиотека"
	// Переворот слайда (подходит для одного слайда)
	effect: 'flip',
	flipEffect: {
		// Тень
		slideShadows: true,
		// Показ только активного слайда
		limitRotation: true
	},

	// "Библиотека"
	effect: 'cube',
	cubeEffect: {
		// Включает тени слайдов
		slideShadows: true,
		// Включает тень основного слайдера
		shadow: true,
		// Смещение основной тени в px
		shadowOffset: 7,
		// Коэффициент масштабирования основной тени
		shadowScale: 0.94,
	},
		// CSS
	// swiper-container
	// .image-slider {
	// 	wight: 270px;
	// }

	// "Библиотека"
	// поток
	effect: 'coverflow',
	// Дополнение к coverflow
	coverflowEffect: {
		// Угол
		rotate: 10,
		// Наложение
		stretch: 50,
		// Тень
		slideShadows: true,
		// Смещение глубины в px (по оси Z)
		depth: 500,
		// Множитель эффекта
		modifier: 3,
	},


	// Вертикальный слайдер
	// direction: 'horizontal',
	direction: 'vertical',
	// CSS
	// swiper-container
	// .image-slider {
	// 	padding: 0px 0 0px 0;
	// 	height: 700px;
	// }
	// Может быть 'column' или 'row'. Определяет, как слайды должны заполнять строки, по столбцу или по строке
	slidesPerColumnFill: 'row', 

	// Установите значение false, чтобы отключить переход к следующему направлению слайда (вправо или вниз)
	allowSlideNext: true,
	// Установите значение false, чтобы отключить прокрутку к предыдущему направлению слайда (влево или вверх)
	allowSlidePrev: true,
	// Если false, то единственный способ переключить слайд - это использовать внешние функции API, такие как slidePrev или slideNext.
	allowTouchMove: true,


	// перетаскивания мышкой слайды
	simulateTouch: true,
	// Чувствительность перетаскивания (touchRatio: 0, отключает перетаскивание на всех устройствах)
	touchRatio: 2,
	// Угол срабатывания свайпа/перетаскивания
	touchAngle: 45,
	// Курсор перетаскивания
	grabCursor: true,
	// // Целевой элемент для прослушивания событий касания.Может быть 'container' (для прослушивания событий касания на swiper - контейнере) или 'wrapper'(для прослушивания событий касания на swiper - wrapper)
	// touchEventsTarget: 'wrapper',
	// // Если включено, то распространение "touchmove" будет остановлено.
	// touchMoveStopPropagation: true,
	// // Включите, чтобы отпустить события касания в позиции края ползунка (начало, конец), чтобы обеспечить дальнейшую прокрутку страницы
	// touchReleaseOnEdges: true,
	// // Принудительно всегда запрещать значение по умолчанию для события touchstart (mousedown)
	// touchStartForcePreventDefault: true,
	// // Если отключено, событие touchstart (mousedown) не будет предотвращено.
	// touchStartPreventDefault: false,
		
	// Переключение при клике на слайд
	slideToClickedSlide: true,

	// Пороговое значение в пикселях. Если «расстояние касания» будет ниже этого значения, то свайпер не будет двигаться.
	threshold: 10,

	// Скорость переключения слайда
	speed: 800,

	// Автовысота (особенно для слайдов в нутри которых текст разных объомов). Установите значение true, и оболочка слайдера адаптирует свою высоту к высоте текущего активного слайда.
	autoHeight: true,

	// Количество слайдов для показа
	slidesPerView: 4.5,
	// slidesPerView: 'auto',
	// CSS
	// .image-slider .swiper-slide {
	// 	width: auto;
	// }
	// Количество пролистываемых слайдов
	slidesPerGroup: 1,
	// // Параметр работает следующим образом: если slidesPerGroupSkip равен 0 (по умолчанию), слайды не исключаются из группировки, и результирующее поведение такое же, как и без этого изменения. Если slidesPerGroupSkip равно или больше 1, первые X слайдов обрабатываются как отдельные группы, тогда как все последующие слайды сгруппированы по значению slidesPerGroup.
	// slidesPerGroupSkip: 1,

	// Установите значение true, чтобы предотвратить случайное нежелательное нажатие на ссылки во время пролистывания
	preventClicks: true,
	// Установите значение true, чтобы остановить распространение события кликов по ссылкам во время пролистывания
	preventClicksPropagation: true,
	// Когда он включен, он не позволит менять слайды смахиванием или navigation/pagination на страницы во время перехода.
	preventInteractionOnTransition: true,


	// Отключение функционала если слайдов меньше чем нужно
	watchOverflow: true,

	// Отступ между слайдами
	spaceBetween: 30,

	// Добавьте (в пикселях) дополнительное смещение слайда в конце контейнера (после всех слайдов)
	slidesOffsetAfter: 50,
	// Добавить (в пикселях) дополнительное смещение слайда в начале контейнера (перед всеми слайдами)
	slidesOffsetBefore: -250,


	// Активный слайд по центру
	centeredSlides: false,
	// Когда он включен, он центрирует слайды, если количество слайдов меньше, чем у slidesPerView. Не предназначен для использования в режиме loop и slidesPerColumn
	centerInsufficientSlides: false,
	// Если true, активный слайд будет центрирован без добавления пробелов в начале и конце слайдера. Обязательные centeredSlides: true. Не предназначен для использования с loop или pagination
	centeredSlidesBounds: false,


	// Для мусульманских стран (с права на лево)
	// <div dir="rtl" class="image-slider swiper-container">

	// Стартовый слайд.
	initialSlide: 0,

	// // Мультирядность (Не работает!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!)(при 2 рядах slidesPerView: 'auto', Не работает)
	// slidesPerColumn: 1,
	// // CSS
	// // (swiper-container)
	// // .image-slider {
	// // 	height: 700px;
	// // }
	// // .image-slider .swiper-slide {
	// // 	height: calc((100% - 30px) / 2);
	// // 	overflow: hidden;
	// // }


	// Бесконечный слайдер (1. отключаем скрол, 2. Мультирядность = 1, 3. slidesPerView: 'auto', то добавляем к-во дублирующих слайдов loopedSlides: 0,)
	loop: true,
	// // Добавление количества слайдов, которые будут клонированы после создания цикла
	// loopAdditionalSlides: 2,
	// Режим включения и цикла заполнит группы с недостаточным количеством слайдов пустыми слайдами. Подходит для использования с параметром slidesPerGroup
	loopFillGroupWithBlank: false,
	// // Когда он включен, он предотвращает переходы Swiper slide prev/next, когда переходы уже выполняются (действует, когда включен цикл)
	// loopPreventsSlide: true,
	// Если вы используете slidesPerView: 'auto' в режиме цикла, вы должны сообщить Swiper, сколько слайдов он должен зацикливать (дублировать), используя этот параметр.
	loopedSlides: 3,


	// Свободный режим
	freeMode: true,
	// Минимальная скорость касания, необходимая для запуска импульса в свободном режиме
	freeModeMinimumVelocity: 0.02,
	// Если этот параметр включен, слайд будет двигаться некоторое время после того, как вы его отпустите.
	freeModeMomentum: false,
	// Установите значение false, если вы хотите отключить отскок импульса в свободном режиме.
	freeModeMomentumBounce: false,
	// Чем выше значение, тем сильнее эффект отскока импульса (слайд уходит за контейнер)
	freeModeMomentumBounceRatio: 100,
	// Чем выше значение, тем больше импульсное расстояние после отпускания слайда
	freeModeMomentumRatio: 1000,
	// Чем выше значение, тем больше скорость импульса после того, как вы отпустите слайдер
	freeModeMomentumVelocityRatio: 100,
	// // Включите, чтобы включить привязку к положениям слайдов в свободном режиме
	// freeModeSticky: false,

	// Установите значение false, если вы хотите отключить устойчивые границы
	resistance: false,
	// Эта опция позволяет вам контролировать коэффициент сопротивления (при фиксированом к-ве слайдов уходить за контейнер)
	resistanceRatio: 0.75,


	// Обновить свайпер при изменении элементов слайдера
	observer: true,
	// Обновить свайпер при изменении родительских элементов слайдера
	observeParents: true,
	// Обновить свайпер при изменении дочерних элементов слайда
	observeSlideChildren: true,


	// // Установите значение true для округления значений ширины и высоты слайдов, чтобы предотвратить размытие текста на экранах с обычным разрешением (если они у вас есть) Не работает слайдер на последнем булете
	// roundLengths: true,

	// // Включите эту опцию, и плагин установит ширину / высоту на обертке swiper равной общему размеру всех слайдов. В основном следует использовать как альтернативный вариант совместимости для браузера, который плохо поддерживает макет flexbox.
	// setWrapperSize: true,

	
	// // Установите значение false, если вы хотите отключить короткие смахивания
	// shortSwipes: false,
});

edgeSwipeDetection	boolean | string	false
edgeSwipeThreshold	number	20
followFinger	boolean	true
init	boolean	true


	// Установите значение false, если вы хотите отключить длинные смахивания
	// longSwipes: true,
	// Минимальная продолжительность (в мс) для перехода к следующему / предыдущему слайду во время долгих пролистываний
	// longSwipesMs: 3000,
	// Соотношение для перехода к следующему / предыдущему слайду при длительных смахиваниях
	// longSwipesRatio: 0.5,

// Установите значение true в Swiper для правильного перехвата событий касания. Используйте только свайперы, которые используют то же направление, что и родительский
noSwiping: true,
// Может использоваться вместо noSwipingClass для указания элементов для отключения прокрутки. Например, «ввод» отключит смахивание на всех входах.
// noSwipingSelector      string

// Нормализовать указатель слайдов.
normalizeSlideIndex: true,
	
// Пассивные прослушиватели событий будут использоваться по умолчанию, где это возможно, для повышения производительности прокрутки на мобильных устройствах. Но если вам нужно использовать e.preventDefault и у вас есть конфликт с ним, вам следует отключить этот параметр
passiveListeners: true,

// События Fire Transition / SlideChange / Start / End при инициализации свайпера. Такие события будут запускаться при инициализации, если ваш initialSlide не равен 0 или вы используете loop
runCallbacksOnInit: true,

// Строка с селектором CSS или HTML-элементом контейнера с разбивкой на страницы, который будет работать как единственный доступный обработчик для прокрутки.
// swipeHandler	CSSSelector | HTMLElement | null	null

// Если включено (по умолчанию) и параметры элементов навигации передаются в виде строки (например, «.pagination»), то Swiper сначала будет искать такие элементы через дочерние элементы. Применяется для разбивки на страницы, кнопок назад / вперед и элементов полосы прокрутки
uniqueNavElements: false,

// При включении Swiper будет повторно инициализирован после загрузки всех внутренних изображений (тегов). Требуемые preloadImages: true
updateOnImagesReady: true,

// Swiper будет пересчитывать положение слайдов при изменении размера окна
updateOnWindowResize: true,

// Требуется для активного обнаружения слайдов при рендеринге на стороне сервера и включенной истории
// url	string | null	null

// userAgent строка. Требуется для обнаружения браузера / устройства при рендеринге на стороне сервера
// userAgent	string | null	null

// Включите эту опцию, и swiper будет работать как обычно, за исключением того, что он не будет перемещаться, реальные значения перевода на оболочке не будут установлены. Полезно, когда вам может потребоваться создать настраиваемый переход между слайдами
virtualTranslate: true,


//========================================================================================================================================================
// Анимация при скроле

// // HTML
// 	_scr-item
// // CSS
// transform: translate(0px,100px);
// 	transition: all 0.3s ease 0s;
// 	opacity: 0;
// 	&._active{
// 		transform: translate(0px,0px);
// 		opacity: 1;
// 	}
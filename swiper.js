// const swiper = new Swiper('.swiper', {

//     direction: 'horizontal',
//     spaceBetween:30,
//     effect: 'fade',
//     loop: true,
//     mousewheel: {
//       invert: false,
//   },


//   pagination: {
//       el: '.swiper-pagination',
//       clickable:true,
      
//   },

  
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },


//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },

// });


// позначаємо клас який стає слайдером
new Swiper('.swiper', {
  // навігація стрілки
 
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
 
  // навігація
  // булети, теперішнє положення, прогресбар
  
  // pagination: {
  //   el: '.swiper-pagination', 
   
    // el - це елемент
    // булети
   
    // clickable: true,
   
    // динамічні булети(різні по скейлу в залежності від місця розположення відносно активного)
   
    // dynamicBullets: true,
   
    // кастомні булети(виведення номеру слайда у булеті/функція яка пише спан всередині якого відбувається нумерація булетів/className-стандартний клас булета по замовчуванню)
    
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },

    // фракції(цифрова позначка номеру слайду без булетів/лише цифри)

    type: 'fraction',

    // кастомні фракції

    renderFraction: function (currentClass, totalClass) {
      return 'фото <span class="' + currentClass + '"></span>' + ' з ' + '<span class="' + totalClass + '"></span>';
    },

    // прогресбар
// type: 'progressbar'

    // скролл
    scrollbar: {
      el: '.swiper-scrollbar',
      // можливість переносити скрол
      draggable: true
  },
    
    // включення/відключення перемикання слайду захватом картинки на пк
  simulateTouch: true,

  // чутливість свайпу
  touchRatio: 1,

  // кут зпрацьовування свайпу/перетягування
  touchAngle: 45,

  // курсор перетягування
  grabCursor: true,

  // перемикання при кліку на слайд
slideToClickedSlide: true,

// навігація по хешу
  hashNavigation: {
  // відслідковувати стан
    watchState: true,
  },
  
  // управління клавіатурою
  keyboard: {
    // увімкнути/вимкнути
    enabled: true,
    // вкл/викл тільки коли слайдер в межах viewport
    pageUpDown: true,
  },

  // управління колесом мишки
  mousewheel: {
// чутливість колеса миші
    sensitivity: 1,
    // клас об'єкта на якому буде спрацьовувати прокрутка мишкою
    // (якщо на сторінці декілька слайдерів то вони будуть крутитись всі, тому варто залишити це за замовчуванням)
    // eventsTarget: ".swiper"
  },

  // автовисота свайпера (true/false)
  autoHight: false,

  // кількість слайдів для показу (по замовчуванню стоїть 'auto')
  slidesPerView: 'auto', 

  // відключення функціоналу, якщо слайдів менше ніж потрібно
  watchOverflow: true,

  // відступ між слайдами 
  spaceBetween: 30,

  // к-сть пролистуємих слайдів( н-п від першого відразу до 4-того)
  slidesPerGroup: 1,

  // перший слайд розміщуватиметься по центру
  centeredSlides: false,

  // стартовий слайд (0 - по замовчуванню)
  initialSlide: 0, 

  // мультирядковість(для норм роботи додатково робимо autoHight: false (декілька рядків) )
  slidesPerColumn: 1,

  // безкінечний слайдер
  loop: true,
  // відключаємо скрол + мультирядковість,якщо slidesPerView: 'auto'
  // то потрібно прописувати к-сть дублюючих слайдів
  loopedSlides: 3,

  // вільний режим прокрутки
  freeMode: true,

  // автопрокрутка
//   autoplay: {
// // пауза між прокруткою
//     delay: 1000,
//     // закінчити на останньому слайді 
//     stopOnLastSlide: true,
//     // відключити після ручного переключення
//     disableOnInteraction: false
//   },

  // швидікість автопрокруту 
  speed: 800,

  // вертикальне положення слайду
  // direction: 'vertical',
  direction: 'horizontal',

  // ефекти перемикання слайдів
  // листання
  effect: 'slide',
  // // зміна прозорості
  // // effect: 'fade',
  // // додатково до fade
  // fadeEffect: {
  //   // паралельна зміна прозорості
  //   crossFade: true
  // },

//   // переворот
//   effect: 'flip',
// // додаткові налаштування до 'flip'
//   flipEffect: {
//     // тінь
//     slideShadows: true,
//     // показ лиш активного слайду
//     limitRotation: true
//   },

//   // ефект перемикання слайдів куб
//   effect: 'cube',
//   // додаткові налаштування
//   cubeEffect: {
//   // налаштування тіней
//     slideShadows: true,
//     shadow: true,
//     shadowOffset: 20,
//     shadowScale: 0.94
//   },

//   // ефект потоку
//   effect: 'coverflow',
//   // додаткові налаштування
//   coverflowEffect: {
//     // кут
//   rotate: 20,
//     // накладання
//   stretch: 50,
//     // тінь
//   slideShadows: true,
//   },
  
  // БРЕКПОІНТ / АДАПТИВ / 
  // ширина екрану
  // (виставити значення slidesPerView: 'auto')
  breakpoints: {
    320: {
      slidesPreView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    }
  },

  // адаптив по співвідношенню сторін
  // breakpoints: {
  //   '@0.75': {
  //     slidesPerView: 1, 
  //   },
  //   '@1.00': {
  //      slidesPerView: 2, 
  //   },
  //   '@1.50': {
  //      slidesPerView: 3, 
  //   }
  // },

  /* слайдер lazy loading  */
  // відключити передзавантаження зображень
  preloadImages: false,
  // lazy loading (підвантаження зображень)
  lazy: {
  // підвантажувати на старті перемикання слайду
    loadOnTransitionStart: false,
    // підгрузити попередню і наступну картинки
    loadPrevNext: false,
  },
  // слідкування за видимими слайдами
  watchSlidesProgress: true,
// додавання класу видимим слайдам
  watchSlidesVisibility: true,

  // зум картинки
  zoom: {
    // максимальне збільшення 
    maxRatio: 5,
    // мінімальне збільшення
    minRatio: 1,
  },
// },
});
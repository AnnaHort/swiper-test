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
// },
});
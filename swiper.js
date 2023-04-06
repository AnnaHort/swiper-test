const swiper = new Swiper('.swiper', {
  // Optional parameters
    direction: 'horizontal',
    spaceBetween:30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
  },

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable:true,
      
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
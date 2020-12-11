//  '923' swiper.js - 3D Coverflow Effect

var swiper = new Swiper('.swiper-container-923 ', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 200,
      modifier: 1,
      slideShadows: true,
    },
    loop:true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

  //  (End) '923' swiper.js - 3D Coverflow Effect

  // '156' swiper.js - Parallax Scrolling

var swiper = new Swiper('.swiper-container-156', {
  speed: 600,
  parallax: true,
  loop:true,
  navigation: {
    nextEl: '.swiper-button-next-156',
    prevEl: '.swiper-button-prev-156',
  },
});

//  (End) '156' swiper.js - Parallax Scrolling



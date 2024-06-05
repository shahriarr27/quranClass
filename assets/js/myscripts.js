const swiperAnimation = new SwiperAnimation();

var swiper = new Swiper(".mySwiper", {
  effect: "fade",
  loop: true,
  speed: 1300,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    slideChangeTransitionStart: function () {
        // Slide captions
      gsap.to(".hero-title",{opacity:0,y:100, duration:0});
      gsap.to(".hero-subtitle1",{opacity:0,y:100, duration:0});
      gsap.to(".hero-subtitle2",{opacity:0,y:100, duration:0});
      gsap.to(".hero-btn",{opacity:0,y:100, duration:0});
      
    },
    slideChangeTransitionEnd: function () {
        // Slide captions
      gsap.to(".hero-title",{autoAlpha: 1, y: 0, duration: 1.5,delay:.5});
      gsap.to(".hero-subtitle1",{autoAlpha: 1, y: 0, duration: 1.5,delay:1});
      gsap.to(".hero-subtitle2",{autoAlpha: 1, y: 0, duration: 1.5,delay:1.5});
      gsap.to(".hero-btn",{autoAlpha: 1, y: 0, duration: 1.5,delay:2});
        
    },
  }
});

$('.course-btn').on('mouseover', function(){
  $('.course-btn').removeClass('animate__animated')
})
$('.course-btn').on('mouseout', function(){
  $('.course-btn').addClass('animate__animated')
})
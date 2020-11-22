(function($) {
  "use strict";

    // preloader
   
    $(window).bind("load", function () {
      jQuery("#loader").fadeOut("slow");
      jQuery("#preloader").delay(0).fadeOut();
  });


  // Mobile nenu
    $('.humg-btn').click(function(){
      $('.humg-btn').toggleClass('humgbMenu')
    });
    $('.humg-btn').click(function(){
      $('.mobile-menu').toggleClass('menuActivve')
    }); 


 
  // mainSlider
  $('.slider-active').slick({
    slidesToShow: 3,
    slidesToScroll: 1, 
    autoplaySpeed: 2000,
    centerPadding: '60px',
    responsive: [ 
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480, 
      centerPadding: '0px',
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }); 

  // owlCarousel
  $(".stp-slider").owlCarousel({
    loop: true, 
    items: 1, 
    nav: false,
    dots: true, 
  });
  $(".stp-slider").owlCarousel({
    loop: true, 
    items: 1,  
    nav: false,
    dots: true, 
    margin:20,
  });
 
 
  // Nice-select
  $('select').niceSelect();

  // Nice-number
  $('input[type="number"]').niceNumber();

 
 
})(jQuery);

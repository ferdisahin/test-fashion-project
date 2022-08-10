$('.content .slider').slick({
    slidesToShow: 2.5,
    slidesToScroll: 1,  
    infinite: false,
    nextArrow: '.arrow-container button',
    prevArrow: false,
    responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2.1
          }
        },
      ]    
});
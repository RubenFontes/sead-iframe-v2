$(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    //nav:true,
    //rtl:false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 3,
    responsive: {
      0:{
        items: 2,
        nav: false
      },
      600:{
        items: 3,
        nav: false
      },
      1000:{
        items: 4,
        nav: false
      }
    }
  });

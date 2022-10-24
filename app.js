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
      100:{
        items:1,
        nav: false
      },
      /*600:{
        items:2,
        nav: false
      }*/
      2000:{
        items:3,
        nav: false
      }
    }
  });

$(document).ready(function(){
   /*OWL CAROUSEL */
   $(".owl-theme" ).owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    items:1,
    responsive:{
      0: {
        item:1
      },
      560:{
        item:2
      }
    }
})
})
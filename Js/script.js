$(document).ready(function() {
 
  $(".owl-carousel").owlCarousel();
  $(".owl-carousel").owlCarousel({
 
    //Basic Speeds
    slideSpeed : 200,
    paginationSpeed : 800,
    
    //Autoplay
    autoPlay : true,
    goToFirst : true,
    goToFirstSpeed : 3000,
 
    // Navigation
    navigation : true,
    navigationText : ["prev","next"],
    pagination : true,
    paginationNumbers: true,
 
    // Responsive
    responsive: true,
    items : 5,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [980,3],
    itemsTablet: [768,2],
    itemsMobile : [479,1]
 
})
 
});
$(document).ready(function(){
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                responsive: {
                    0: { items: 1 },
                    600: { items: 3 },
                    1000: { items: 5 }
                },
               autoplay: true,
    autoplayTimeout:2000, // Time between slides in milliseconds (3000ms = 3 seconds)
    autoplayHoverPause: true // Stops autoplay on mouse hover
            });
        });
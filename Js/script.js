$(document).ready(function () {
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
        autoplayTimeout: 3000, // Slides move every 3 seconds
        autoplayHoverPause: true // Optional: pauses slide on mouse hover
    });
});

(function () {
    'use strict';

    // Homepage Slider
    $(document).ready(function () {
        $('.home-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000
        });
    });
})();

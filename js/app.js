$(document).ready(function () {
    AOS.init();
    // new WOW().init();

    // setTimeout(() => {
    //     $(".preloader").slideUp(1000);
    //     $(".preloader").remove();

    // }, 1500);
    // new WOW().init();

    //accordion

    function close_accordion_section() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
    }

    $('.accordion-section-title,.minus').click(function (e) {
        // Grab current anchor value
        var currentAttrValue = $(this).attr('href');

        if ($(e.target).is('.active')) {
            close_accordion_section();
        } else {
            close_accordion_section();

            // Add active class to section title
            $(this).addClass('active');
            // Open up the hidden content panel
            $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
        }

        e.preventDefault();
    });
})


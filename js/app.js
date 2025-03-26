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

    $('.accordion-section-title, .minus i').click(function (e) {
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



var mobil = $("#show-mobil");
var ev = $("#show-ev");


$(".jalan").hide();
mobil.css('display', 'none')
$("#bensin, .dedi-bensin").click(function () {
    setTimeout(() => {
        mobil.css('display', '')
        $('html, body').animate({
            scrollTop: mobil.offset().top + 102
        }, 1000);

    }, 500);
    ev.fadeOut()
    $(".jalan").show();
})

ev.css('display', 'none')
$("#ev, .dedi-ev").click(function () {
    setTimeout(() => {

        ev.css('display', '')
        $('html, body').animate({
            scrollTop: ev.offset().top + 102
        }, 1000);
    }, 500);
    mobil.fadeOut()
    $(".jalan").show();
    // e.preventDefault
})
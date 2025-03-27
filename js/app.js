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
var sembunyi = $(".sembunyi")


$(".jalan,.creditx,.hehe").hide();
// sembunyi.css('display', 'none')
// TweenMax.set($img,{autoAlpha:0,display:"none"});
// // animate CSS autoAlpha to 1
// TweenMax.to($img,3, {autoAlpha:1,display:"block"});
$("#bensin, .dedi-bensin").click(function () {
    // mobil.removeClass('sembunyiin');
    setTimeout(() => {
        mobil.children().addClass('lol')
        // mobil.css('display', 'block')
        // gsap.to(".sembunyiin", { display: "block", opacity: 1 });
        $('html, body').animate({
            scrollTop: mobil.offset().top
        }, 1000);

    }, 1000);

    ev.fadeOut()
    $(".jalan,.creditx,.hehe").show();
})

ev.css('display', 'none')
$("#ev, .dedi-ev").click(function () {
    setTimeout(() => {

        ev.css('display', '')
        $('html, body').animate({
            scrollTop: ev.offset().top + 200
        }, 1000);
    }, 500);
    // mobil.fadeOut()
    mobil.children().removeClass('lol')
    $(".jalan,.creditx,.hehe").show();
    // e.preventDefault
})
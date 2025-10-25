$(document).ready(function(){
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 200) {
            $('body').addClass('scrolled');
        } else {
            $('body').removeClass('scrolled');
        }
    });

    var docEl = $(document),
        headerEl = $('header'),
        navEl = $('.menu'),
        linkScroll = $('.scroll-menu a');

    linkScroll.click(function(e){
        e.preventDefault();

        linkScroll.removeClass("active");
        $(this).addClass("active");

        $('body, html').animate({
            scrollTop: $(this.hash).offset().top -100
        }, 500);
    });

    $(".burger").click(function(){
        $(".mobile-menu").toggleClass("show");
        $($(this).children("i")).toggleClass("ri-menu-2-line ri-close-line");
    });

    $(".program-slider").owlCarousel({
        responsive:{
            0:{
                items:2.2
            },
            768:{
                items:3.2
            },
            1000:{
                items:5
            }
        },
        autoplay: true,
        margin: 20
    });
    $(".why-slider").owlCarousel({
        responsive:{
            0:{
                items:1.2
            },
            768:{
                items:2.2
            },
            1000:{
                items:4
            }
        },
        autoplay: true,
        margin: 20
    });
    $(".fasilitas-slider").owlCarousel({
        responsive:{
            0:{
                items:1.2
            },
            768:{
                items:3.2
            },
            1000:{
                items:6
            }
        },
        autoplay: true,
        margin: 20
    });

    $(".accordion-toggle-btn").click(function(){
        $(".accordion-item").removeClass("active");
        $($(this).parent().parent().parent().parent().parent()).addClass("active");
        $($(this).children("i")).toggleClass("ri-arrow-down-s-line ri-arrow-up-s-line");
    });
});
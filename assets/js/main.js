$(document).ready(function(){
                $(window).on('scroll', function() {
                    if ($(this).scrollTop() > 200) {
                        $('header').addClass('scrolled');
                    } else {
                        $('header').removeClass('scrolled');
                    }
                });

                var docEl = $(document),
                    headerEl = $('header'),
                    navEl = $('.menu'),
                    linkScroll = $('.menu a');
                
                linkScroll.click(function(e){
                    e.preventDefault();

                    linkScroll.removeClass("active");
                    $(this).addClass("active");

                    $('body, html').animate({
                        scrollTop: $(this.hash).offset().top -100
                    }, 500);
                });

                $(".program-slider").owlCarousel({
                    items:5,
                    autoplay: true,
                    margin: 20
                });
                $(".fasilitas-slider").owlCarousel({
                    items:6,
                    autoplay: true,
                    margin: 20
                });

                $(".accordion-toggle-btn").click(function(){
                    $(".accordion-item").removeClass("active");
                    $($(this).parent().parent().parent().parent().parent()).addClass("active");
                    $($(this).children("i")).toggleClass("ri-arrow-down-s-line ri-arrow-up-s-line");
                });
            });
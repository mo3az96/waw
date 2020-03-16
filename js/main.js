$(function () {
    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, else we gonna set it if we can.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
});

$(window).on("load", function () {
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "visible");
        $('body').animate({
            scrollTop: 0
        }, 1);
        $(this).remove();
    });
});
$(document).ready(function () {
    //////////////////////////////////////////////
    var mainswiper = new Swiper('.main-slider .swiper-container', {
        pagination: {
            el: '.main-slider .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        autoplay: false,
        spaceBetween: 10,
        loop: true,
    });
    /////////////////////////////////////////////
    var brandsswiper = new Swiper('.brands-cont .brands-slider', {
        slidesPerView: 7,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: '.brands-cont .swiper-button-next',
            prevEl: '.brands-cont .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
            },
            1199: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    });
    ////////////////////////////////////////////
    var cat1swiper = new Swiper('#speciales-cat1 .Product-slider', {
        slidesPerView: 4,
        spaceBetween: 2,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '#speciales-cat1 .swiper-button-next',
            prevEl: '#speciales-cat1 .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
            },
            1199: {
                slidesPerView: 4,
            },
        },
    });
    ////////////////////////////////////////////
    var cat2swiper = new Swiper('#speciales-cat2 .Product-slider', {
        slidesPerView: 4,
        spaceBetween: 3,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '#speciales-cat2 .swiper-button-next',
            prevEl: '#speciales-cat2 .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
            },
            1199: {
                slidesPerView: 4,
            },
        },
    });
    ////////////////////////////////////////////
    var cat3swiper = new Swiper('#speciales-cat3 .Product-slider', {
        slidesPerView: 4,
        spaceBetween: 3,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '#speciales-cat3 .swiper-button-next',
            prevEl: '#speciales-cat3 .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
            },
            1199: {
                slidesPerView: 4,
            },
        },
    });
    ////////////////////////////////////////////
    var cat4swiper = new Swiper('#speciales-cat4 .Product-slider', {
        slidesPerView: 4,
        spaceBetween: 3,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '#speciales-cat4 .swiper-button-next',
            prevEl: '#speciales-cat4 .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
            },
            1199: {
                slidesPerView: 4,
            },
        },
    });
    ////////////////////////////////////////////
    var cat5swiper = new Swiper('#speciales-cat5 .Product-slider', {
        slidesPerView: 4,
        spaceBetween: 3,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '#speciales-cat5 .swiper-button-next',
            prevEl: '#speciales-cat5 .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
            },
            1199: {
                slidesPerView: 4,
            },
        },
    });
    ////////////////////////////////////////////
    var dayswiper = new Swiper('.day-offers .Product-slider', {
        slidesPerView: 2,
        spaceBetween: 3,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.day-offers .swiper-button-next',
            prevEl: '.day-offers .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
            },
            1199: {
                slidesPerView: 4,
            },
        },
    });
    ////////////////////////////////////////////
    var bestswiper = new Swiper('.best-seller .Product-slider', {
        slidesPerView: 2,
        spaceBetween: 3,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.best-seller .swiper-button-next',
            prevEl: '.best-seller .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
            },
            1199: {
                slidesPerView: 4,
            },
        },
    });
    ////////////////////////////////////////////
    var secty1swiper = new Swiper('#secty-cat1 .Product-slider', {
        slidesPerView: 4,
        spaceBetween: 2,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '#spsectyat1 .swiper-button-next',
            prevEl: '#spsectyat1 .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
            },
            1199: {
                slidesPerView: 4,
            },
        },
    });
    ////////////////////////////////////////////
    var secty2swiper = new Swiper('#secty-cat2 .Product-slider', {
        slidesPerView: 4,
        spaceBetween: 3,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '#secty-cat2 .swiper-button-next',
            prevEl: '#secty-cat2 .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
            },
            1199: {
                slidesPerView: 4,
            },
        },
    });
    ////////////////////////////////////////////
    var secty3swiper = new Swiper('#secty-cat3 .Product-slider', {
        slidesPerView: 4,
        spaceBetween: 3,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '#secty-cat3 .swiper-button-next',
            prevEl: '#secty-cat3 .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
            },
            1199: {
                slidesPerView: 4,
            },
        },
    });
    ////////////////////////////////////////////
    var elec1swiper = new Swiper('#elec-cat1 .Product-slider', {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 2,
        // loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '#spelecat1 .swiper-button-next',
            prevEl: '#spelecat1 .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
                slidesPerColumn: 1,
            },
            1199: {
                slidesPerView: 4,
                slidesPerColumn: 1,
            },
        },
    });
    ////////////////////////////////////////////
    var elec2swiper = new Swiper('#elec-cat2 .Product-slider', {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 3,
        // loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '#elec-cat2 .swiper-button-next',
            prevEl: '#elec-cat2 .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
                slidesPerColumn: 1,
            },
            1199: {
                slidesPerView: 4,
                slidesPerColumn: 1,
            },
        },
    });
    ////////////////////////////////////////////
    var elec3swiper = new Swiper('#elec-cat3 .Product-slider', {
        slidesPerView: 2,
        slidesPerColumn: 2,
        spaceBetween: 3,
        // loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '#elec-cat3 .swiper-button-next',
            prevEl: '#elec-cat3 .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
                slidesPerColumn: 1,
            },
            1199: {
                slidesPerView: 4,
                slidesPerColumn: 1,
            },
        },
    });
    ////////////////////////////////////////////
    var toysswiper = new Swiper('.toys .Product-slider', {
        slidesPerView: 4,
        spaceBetween: 3,
        loop: true,
        observer: true,
        observeParents: true,
        navigation: {
            nextEl: '.toys .swiper-button-next',
            prevEl: '.toys .swiper-button-prev',
        },
        breakpoints: {
            500: {
                slidesPerView: 2,
            },
            1199: {
                slidesPerView: 4,
            },
        },
    });


    if ($(window).width() <= 767) {
        $(".nav-foot-header").addClass("mo-accordion");
        $(".nav-foot").addClass("mo-panel");
        /////////////////////////////////////////////////
        $('.mo-search-icon').click(function () {
            $(".search-form").fadeIn(500);
            $("body").addClass("overflow");
            $('.search-input').focus();
        });
        $('.search-form').click(function () {
            $("body").removeClass("overflow");
            $(".search-form").fadeOut(500);
            $('.search-input').focusout();
        });
        $('.search-cont').click(function (e) {
            e.stopPropagation();
        });
    }


    $('.mo-accordion').click(function () {
        var x = $(this).siblings().prop('scrollHeight') + 12 + "px";
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('max-height') == '0px') {
            $(this).siblings().css('max-height', x);
            $(this).siblings().css('padding-top', "15px");
        } else {
            $(this).siblings().css('max-height', '0');
            $(this).siblings().css('padding-top', "0");
        }

        $(".mo-accordion").not(this).siblings().css('max-height', '0');
        $(".mo-accordion").not(this).siblings().css('padding-top', "0");
    })
});
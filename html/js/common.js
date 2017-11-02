$(function() {

    'use strict';

    /*******************************************************/
    //VARS
    /*******************************************************/
    var $window = $(window);
        // $html = $('html'),
        // $body = $('body'),
        // w = $window.width();


    /*******************************************************/
    //MENU MOBILE
    /*******************************************************/
    var $headerBottomBox = $('.header__bottom-box'),
        $headerButtonMenu = $('.header__button-menu');

    if ( $window.width() <= 640 ) {
        $headerBottomBox.hide();
    }

    $headerButtonMenu.click(function() {
        $(this).toggleClass('active');
        $headerBottomBox.stop().slideToggle(200);
    });

    $window.resize(function() {
        if ( $window.width() <= 640 ) {
            if ( !$headerButtonMenu.hasClass('active') ) {
                $headerBottomBox.hide();
            }
        } else {
            $headerButtonMenu.removeClass('active');
            $headerBottomBox.removeAttr('style');
        }
    });

    /*******************************************************/
    //PRODUCTION SLIDER
    /*******************************************************/
    $('.production__box').addClass('owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: '',
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 300,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            481: {
                items: 2
            },
            993: {
                items: 3
            },
            1201: {
                items: 4
            }
        }
    });

    /*******************************************************/
    //clients-home SLIDER
    /*******************************************************/
    $('.clients-home__list').addClass('owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: '',
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 300,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            361: {
                items: 2
            },
            993: {
                items: 3
            },
            1201: {
                items: 4
            }
        }
    });

    /*******************************************************/
    //INSTAGRAM SLIDER
    /*******************************************************/
    $('.instagram__box').addClass('owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        navText: '',
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 300,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2
            },
            481: {
                items: 3
            },
            641: {
                items: 4
            },
            769: {
                items: 5
            },
            993: {
                items: 6
            },
            1201: {
                items: 7
            },
            1401: {
                items: 8
            }
        }
    });

});

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
    //production-home SLIDER
    /*******************************************************/
    $('.production-home__box').addClass('owl-carousel').owlCarousel({
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

    //-------------------------------
    // Google Map
    //-------------------------------
    if(typeof google === 'object' && typeof google.maps === 'object' && $('#map').length) {
        function initializeMap() {
            var markerPositions = new Array();
                markerPositions[1] = new google.maps.LatLng(47.222831, 39.715031);

            var loc = new google.maps.LatLng(47.222831, 39.715031);

            var map = new google.maps.Map(document.getElementById('map'), {
                 zoom: 16,
                 center: loc,
                 mapTypeId: google.maps.MapTypeId.ROADMAP,
                 scrollwheel: false
            });

            var iconlink = 'img/';
            for(var i in markerPositions) {
              var markerPosition = markerPositions[i];
              var marker = new google.maps.Marker({
                  map: map,
                  position: markerPosition,
                  visible: true,
                  icon: iconlink + 'icon-map.png'
              });
            }

            map.set('styles', [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ccc"},{"lightness":20},{"saturation":-97}]}]);
        }
        initializeMap();
        google.maps.event.addDomListener(window, 'load', initializeMap);
    }

});

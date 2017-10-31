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
        $headerBottomBox.slideToggle(200);
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

});

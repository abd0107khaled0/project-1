/*global $, alert, console */

$(function () {
    
    'use strict';
    var myHeader = $(".header");
    
    myHeader.height($(window).height());
    
    $(window).resize(function () {
        
        myHeader.height($(window).height());
 
    });
      
    
    
    $(".links li").on("click", function () {
        
        $(this).addClass("active").siblings().removeClass("active");
    });
    
    //smoth scroll
    $(".links li a").click(function () {
       
        $("html, body").animate({
           
            scrollTop: $('#' + $(this).data('value')).offset().top
         
        }, 2000);
        console.log($(this).data('value'));
    });
    
    // our auto slider
    (function autoSlider() {
        
        $(".slider .activee").each(function () {
            
            if (!$(this).is(':last-child')) {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('activee').next().addClass('activee').fadeIn();
                     
                    autoSlider();
                });
                
            } else {
                
                $(this).delay(3000).fadeOut(1000, function () {
                    
                    $(this).removeClass('activee');
                    
                    $(".slider div").eq(0).addClass('acivee').fadeIn();
                    
                     autoSlider();
                });
            }
            
        });
        
    }());
    
    
});









































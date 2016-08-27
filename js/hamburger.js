$(document).ready(function() {
    $(".hamburger").click(function() {
        $('nav').hasClass('open') ? closeMenu() : openMenu();
    });

    //close the menu on click
    $(".menu-layer").click(closeMenu);

});



function openMenu() {
    $('nav').addClass('open');
    $('.menu-layer').addClass('block');
    $('.hamburger').addClass("spin");
    // extend nav
}

function closeMenu() {
    $('nav').removeClass('open');
    $('.menu-layer').removeClass('block');
    $('.hamburger').removeClass("spin");
    // retract nav
}

$(window).on('resize load', function(){
    closeMenu()
    if($(window).width() >= 767) {
        $('.hamburger').removeClass('block')
    }else{
        $('.hamburger').addClass('block')
    }
});

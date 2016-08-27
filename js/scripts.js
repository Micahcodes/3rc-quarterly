$(document).ready(function() {

	/*============================================
	Navigation Functions
	==============================================*/
	$(window).scroll(function(){
		$(window).scrollTop() === 0 ?
		$('nav').removeClass('scrolled') : $('nav').addClass('scrolled')

		// highlight applicable menu item on page scroll
	    // get the current window position and all menu section positions
	    position = $(this).scrollTop();
	    $('nav li a').each(function(){
	        var anchorId = $(this).attr('href');
	        var target = ($(anchorId).offset().top) - 150;
	        
	        // check if the current position has crossed a section
	        if(position >= target) {
	            $('nav li').removeClass("active")
	            $(this).parent().addClass('active'); 
	        }
	    })
	});

    // force scroll state after DOM ready
	$(function(){
	    $(window).scroll();
	})

	// set menu scrolling to smooth scroll
	$("nav a").smoothScroll({offset: -100});
});


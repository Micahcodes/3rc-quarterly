$(document).ready(function() {
		const navScrolled = "main-nav-scrolled";
		const headerHeight = $('header').height();

		// navigation
    $(window).scroll(function() {
				const position = $(this).scrollTop();
        if (position > headerHeight) {
						$('nav').addClass('scrolled');
				} else {
						$('nav').removeClass('scrolled');
				}

        // highlight applicable menu item on page scroll
        // get the current window position and all menu section positions
        $('nav li a').each(function() {
            const anchorId = $(this).attr('href');
            const target = ($(anchorId).offset().top) - 150;

            // check if the current position has crossed a section
            if (position >= target) {
                $('nav li').removeClass("active")
                $(this).parent().addClass('active');
            }
        })
    });

    // $(window).scroll(function() {
    //     if ($(this).scrollTop() > headerHeight) {
    //         $('nav').addClass("scrolled");
    //     } else {
    //         $('nav').removeClass(scrolled);
    //     }
    // });

    // force scroll state after DOM ready
    $(function() {
        $(window).scroll();
    })

    // set menu scrolling to smooth scroll
    $("nav a").smoothScroll({
        offset: -100
    });
});

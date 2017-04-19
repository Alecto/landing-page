(function ($) {  

	/* bootstrap menu hover */
	$(".dropdown").hover(            
		function() {
			$('.dropdown-menu', this).stop( true, true ).fadeIn("fast");
			$(this).toggleClass('open');
			$('b', this).toggleClass("caret caret-up");                
		},
		function() {
			$('.dropdown-menu', this).stop( true, true ).fadeOut("fast");
			$(this).toggleClass('open');
			$('b', this).toggleClass("caret caret-up");                
		});


		$(window).scroll(function(){
	    var t_scroll = $(window).scrollTop();
	    var t_sticky = $('#navbar');

			if (t_scroll >= 100) t_sticky.addClass('navbar-transparent');
	  		else t_sticky.removeClass('navbar-transparent');
		});


    $(document).ready(function() {
      $('#navbar').onePageNav();
    });

    
    AOS.init({
			duration: 500,
      easing: 'ease-in-sine',
    });

})(jQuery);                                                                 // Avoid conflicts with other libraries
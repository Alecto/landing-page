(function ($) {
  let $navbar = $('#header-navbar');

  $(window).scroll(() => {


    const currentScrollPos = $(window).scrollTop();
    const headerClassOnScroll = 'header-navbar--scrolled';
    const scrollPos = 100;

    currentScrollPos > scrollPos ? $navbar.addClass(headerClassOnScroll) : $navbar.removeClass(headerClassOnScroll);
  });

  $navbar.onePageNav({
    currentClass: 'active',
    scrollSpeed: 750,
    easing: 'swing',
    filter: ':not(.navbar-brand)'
  });

})(jQuery);

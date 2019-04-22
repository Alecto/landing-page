(function ($) {

  $(window).scroll(() => {
    let $navbar = $('#header-navbar');
    const currentScrollPos = $(window).scrollTop();
    const headerClassOnScroll = 'header-navbar--scrolled';
    const scrollPos = 100;

    currentScrollPos > scrollPos ? $navbar.addClass(headerClassOnScroll) : $navbar.removeClass(headerClassOnScroll);
  });

})(jQuery);

(function ($) {
  let $navbar = $('#header-navbar');

  /* добавление класса-модификатора в меню на скрол */
  const headerClassOnScroll = 'header-navbar--scrolled';
  const scrollPos = 100;

  $(window).on('scroll', () => {
    $(window).scrollTop() > scrollPos ? $navbar.addClass(headerClassOnScroll) : $navbar.removeClass(headerClassOnScroll);
  });
  /* добавление класса-модификатора в меню на скрол */

  /* подключение и настройка внутристраничной навигации */
  $navbar.onePageNav({
    currentClass: 'active',
    scrollSpeed: 750,
    easing: 'swing',
    filter: ':not(.navbar-brand)'
  });
  /* подключение и настройка внутристраничной навигации */

  /* закрытие меню при клике */
  let windowSize = $(window).width();

  $(window).on('resize', () => windowSize = $(window).width());

  let $link = $('#header-navbar-collapse a');
  let $navbarToggler = $('.navbar-toggler');
  let $headerNavbarCollapse = $('#header-navbar-collapse');

  $link.on('click', () => {
    if (windowSize < 992) {
      $navbarToggler.addClass('collapsed');
      $headerNavbarCollapse.removeClass('show');
    }
  });
  /* закрытие меню при клике */

  /* подключение и настрока плагина анимации */
  AOS.init({
    duration: 500,
    easing: 'ease-in-sine',
  });
  /* подключение и настрока плагина анимации */
})(jQuery);

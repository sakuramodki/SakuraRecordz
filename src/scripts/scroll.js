function updateScrollMenu() {
  const scroll = $(window).scrollTop();

  const className = 'menu-show';
  const hasClass  = $('html').hasClass(className);

  if (scroll > 10) {
    if (!hasClass) {
      $('html').addClass(className);
    }
  } else {
    if (hasClass) {
      $('html').removeClass(className);
    }
  }
};

export default() => {
  updateScrollMenu();
  $(window).scroll(updateScrollMenu);
};

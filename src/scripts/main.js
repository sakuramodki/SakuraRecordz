// Libraries
import "bootstrap-less";

// user modules

// Initialize Logic
const updateScrollMenu = () => {
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

$(document).ready( () => {

  updateScrollMenu();
  $(window).scroll(updateScrollMenu);

  $('ul.nav .page-scroll').click(() => {
    $('.navbar-main-collapse').attr('aria-expanded', false);
    $('.navbar-main-collapse').removeClass('in');
  });

  var height = $('.intro').height();
  console.log(height);
  $('.intro').height(height);
  $('.intro-bg').height(height + 120);
})




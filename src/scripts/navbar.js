export default () => {
  $('ul.nav .page-scroll').click(() => {
    $('.navbar-main-collapse').attr('aria-expanded', false);
    $('.navbar-main-collapse').removeClass('in');
  });
};

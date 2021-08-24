$(document).on('click', 'a[href^="#"]', function (event) {
  if (event.currentTarget.className.includes('carousel-control')) { return }

  event.preventDefault();

  const offsetToScroll = possibleMobile() ? 0 : 20;

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - offsetToScroll
  }, 'slow');

  $('label.hamburguer-menu input').prop('checked', false);
});

const showNavbar = function() {
  const headerHeight = $('header').height() - 70;
  if ($(window).scrollTop() > headerHeight) {
    $('nav').parent().removeClass('hidden-content');
    $('label.hamburger-menu').removeClass('hidden-content');
    $('#header-text').hide()
  } else if($(window).scrollTop() < headerHeight) {
    $('nav').parent().addClass('hidden-content');
    $('label.hamburger-menu').addClass('hidden-content');
      $('#header-text').show()
    }
};

$(document).on('click', 'a[href^="#"]', function (event) {
  if (event.currentTarget.className.includes('carousel-control')) { return }

  event.preventDefault();

  const offsetToScroll = possibleMobile() ? 0 : 20;

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top - offsetToScroll
  }, 'slow');

  $('label.hamburguer-menu input').prop('checked', false);
});

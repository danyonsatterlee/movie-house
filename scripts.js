$('.navbar-toggle').on('click', function() {
 $('.after-nav').css('margin-top','200px');
});

$(".navbar-toggle").on("click", function () {
    $(this).toggleClass("active");
});

$('nav a').click(function () {
  var $href = $(this).attr('href');
  $('body').stop().animate({
    scrollTop: $($href).offset().top
  }, 800);
  return false;
});

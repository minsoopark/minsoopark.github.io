$(window).scroll(function () {
  var scrolled = $(window).scrollTop();
  if ($(window).width() <= 700) {
    $(".wrapper-nav-bar").css("opacity", (scrolled / 200.0))
  }
});

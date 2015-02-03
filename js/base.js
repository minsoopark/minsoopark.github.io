$(window).scroll(function () {
  var scrolled = $(window).scrollTop();
  if ($(window).width() <= 700) {
    $(".img-profile").css("opacity", 1.0 - (scrolled / 150.0))
    $(".wrapper-nav-bar").css("opacity", (scrolled / 200.0))
  }
});

//NAVBAR BACKGROUND COLOR CHANGES WHEN WE SCROLL
$(document).ready(function () {
    $(window).scroll(function () {
      if ($(document).scrollTop() > 120) {
          $(".social-contact a, .navbar-nav a").addClass("active");
          $(".logo").addClass("active");
          $(".navbar").addClass("active");
        } else {
            $(".social-contact a, .navbar-nav a").removeClass("active");
            $(".logo").removeClass("active");
            $(".navbar").removeClass("active");
      }
    });
  });

 
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
  activeLinks();
});

const activeLinks = () => {
  const currentLocation = location.href;
  const menuItem = document.querySelectorAll(
    ".navbar-expand-lg .navbar-nav .nav-link"
  );
  const menuLength = menuItem.length;
  for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
      menuItem[i].className = "activeLinks";
    }
  }
};

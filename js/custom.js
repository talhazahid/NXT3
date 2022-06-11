

$('.center').slick({
 centerMode: true,
 centerPadding: '60px',
 dots: true,
 variableWidth: true,
 slidesToShow: 4,
 responsive: [
  {
   breakpoint: 768,
   settings: {
    arrows: false,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3
   }
  },
  {
   breakpoint: 480,
   settings: {
    arrows: false,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 1
   }
  }
 ]
});







var menu = new MmenuLight(document.querySelector("#mobile_menu"), "all");

var navigator = menu.navigation({
 // selectedClass: 'Selected',
 // slidingSubmenus: true,
 theme: 'dark',
 title: 'NFT'
});

var drawer = menu.offcanvas({
 // position: 'left'
});

//	Open the menu.
document
 .querySelector('a[href="#mobile_menu"]')
 .addEventListener("click", (evnt) => {
  evnt.preventDefault();
  drawer.open();
 });






$(function () {
 var shrinkHeader = 300;
 $(window).scroll(function () {
  var scroll = getCurrentScroll();
  if (scroll >= shrinkHeader) {
   $('.header').addClass('shrink');
  }
  else {
   $('.header').removeClass('shrink');
  }
 });
 function getCurrentScroll() {
  return window.pageYOffset || document.documentElement.scrollTop;
 }
});



$(document).on('click', 'a[href^="#"]', function (event) {
 event.preventDefault();
 $('html, body').animate({
  scrollTop: $($.attr(this, 'href')).offset().top + -86
 }, 1000);
});


$(document).scroll(function () {
 var y = $(this).scrollTop();
 if (y > 600) {
  $('.top').fadeIn();
 } else {
  $('.top').fadeOut();
 }
});


$('#d-menu li a').on('click', function () {
 $('li a.current').removeClass('current');
 $(this).addClass('current');
});




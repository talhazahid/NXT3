

$('.center').slick({
 centerMode: true,
 centerPadding: '60px',
 variableWidth: true,
 autoplay: true,
 autoplaySpeed: 5000,
 slidesToShow: 4,
 prevArrow: '<span class="prev"></span>',
 nextArrow: '<span class="next"></span>',
 responsive: [
  {
   breakpoint: 768,
   settings: {
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3
   }
  },
  {
   breakpoint: 480,
   settings: {
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 1
   }
  }
 ]
});





'use strict';

(function () {

 var delay = 250;

 // Modal toggler
 function modal(el) {
  if (typeof el === 'string') {
   el = document.querySelector(el);
  }
  if (!el) {
   console.error('Modal target not found!');
   return;
  }
  if (el.classList.contains('active')) {
   _hideModal(el);
  }
  else {
   _showModal(el);
  }
 }

 function _showModal(el) {
  el.style.display = 'block';

  setTimeout(function () {
   el.classList.add('active');
   document.body.classList.add('modal-active');
  }, delay);

 }

 function _hideModal(el) {
  el.classList.remove('active');

  setTimeout(function () {
   el.style.display = 'none';
   document.body.classList.remove('modal-active');
  }, delay);
 }

 function _hideAll() {
  document.querySelectorAll('.modal.active')
   .forEach(function (el) {
    _hideModal(el);
   });
 }

 function _parents(el, cb) {
  if (cb(el)) return el;

  while (el && el.parentNode !== document) {
   el = el.parentNode;
   if (cb(el)) return el;
  }
  return undefined;
 }

 function _findParentToggle(el) {
  return _parents(el, function (el) {
   if (!el) return;
   return el.hasAttribute('data-toggle') && el.getAttribute('data-toggle') === 'modal';
  });
 }

 function _findParentModal(el) {
  return _parents(el, function (el) {
   return el.classList.contains('modal');
  });
 }


 /*
     ===============
     EVENT LISTENERS
     ===============
 */

 // Exit key should close any open modals
 document.addEventListener('keyup', function (event) {
  if (event.keyCode === 27) {
   _hideAll();
  }
 });

 // Click delegation
 document.addEventListener('click', function (e) {
  var el = e.target;

  if (el.classList.contains('modal')) { // click outside of modal body
   return _hideModal(el);
  }
  else if (el.classList.contains('modal-close')) { // click .modal-close elem
   var parentModal = _findParentModal(el);
   return _hideModal(parentModal);
  }

  // Handle case where e.target may be nested anywhere
  // inside an element with data-toggle="modal"
  var parentToggle = _findParentToggle(el);
  if (parentToggle) {
   var target = parentToggle.getAttribute('data-target');
   _showModal(document.querySelector(target));
  }
 });


 // Expose modal functionality

 // Named elements ([id], [name]) appear as properties on window object
 // This ensures that we are only overriding window.modal if window.modal is not a fn
 //https://stackoverflow.com/a/3434388
 if (typeof window.modal !== 'function') window.modal = modal;

})();



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


$(".show-team-member").hide();
$(".load-team-btn").click(function () {
 $(".show-team-member").slideToggle(100);
 return false;
});

function myFunction() {
 var x = document.getElementById("team-mem");
 if (x.innerHTML === "Hello") {
  x.innerHTML = "Load More";
 } else {
  x.innerHTML = "Hide Members";
 }
}

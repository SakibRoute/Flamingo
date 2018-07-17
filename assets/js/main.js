//menu top fixed
  var fixed_top = $(".primaryMenu");
  $(window).on('scroll', function () {
      if ($(this).scrollTop() > 80) {
          fixed_top.addClass("primaryMenuFixed animated fadeInDown");
          fixed_top.removeClass("slideInUp");
          $('body').addClass("body-padding");
      } else {
          fixed_top.removeClass("primaryMenuFixed fadeInDown");
          fixed_top.addClass("slideInUp"); 
          $('body').removeClass("body-padding");
      }
  });


//Js code for search box
jQuery(document).ready(function($) {
  $(".first-click").on("click",function () {
      $(".first-click").hide();
      $(".second-click").css('display', 'block');
      $(".primaryMenu").addClass("search-box");
  });
  $(".second-click").on("click",function () {
      $(".second-click").hide();
      $(".first-click").css('display', 'block');
      $(".primaryMenu").removeClass("search-box");
  });
});


//google map location

function initMap() {
        var uluru = {lat: 23.739321, lng: 90.389146};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 19,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      };




// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnHeight: 1,
  }
});
// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
};
// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });
});
// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.is-checked').removeClass('is-checked');
    $( this ).addClass('is-checked');
  });
});





/* swiper home2 product*/
var swiper = new Swiper('.product-swiper-container', {
      slidesPerView: 5,
      spaceBetween: 5,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      
    });


/* swiper home2 testimonialSectionV2*/
var swiper = new Swiper('.testimonialSectionV2-swiper-container', {
      slidesPerView: 3,
      spaceBetween: 12,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
    });


//light Case Helper
jQuery(document).ready(function($) {
    $('a[data-rel^=lightcase]').lightcase();
  });

//easing Helper
function mash_scrolled() {

    if ( jQuery(window).width() >= 751 ) {

        var mash_scrollTop = jQuery(window).scrollTop();       // cursor position
        var headerHeight = jQuery('.primaryMenu').outerHeight();   // header height
        var isInOneSection = 'no';                              // used for checking if the cursor is in one section or not

        // for all sections check if the cursor is inside a section
        jQuery("section, header").each( function() {
            var thisID = '#' + jQuery(this).attr('id');           // section id
            var mash_offset = jQuery(this).offset().top;         // distance between top and our section
            var thisHeight  = jQuery(this).outerHeight();         // section height
            var thisBegin   = mash_offset - headerHeight;                      // where the section begins
            var thisEnd     = mash_offset + thisHeight - headerHeight;         // where the section ends

            // if position of the cursor is inside of the this section
            if ( mash_scrollTop >= thisBegin && mash_scrollTop <= thisEnd ) {
                isInOneSection = 'yes';
                jQuery('#bs-example-navbar-collapse-1 .active').removeClass('active');
                jQuery('#bs-example-navbar-collapse-1 a[href$="' + thisID + '"]').parent('li').addClass('active');    // find the menu button with the same ID section
                return false;
            }
            if (isInOneSection == 'no') {
                jQuery('#bs-example-navbar-collapse-1 .active').removeClass('active');
            }
        });
    }
}
jQuery(window).on('scroll',mash_scrolled);
$('ul.menu').each(function (i, liList) {
    var $liList = $(liList);
    $liList.on('click', 'li a', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

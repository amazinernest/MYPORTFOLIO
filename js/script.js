AOS.init({
  duration: 600,
});

(function ($) {
  "use strict";

  // post gallery

  $(".post_gallery").owlCarousel({
    loop: true,
    margin: 1,
    nav: true,
    dots: false,
    navText: [
      "<i class='ti-angle-left'></i>",
      "<i class='ti-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 4,
      },
    },
  });

  // SCROLL TO TOP

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 70) {
      $(".backtop").addClass("reveal");
    } else {
      $(".backtop").removeClass("reveal");
    }
  });

  // Sticky Menu
  //
  $(window).on("scroll", function () {
    if ($(".navigation").offset().top > 100) {
      $(".navigation").addClass("fixed-nav");
    } else {
      $(".navigation").removeClass("fixed-nav");
    }
  });

  /* Closes the Responsive Menu on Menu Item Click*/
  $(".navbar-collapse .navbar-nav a").on("click", function () {
    $(".navbar-toggler:visible").click();
  });

  $("a.smoth-scroll").on("click", function (e) {
    var anchor = $(this);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $(anchor.attr("href")).offset().top - 50,
        },
        1000
      );
    e.preventDefault();
  });

  $(".testimonial-slider").slick({
    slidesToShow: 1,
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  });

  $(window).on("load", function () {
    // makes sure the whole site is loaded

    // -----------------------
    // Progress Bar--------------------
    //
    $(".progress-bar").each(function () {
      var width = $(this).data("percent");
      $(this).css({ transition: "width 3s" });
      $(this).appear(function () {
        console.log("hello");
        $(this).css("width", width + "%");
        $(this).find(".count").countTo({
          from: 0,
          to: width,
          speed: 3000,
          refreshInterval: 50,
        });
      });
    });
  }); //End On Load Function
})(jQuery);

// card script

$.fn.commentCards = function () {
  return this.each(function () {
    var $this = $(this),
      $cards = $this.find(".card"),
      $current = $cards.filter(".card--current"),
      $next;

    $cards.on("click", function () {
      if (!$current.is(this)) {
        $cards.removeClass("card--current card--out card--next");
        $current.addClass("card--out");
        $current = $(this).addClass("card--current");
        $next = $current.next();
        $next = $next.length ? $next : $cards.first();
        $next.addClass("card--next");
      }
    });

    if (!$current.length) {
      $current = $cards.last();
      $cards.first().trigger("click");
    }

    $this.addClass("cards--active");
  });
};

$(".cards").commentCards();

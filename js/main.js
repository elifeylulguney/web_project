$(document).ready(function() {
  // Single Page Nav for highlighting nav items
  $("#tmMainNav").singlePageNav();

  // Carousel in Our Work section
  $(".tm-gallery").slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  // Image Pop Up
  $(".tm-gallery").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: { enabled: true }
  });

  $(".navbar-toggler").on("click", function(e) {
    $(".tm-sidebar").toggleClass("show");
    e.stopPropagation();
  });

  $("html").click(function(e) {
    var sidebar = document.getElementById("tmSidebar");

    if (!sidebar.contains(e.target)) {
      $(".tm-sidebar").removeClass("show");
    }
  });

  $("#tmMainNav .nav-link").click(function(e) {
     if ($(this).parent().hasClass("has-submenu")) return;
  $(".tm-sidebar").removeClass("show");
  });
});
// Alt menü aç/kapa (Hobiler)
$(".has-submenu > .nav-link").click(function(e) {
  e.preventDefault(); // linkin varsayılan davranışını engelle
  $(this).siblings(".submenu").toggleClass("open"); // alt menüyü aç/kapa
});


document.querySelector(".tm-contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Önce sayfanın anında yenilenmesini engelle

    const alertBox = document.getElementById("form-alert");

    // Uyarıyı göster
    alertBox.style.display = "block";

    // 3 saniye sonra sayfayı yenile
    setTimeout(() => {
      location.reload();
    }, 3000);
  });

  $(".accordion-toggle").on("click", function (e) {
  e.preventDefault();

  const parent = $(this).closest(".has-submenu");

  // Başka açık akordiyon varsa kapat
  $(".has-submenu").not(parent).removeClass("active");

  parent.toggleClass("active");
});

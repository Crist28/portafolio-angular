(function ($) {
  "use strict";

  jQuery(document).ready(function () {
    /* Preloader */

    $(window).load(function () {
      $(".preloader").delay(800).fadeOut("slow");
    });

    /* Smooth Scroll */

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

    /* Scroll Naviagation Background Change with Sticky Navigation */

    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 100) {
        $(".header-top-area").addClass("navigation-background");
      } else {
        $(".header-top-area").removeClass("navigation-background");
      }
    });

    /* Mobile Navigation Hide or Collapse on Click */

    $(document).on("click", ".navbar-collapse.in", function (e) {
      if (
        $(e.target).is("a") &&
        $(e.target).attr("class") != "dropdown-toggle"
      ) {
        $(this).collapse("hide");
      }
    });
    $("body").scrollspy({
      target: ".navbar-collapse",
      offset: 195,
    });

    /* Scroll To Top */

    $(window).scroll(function () {
      if ($(this).scrollTop() >= 500) {
        $(".scroll-to-top").fadeIn();
      } else {
        $(".scroll-to-top").fadeOut();
      }
    });

    $(".scroll-to-top").click(function () {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });

    /* Tooltip */

    $(function () {
      $('[data-toggle="tooltip"]').tooltip();
    });

    /* Ajaxchimp for Subscribe Form */

    $("#mc-form").ajaxChimp();

    /* Portfolio Filtering */

    $(".portfolio-inner").mixItUp();

    /* Magnific Popup */

    $(".portfolio-popup").magnificPopup({
      type: "image",
      gallery: { enabled: true },
      zoom: { enabled: true, duration: 500 },
      image: {
        markup:
          '<div class="mfp-figure portfolio-pop-up">' +
          '<div class="mfp-close"></div>' +
          '<div class="mfp-img"></div>' +
          '<div class="mfp-bottom-bar portfolio_title">' +
          '<div class="mfp-title"></div>' +
          '<div class="mfp-counter"></div>' +
          "</div>" +
          "</div>",
        titleSrc: function (item) {
          return item.el.attr("title");
        },
      },
      callbacks: {
        open: function () {
          const img = this.content.find('img');
          const imgWidth = img.width();
          const imgHeight = img.height();
    
          const maxWidth = 900; // Ancho máximo del modal
          const maxHeight = 900; // Altura máxima del modal
    
          let newWidth = imgWidth;
          let newHeight = imgHeight;
    
          if (imgWidth > maxWidth) {
            newWidth = maxWidth;
            newHeight = (imgHeight * maxWidth) / imgWidth;
          }
    
          if (newHeight > maxHeight) {
            newHeight = maxHeight;
            newWidth = (imgWidth * maxHeight) / imgHeight;
          }
    
          this.content.css({
            width: newWidth,
            height: newHeight,
          });
    
          this.container.css({
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          });
        },
      },
    });

    /* Testimonial Carousel/Slider */

    $(".testimonial-carousel-list").owlCarousel({
      items: 1,
      autoPlaySpeed: 5000, // Cambia este valor según tus necesidades (5000 = 5 segundos)
      stopOnHover: false,
      navigation: true,
      navigationText: [
        "<i class='fa fa-long-arrow-left fa-2x owl-navi'></i>",
        "<i class='fa fa-long-arrow-right fa-2x owl-navi'></i>",
      ],
      itemsDesktop: [1199, 1],
      itemsDesktopSmall: [980, 1],
      itemsTablet: [768, 1],
      itemsTabletSmall: false,
      itemsMobile: [479, 1],
      autoHeight: true,
      pagination: false,
      transitionStyle: "fadeUp",
    });
  });
})(jQuery);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Esta opción hace que el desplazamiento sea suave
  });
}

//enviar formulario al correo

// Manejador del envío del formulario
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores del formulario
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const website = document.getElementById("website").value;
    const address = document.getElementById("address").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Enviar el correo electrónico utilizando EmailJS
    emailjs
      .send("service_3j3vlhb", "template_coz59tg", {
        name: name,
        email: email,
        website: website,
        address: address,
        subject: subject,
        message: message,
      })
      .then(
        function (response) {
          console.log("Correo enviado:", response.status, response.text);
          // Aquí puedes agregar tu lógica adicional después de enviar el correo electrónico
        },
        function (error) {
          console.error("Error al enviar el correo:", error);
          // Aquí puedes manejar el error de envío del correo electrónico
        }
      );
  });

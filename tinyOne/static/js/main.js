window.onload = function() {
   const preload = document.getElementById('preload-wrap');
   preload.style.display = "none";
   document.body.classList.remove('overflow-prel');
}

document.addEventListener("DOMContentLoaded", function() {

    // variables
    const burgerBtn = document.querySelector(".control__burger"),
                burger = burgerBtn.querySelector('.burger-nav'),
               nav = document.querySelector(".navigation-main");

    console.log(burger);

    // functions
    function openMnu() {

        if (nav.classList.contains("navigation-main_closed")) {
            // for nav
            nav.classList.remove("navigation-main_closed");
            nav.classList.add("navigation-main_opened");
            
            // for burger
            burger.classList.add('burger-nav_close');

            document.body.classList.add("overflow-hid");

        } else if (nav.classList.contains("navigation-main_opened")) {

            nav.classList.add("navigation-main_closed");
            nav.classList.remove("navigation-main_opened");
           

            burger.classList.remove('burger-nav_close');

            document.body.classList.remove("overflow-hid");
        }

    }

    // events
    burgerBtn.addEventListener("click", openMnu);

    // slider
    $('.slider-main').slick({
        arrows: false,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: true
      });

      $('.slick-dots li').each(function() {
        $(this).html('<span class="slick-circle"></span>');
      });
});


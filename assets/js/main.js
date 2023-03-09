var swiper = new Swiper(".portofolioSwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
    delay: 2700,
    disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

var swiper2 = new Swiper(".client-response", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
    delay: 3500,
    disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-next",
        prevEl: ".swiper-prev"
      },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  document.addEventListener("DOMContentLoaded", function(event) {
    let year = new Date().getFullYear();
    let span = document.getElementById("this-year");
    span.append(year);
  });
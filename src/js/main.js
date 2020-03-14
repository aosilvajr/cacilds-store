$('.carousel-image-container')
.not('.slick-initialized')
.slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  prevArrow: ".carousel .carousel-btn .prev",
  nextArrow: ".carousel .carousel-btn .next"
});
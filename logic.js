$(document).ready(function () {
  const carousel = $(".owl-carousel");

  carousel.owlCarousel({
    items: 3,
    margin: 10,
    nav: true,
    startPosition: 1,
    center: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1024: { items: 4 },
    },
  });

  $("#prev").click(() => carousel.trigger("prev.owl.carousel"));
  $("#next").click(() => carousel.trigger("next.owl.carousel"));

  $(".slider-container .item-slider").each(function (index) {
    $(this).css("animation-delay", index * -11 + "s");
  });

  $(".middle").each(function (index) {
    $(this).css("animation-delay", index * -5 + "s");
  });

  $(".middle.2").each(function (index) {
    $(this).css("animation-delay", index * -4 + "s");
  });
});

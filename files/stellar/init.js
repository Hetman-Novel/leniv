$(function() {

   var ratio = $(window).width() > 576 ? 0.35 : 0.60; // ПК - 0.35, мобилка - 0.15
   var offset = $(window).width() > 576 ? 130 : 80; // ПК - 0.35, мобилка - 0.15

   $('.why-us__wrap-bg').attr('data-stellar-ratio', ratio);
   $('.why-us__wrap-bg').attr('data-stellar-vertical-offset', offset);

   $('.about-us__wrap-bg').attr('data-stellar-ratio', ratio);
   $('.about-us__wrap-bg').attr('data-stellar-vertical-offset', offset);

   $.stellar({
      horizontalScrolling: false,
      verticalOffset: 20,
      responsive: true
   });
});
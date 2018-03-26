$(document).ready(function(){
  // this is js slider home and village
  $('.item-home').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 14000,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
  })
  .on('beforeChange', function(event, slick, currentSlide, nextSlide){
    jQuery('.item-slider.slick-active .bg-slider').addClass('animation-bg');
    jQuery('.slick-active .bg-slider').removeClass('animation-bg');
    jQuery('.item-slider.slick-active .title-sliderhome ').addClass('show');
    jQuery('.slick-active .title-sliderhome').removeClass('show');
    jQuery('.item-slider-villas.slick-active .thevillas-slider').addClass('animation-bg');
    jQuery('.slick-active .thevillas-slider').removeClass('animation-bg');
    jQuery('.item-slider-villas.slick-active .title-slidervillas').addClass('show');
    jQuery('.slick-active .title-slidervillas').removeClass('show');
    jQuery('.item-slider-villas.slick-active .title-slider-living').addClass('show');
    jQuery('.slick-active .title-slider-living').removeClass('show');
  })
  .on('afterChange', function(event, slick, currentSlide, nextSlide){
    jQuery('.item-slider.slick-active .bg-slider').addClass('animation-bg');
    jQuery('.item-slider.slick-active .title-sliderhome').addClass('show');
    jQuery('.item-slider-villas.slick-active .thevillas-slider').addClass('animation-bg');
    jQuery('.item-slider-villas.slick-active .title-slidervillas').addClass('show');
    jQuery('.item-slider-villas.slick-active .title-slider-living').addClass('show');
  });

  // this is slide gallery detail
  $('.body-bg').slick({
    prevArrow: '.next-prev .left',
		nextArrow: '.next-prev .right',
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    asNavFor: '.body-img',
  });
  $('.body-img').slick({
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.body-bg',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    arrows: false,
  });

  // this is js menu
  $(".icon-menu").click(function(){
    if($(".content-menu").slideToggle("slow")){
      $('.btn-menu').toggleClass('icon-close');
      $('html').toggleClass('fl-body');
    }
  });

});

$( window ).on('load', function() {
  $(".preload").addClass('loaded');
  $(".slick-active .title-sliderhome").addClass("show");
  $(".slick-active .bg-slider").addClass("animation-bg");
  $(".slick-active .thevillas-slider").addClass("animation-bg");
  $(".slick-active .title-slidervillas").addClass("show");
  $(".body-gallery").addClass("show");
});

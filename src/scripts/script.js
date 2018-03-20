$(document).ready(function(){
  $('.item-home').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: true,
    arrows: false,
    autoplaySpeed: 2000,
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
  // this is js gmap3
  // this is js menu
  $(".icon-menu").click(function(){
    $(".content-menu").slideDown("slow");
    $("body").css("overflow", "hidden");
  });
  $(".close").click(function(){
    $(".content-menu").slideUp("slow");
    $("body").css("overflow", "visible");
  });
});

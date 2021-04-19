//contact
$(document).ready(function () {

  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc96RlDWDhC2Y9vIcCZ2bKuXCXiSfM38Lcr476et6lpfRD--Q/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".form-item__submit").fadeOut();
          //window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });
});


$(function(){

  //ハンバーガーメニュー

  $(".burger-btn").click(function(){

    $(".bar, .header-nav__sp, .bar").toggleClass("open");
    $("body").toggleClass("noscroll");

      $("a[href^=#]").click(function() {
        $(".bar, .header-nav__sp, .bar").removeClass("open");
        $("body").removeClass("noscroll");
      })

  });



  // アコーディオン
  $(".jsAccordionTitle").on("click",function(){
    if($(this).next().hasClass("is-open")) {
      $(this).next().removeClass("is-open");
    } else {
      $(this).next().addClass("is-open");
    }
  });

  //スムーススクロール
  $("a[href^=#]:not([href=#])").click(function(){

    var target = $($(this).attr("href")).offset().top;

    target -= 120;

    $("html, body").animate({
      scrollTop: target
    },500); 

     return false
  });

  //Swiper
  var swiper = new Swiper(".swiper-container", {

    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    autoplay: {
    delay: 5000,
    disableOnInteraction: true
    },  
    breakpoints:{
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 3.7,
        spaceBetween: 56,
      }
    }
  });

  
  //アニメーション
  AOS.init( {
    duration: 700,
    once: true,
  });

});

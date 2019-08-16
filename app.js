$(function() {
    /* Fixed header */
    let header = $("#header");
    let intro = $("#intro");
    let scrollPos = $(window).scrollTop();
    let introH = intro.innerHeight();
    let nav= $("#nav");
    let navToggle= $("#navToggle");

    checkScroll(scrollPos,introH);

    $(window).on("scroll load resize", function () {
        let introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();


        checkScroll(scrollPos,introH);

    });

    function checkScroll(scrollPos,introH) {
           if (scrollPos > introH ){
                header.addClass("fixed");
            }else {
                header.removeClass("fixed");
            }
        }

    /* smooth scroll */
    $("[data-scroll]").on("click", function(event){
         event.preventDefault();// Отменяет стандартное поведение при клике на ссылку.

         let elementid = $(this).data('scroll');
         let elementOffSet = $(elementid).offset().top;

        nav.removeClass("show");

        $("html,body").animate({
            scrollTop:elementOffSet - 80
        }, 600);
    });


    /*nav Toggle*/
    navToggle.on("click",function(event){

        event.preventDefault();
        nav.toggleClass("show");
    });

    /*reviewsSlider https://kenwheeler.github.io/slick/ */
     let slider = $("#reviewsSlider");

      slider.slick({
      infinite: true,//бесконечно
      slidesToShow: 1,//Сколько мы будем показывать слайдов
      slidesToScroll: 1,//Сколько будем показывать слайдов при скролле
      fade:true, //затемнение текста (отзывов)
      arrows:false, //Убераем Кнопки
      dots:true,

});

});

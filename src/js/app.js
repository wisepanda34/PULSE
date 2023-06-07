import * as flsFunctions from "./modules/functions.js";
// import Swiper from "swiper";

flsFunctions.isWebp();
// Navigation, Pagination

const slider = document.querySelector('.carousel__slider');

let mySlider = new Swiper(slider, {

    loop: true,
    lazy: {
        loadPrevNext: true,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },

    // slidesPerGroup: 2,
     //slideToClickedSlide: true,
    //centeredSlides: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //     delay: 5000,
    // },
});


$(document).ready(function () {

    //==============Smooth scroll and pageup=================
    $(window).scroll(function () {
        if($(this).scrollTop()>1600){
            $('.pageup').fadeIn();
        }else $('.pageup').fadeOut()
    });
    $("a[href^='#']").click(function () {
       const _href=$(this).attr("href");
       $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
       return false;
    });

//=====================ТАБЫ=========================
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    // ============Modal=================

    $('[data-modal=consultation]').on('click', function () {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function () {
        $('.overlay, #consultation,#order,#thanks').fadeOut('slow');
    });


   $('.btn_mini').each(function (i) {
        $(this).on('click', function () {
            // в модалку '#order в описание  .modal__descr' вставляем вытянутое название из карточки товара
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });
});
    //Валидация форм

    // function validateForm(form) {
    //     $(form).validate();
    // }
    // validateForm('#consultation-form');
    // validateForm('#consultation');
    // validateForm('#order');

    // ======маска для ввода тел.номера, не подключен плагин===========

    // $('input[name=phone]').mask("+38 (999) 999-99-99");

    //====== отправка данных из формы, ее закрытие и очистка, вывод '.overlay и #thanks'; не подключен плагин======

    // $('form').submit(function (e) {
    //     e.preventDefault();
    //     $.ajax({
    //         type: "POST",
    //         url: "mailer/smart.php",
    //         data: $(this).serialize(),
    //     }).done(function () {
    //         $(this).find("input").val("");
    //         $('#consultation,#order').fadeOut();
    //         $('.overlay,#thanks').fadeIn('slow');
    //         $('form').trigger('reset');
    //     });
    //     return false;
    // });








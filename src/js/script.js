// const hamburger = document.querySelector('.hamburger'),
//     menu = document.querySelector('.header__nav'),
//     closeElem = document.querySelector('.header__nav__close');

// hamburger.addEventListener('click', () => {
//     menu.classList.add('active');
// });

// closeElem.addEventListener('click', () => {
//     menu.classList.remove('active');
// });


window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__nav'),
        menuItem = document.querySelectorAll('.header__link'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__nav_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__nav_active');
        })
    })
})

const slider = tns({
    container: '.carousel__inner',
    items: 3,
    slideBy: 1,

    autoplay: false,
    controls: false,
    nav: false,

    responsive: {
        320: {
            nav: true,
            gutter: 5,
            items: 1
        },
        769: {
            nav: false,
            gutter: 10,
            items: 3
        },
        900: {
            items: 3
        }
    }
});

document.querySelector('.prev').addEventListener('click', function () {
    slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', function () {
    slider.goTo('next');
});

(function ($) {
    $(function () {

        // $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        //     $(this)
        //         .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        //         .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        // });

        // $('.catalog-item__link').each(function (i) {
        //     $(this).on('click', function (e) {
        //         e.preventDefault();
        //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        //     });
        // })

        // $('.catalog-item__back').each(function (i) {
        //     $(this).on('click', function (e) {
        //         e.preventDefault();
        //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        //     });
        // })

        // function toggleSlide(item) {
        //     $(item).each(function (i) {
        //         $(this).on('click', function (e) {
        //             e.preventDefault();
        //             $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
        //             $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        //         })
        //     });
        // };

        // toggleSlide('.catalog-item__link');
        // toggleSlide('.catalog-item__back');

        //modal

        $('[data-modal=consultation]').on('click', function () {
            $('.overLay, #consultation').fadeIn('slow');
        });
        $('.modal__close').on('click', function () {
            $('.overLay, #consultation, #order, #thanks').fadeOut('slow');
        });

        $('.button_mini').each(function (i) {
            $(this).on('click', function () {
                $('#order .modal__descr').text($('.prices__item-title').eq(i).text());
                $('.overLay, #order').fadeIn('slow');
            });
        });

        function valideForms(form) {
            $(form).validate({
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    phone: "required",
                    email: {
                        required: true,
                        email: true
                    },

                    text: {
                        required: true,
                        minlength: 10
                    },
                },
                messages: {
                    name: {
                        required: "Будь ласка введіть своє ім'я",
                        minlength: jQuery.validator.format("Введіть як мінімум {0} символа")
                    },
                    phone: "Будь ласка введіть свій номер телефону",
                    email: {
                        required: "Будь ласка введіть свою пошту",
                        email: "Не правильно введена поштова адреса"
                    },
                    text: "Будь ласка введіть як мінімум 10 символів",
                }
            });
        }

        valideForms('#consultation-form');
        valideForms('#consultation form');
        valideForms('#question form');
        valideForms('#order form');

        $('input[name=phone]').mask("+38 (999) 999-99-99");



        // $('form').submit(function (e) {
        //     e.preventDefault();

        //     if (!$(this).valid()) {
        //         return;
        //     };

        //     $.ajax({
        //         type: "POST",
        //         url: "mailer/smart.php",
        //         data: $(this).serialize()
        //     }).done(function () {
        //         $(this).find("input").val("");
        //         $('#consultation, #order').fadeOut();
        //         $('.overLay, #thanks').fadeIn('slow');

        //         $('form').trigger('reset');
        //     });
        //     return false;
        // });
        $(window).scroll(function () {
            if ($(this).scrollTop() > 1600) {
                $('.pageup').fadeIn();
            } else {
                $('.pageup').fadeOut();
            }
        });

        $("a[href^='#']").click(function () {
            const _href = $(this).attr("href");
            $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
            return false;
        });

        new WOW().init();
    });
})(jQuery);



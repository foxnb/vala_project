$(function () {
    function validateForms(form) {
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
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                    required: "Пожалуйста, введите свою почту",
                    email: "Неправильно введен адрес почты"
                }
            }
        });
    };

    validateForms('#consultation-form');


    $('input[name=phone]').mask("+7 (999) 999-99-99");

    // $('form').submit(function (e) {
    //     e.preventDefault();
    //     $.ajax({
    //         type: "POST",
    //         url: "mailer/smart.php",
    //         data: $(this).serialize()
    //     }).done(function () {
    //         $(this).find("input").val("");
    //         // $('#consultation, #order').fadeOut();
    //         // // $('.overlay, #thanks').fadeIn('slow');

    //         $('form').trigger('reset');
    //     });
    //     return false;
    // });

    // $(window).scroll(function () {
    //     if ($(this).scrollTop() > 1600) {
    //         $('.pageup').fadeIn();
    //     } else {
    //         $('.pageup').fadeOut();
    //     }
    // });

    // $("a[href^='#']").click(function () {
    //     const _href = $(this).attr("href");
    //     $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    //     return false;
    // });

    const burger = document.querySelector('.promo_header_burger'),
        panel = document.querySelector('.panel'),
        closeElem = document.querySelector('.panel_close');

    burger.addEventListener('click', () => {
        panel.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
        panel.classList.remove('active');
    });
});



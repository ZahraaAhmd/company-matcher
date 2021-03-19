$(".cards-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="slick-prev"><i class="fas fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="fas fa-angle-right"></i></button>',

    responsive: [{
            breakpoint: 992,
            settings: {
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                prevArrow: '<button class="slick-prev"><i class="fas fa-angle-left"></i></button>',
                nextArrow: '<button class="slick-next"><i class="fas fa-angle-right"></i></button>',

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<button class="slick-prev"><i class="fas fa-angle-left"></i></button>',
                nextArrow: '<button class="slick-next"><i class="fas fa-angle-right"></i></button>',

            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<button class="slick-prev"><i class="fas fa-angle-left"></i></button>',
                nextArrow: '<button class="slick-next"><i class="fas fa-angle-right"></i></button>',

            }
        }
    ]
});
/**start doctors slider settings **/
$('.slider-for').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },

        {
            breakpoint: 400,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
/**start doctor info slider settings **/
$('.calander-slider').slick({
    /*autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,*/
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.doctor-card-slider'
});
$('.doctor-card-slider').slick({
    /* autoplay: true,
     autoplaySpeed: 2000,
     infinite: true,*/
    slidesToShow: 12,
    slidesToScroll: 1,
    asNavFor: '.calander-slider',
    dots: false,
    arrows: false,
    focusOnSelect: true,
    responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true
            }
        }
    ]
});
$(document).ready(function() {

    /** forms steps setting **/
    /*** add steps bar ***/
    /*  let stepsNum = $(".steps").length;
      for (let num = 1; num <= stepsNum; num++) {
          $(".steps .form-steps").append('<div class="step"></div>');
      }*/
    $(".form-steps .step:first-child").addClass("active");
    /** next and prev steps **/
    $(".steps").hide();
    $("#step1").show();
    let i = 2;
    $(".steps form,.register-form form,#verify-modal form,form.appoitment").submit(function(e) {
        e.preventDefault();
    });
    $(".steps .next-step").click(function() {
        $(".steps").hide();
        $(this).parents(".steps").next().show();
        /*  $(".form-steps .step:nth-child(" + i + ")").addClass("active");
          i = i + 1;*/
    });
    $(".steps .prev-step").click(function() {
        $(".steps").hide();
        $(this).parents(".steps").prev().show();
        /*  i = i - 1;
          $(".form-steps .step:nth-child(" + i + ")").removeClass("active");*/
    });
    /** register modal settings **/

    $("#verify-modal form .btn").click(function() {
        $("#verify-modal,.modal-backdrop,.register-form").hide();
        $(this).parents(".modal").removeClass("show");
        $(this).parents(".modal").removeClass("show");
        $(".modal-backdrop").removeClass("show");
        $("body").removeClass("modal-open");
        $("#step2").show();
    });
    $("#register-form").submit(function(e) {
        e.preventDefault();
    });
    /**radio button show&hide settings **/
    $(".visitor-info").hide();
    $("input[name$='visit-user']").click(function() {
        var test = $(this).val();
        if (test === "others") {
            $("#" + test).show();
        } else {
            $(".visitor-info").hide();
        }

    });
    if ($(window).width() > 992) {
        $(window).scroll(function() {
            var windscroll = $(window).scrollTop();
            if (windscroll > 0) {
                $('.doctor-info-row').each(function(i) {
                    if ($(this).position().top <= windscroll) {
                        $('.doctor-info-row').removeClass("active");
                        $(this).removeClass("collapsed-block");
                        $(this).addClass("active");
                    } else {
                        $(this).addClass("collapsed-block");
                        $(this).removeClass("active");
                    }
                });

            } else {

                $('.doctor-info-row:first-child').addClass("active");
            }
            if ($(window).scrollTop() < 120) {
                $('.doctor-info-row:first-child').addClass("active");
                $('.doctor-info-row:first-child').removeClass("collapsed-block");
            }
        });
    }
    if ($(window).width() < 992) {
        $('.doctor-info-row').removeClass("active");
        $('.doctor-info-row').addClass("collapsed-block");
        $(".doctor-info .doctor-card .collapse").removeClass("show");
    }
    $(".block-collapsed-btn").click(function() {
        $('.doctor-info-row').removeClass("active");
        $('.doctor-info-row').addClass("collapsed-block");
        $(this).parents(".doctor-info-row").addClass("active");
        $(this).parents(".doctor-info-row").removeClass("collapsed-block");
        $(".doctor-info-row.collapsed-block .block-collapsed-btn").show();
        $(".doctor-info-row.active .block-collapsed-btn").hide();
    });

    /***menu as dropdown on small screens ***/
    // DOM ready
    $(function() {

        // Create the dropdown base
        $('<div class="dropdown" />').appendTo('.left-menu');
        // Create default option 'Go to...'
        $('<a />', {
            'class': 'btn btn-secondary dropdown-toggle',
            'herf': '#',
            'text': 'Go to...',
            'data-toggle': 'dropdown',
            'aria-haspopup': "true",
            'aria-expanded': "false",
            'role': "button",
            'id': "dropdownMenuLink"
        }).appendTo('.left-menu .dropdown');

        $('<div class="dropdown-menu" class="dropdown-menu" aria-labelledby="dropdownMenuLink"/>').appendTo('.dropdown');

        // Populate dropdown with menu items
        $('.left-menu a').each(function() {
            var el = $(this);
            $('<a />', {
                'href': el.attr('href'),
                'text': el.text(),
                'class': "dropdown-item " + el.parent().attr('class')
            }).appendTo('.left-menu .dropdown-menu');
        });

        // To make dropdown actually work
        // To make more unobtrusive: https://css-tricks.com/4064-unobtrusive-page-changer/
        $('.left-menu div a').change(function() {
            window.location = $(this).find('a:focus').attr('href');
        });
        var text1 = $('.left-menu li.active').text();
        $(".left-menu .dropdown-toggle").text(text1);
    });
    $(".zeyara-dashboard .dash-content .content-block .accordion .card  .btn-link").html('Show more <i class="fas fa-angle-down"></i>');
    $(".zeyara-dashboard .dash-content .content-block .accordion .card  .btn-link").click(function() {
        $(this).html(function(i, v) {
            return v === 'Show more <i class="fas fa-angle-down"></i>' ? 'Show less <i class="fas fa-angle-down"></i>' : 'Show more <i class="fas fa-angle-down"></i>'
        })
    });
    $(".added-medic .added .remove-block").click(function() {
        $(this).parent(".added").remove();
    })
});
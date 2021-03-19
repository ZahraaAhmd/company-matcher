$(".opinion-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 3,

    responsive: [{
            breakpoint: 1025,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
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
$(".packages-slider").slick({
    dots: false,
    arrows: false,
    slidesToShow: 4,

    responsive: [{
            breakpoint: 1200,
            settings: {
                /*   centerMode: true,
                  centerPadding: '80px', */
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
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

$(document).ready(function() {
    $(".event-preview .btn").on('click', function() {
        $(this).toggleClass('grid-icon');
        $(".event-list .row").toggleClass('grid-block');
    })
});
/*** start upload image js****/
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('.image-upload-wrap').hide();
            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();
            $('.image-title').html(input.files[0].name);
        };

        reader.readAsDataURL(input.files[0]);

    } else {
        removeUpload();
    }
}

function removeUpload() {
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
}
$('.image-upload-wrap').bind('dragover', function() {
    $('.image-upload-wrap').addClass('image-dropping');
});
$('.image-upload-wrap').bind('dragleave', function() {
    $('.image-upload-wrap').removeClass('image-dropping');
});
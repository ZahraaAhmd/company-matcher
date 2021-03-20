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


/****creditcard&cvc&date input ***** */

let ccNumberInput = document.querySelector('.cc-number-input'),
    ccNumberPattern = /^\d{0,16}$/g,
    ccNumberSeparator = " ",
    ccNumberInputOldValue,
    ccNumberInputOldCursor,

    ccExpiryInput = document.querySelector('.cc-expiry-input'),
    ccExpiryPattern = /^\d{0,4}$/g,
    ccExpirySeparator = "/",
    ccExpiryInputOldValue,
    ccExpiryInputOldCursor,

    ccCVCInput = document.querySelector('.cc-cvc-input'),
    ccCVCPattern = /^\d{0,3}$/g,

    mask = (value, limit, separator) => {
        var output = [];
        for (let i = 0; i < value.length; i++) {
            if (i !== 0 && i % limit === 0) {
                output.push(separator);
            }

            output.push(value[i]);
        }

        return output.join("");
    },
    unmask = (value) => value.replace(/[^\d]/g, ''),
    checkSeparator = (position, interval) => Math.floor(position / (interval + 1)),
    ccNumberInputKeyDownHandler = (e) => {
        let el = e.target;
        ccNumberInputOldValue = el.value;
        ccNumberInputOldCursor = el.selectionEnd;
    },
    ccNumberInputInputHandler = (e) => {
        let el = e.target,
            newValue = unmask(el.value),
            newCursorPosition;

        if (newValue.match(ccNumberPattern)) {
            newValue = mask(newValue, 4, ccNumberSeparator);

            newCursorPosition =
                ccNumberInputOldCursor - checkSeparator(ccNumberInputOldCursor, 4) +
                checkSeparator(ccNumberInputOldCursor + (newValue.length - ccNumberInputOldValue.length), 4) +
                (unmask(newValue).length - unmask(ccNumberInputOldValue).length);

            el.value = (newValue !== "") ? newValue : "";
        } else {
            el.value = ccNumberInputOldValue;
            newCursorPosition = ccNumberInputOldCursor;
        }

        el.setSelectionRange(newCursorPosition, newCursorPosition);

        highlightCC(el.value);
    },
    highlightCC = (ccValue) => {
        let ccCardType = '',
            ccCardTypePatterns = {
                amex: /^3/,
                visa: /^4/,
                mastercard: /^5/,
                disc: /^6/,

                genric: /(^1|^2|^7|^8|^9|^0)/,
            };

        for (const cardType in ccCardTypePatterns) {
            if (ccCardTypePatterns[cardType].test(ccValue)) {
                ccCardType = cardType;
                break;
            }
        }

        let activeCC = document.querySelector('.cc-types__img--active'),
            newActiveCC = document.querySelector(`.cc-types__img--${ccCardType}`);

        if (activeCC) activeCC.classList.remove('cc-types__img--active');
        if (newActiveCC) newActiveCC.classList.add('cc-types__img--active');
    },
    ccExpiryInputKeyDownHandler = (e) => {
        let el = e.target;
        ccExpiryInputOldValue = el.value;
        ccExpiryInputOldCursor = el.selectionEnd;
    },
    ccExpiryInputInputHandler = (e) => {
        let el = e.target,
            newValue = el.value;

        newValue = unmask(newValue);
        if (newValue.match(ccExpiryPattern)) {
            newValue = mask(newValue, 2, ccExpirySeparator);
            el.value = newValue;
        } else {
            el.value = ccExpiryInputOldValue;
        }
    };

ccNumberInput.addEventListener('keydown', ccNumberInputKeyDownHandler);
ccNumberInput.addEventListener('input', ccNumberInputInputHandler);

ccExpiryInput.addEventListener('keydown', ccExpiryInputKeyDownHandler);
ccExpiryInput.addEventListener('input', ccExpiryInputInputHandler);
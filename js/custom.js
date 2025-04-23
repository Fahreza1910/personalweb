
$(document).ready(function () {
    // modalhoam
    var $modalhoam1 = $('#modalhoam1');


    $('#hoam1, .detail-hoam1, .imgklikhoam1').on('click', function () {
        $modalhoam1.show();
    });

    // modal-hoam2
    var $modalhoam2 = $('#modalhoam2');
    $('#hoam2, .detail-hoam2, .imgklikhoam2').on('click', function () {
        $modalhoam2.show();
    });
    $('.detail-hoam2').on('click', function () {
        $modalhoam2.show();
    });

    // modal-hoam3
    var $modalhoam3 = $('#modalhoam3');
    $('#hoam3, .detail-hoam3, .imgklikhoam3').on('click', function () {
        $modalhoam3.show();
    });
    var $modalhoam4 = $('#modalhoam4');
    $('#hoam4, .detail-hoam4, .imgklikhoam4').on('click', function () {
        $modalhoam4.show();
    });

    $('.close-hoam').on('click', function () {
        $modalhoam1.hide();
        $modalhoam2.hide();
        $modalhoam3.hide();
        $modalhoam4.hide();
    });
    $(window).on('click', function (e) {
        if ($(e.target).is($modalhoam1)) {
            $modalhoam1.hide();
            $modalhoam2.hide();
            $modalhoam3.hide();
            $modalhoam4.hide();
        }
    });
    // end

    // modal-kpl
    var $modalkpl1 = $('#modalkpl1');


    $('.plus-button1, .detail-link1, .imgklik1').on('click', function () {
        $modalkpl1.show();
    });

    // modal-kpl2
    var $modalkpl2 = $('#modalkpl2');
    $('.plus-button2, .detail-link2, .imgklik2').on('click', function () {
        $modalkpl2.show();
    });
    $('.detail-link2').on('click', function () {
        $modalkpl2.show();
    });

    // modal-kpl3
    var $modalkpl3 = $('#modalkpl3');
    $('.plus-button3, .detail-link3, .imgklik3').on('click', function () {
        $modalkpl3.show();
    });

    $('.close-kpl').on('click', function () {
        $modalkpl1.hide();
        $modalkpl2.hide();
        $modalkpl3.hide();
    });
    $(window).on('click', function (e) {
        if ($(e.target).is($modalkpl1)) {
            $modalkpl1.hide();
            $modalkpl2.hide();
            $modalkpl3.hide();
        }
    });




    // modal-kpl2


});





$(document).ready(function () {
    const swiper1 = new Swiper('#test', {
        loop: false,
        speed: 3000,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 1,
        spaceBetween: 20,
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });

    // Autoplay manual: geser setiap 5 detik
    let currentSlide = 0;
    const slideCount = swiper1.slides.length;

    setInterval(() => {
        currentSlide++;

        if (currentSlide >= slideCount) {
            currentSlide = 0;
        }

        swiper1.slideTo(currentSlide);
    }, 5000); // 5 detik — ubah sesuai kebutuhan

    // Tes apakah tombol navigasi terdeteksi
    console.log($('.swiper-button-next')); // jQuery version
});


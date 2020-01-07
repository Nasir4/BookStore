$(document).ready(function () {

   $('.hamburger-menu').click(function(){
       $('.navigation').toggleClass('change')
   })

    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    })

    $(window).scroll(function () {
        let position = $(this).scrollTop();
        // console.log(position);
        if (position >= 350) {
            $('.gallery').addClass('change')
        } else {
            $('.gallery').removeClass('change')
        }
    })

    $('.writers-accordion').click(function (e) {
        if (e.target.id.split('-')[0] === 'button') {
            $('#book-1').attr('src', '/img/writers/' + e.target.id.split('-')[1] + '-book1.jpg');
            $('#book-2').attr('src', '/img/writers/' + e.target.id.split('-')[1] + '-book2.jpg');

        }
    })
})
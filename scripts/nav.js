(function ($, router) {
    router('go/:slide', function (slide) {
        $('.slide.current').removeClass('current');
        $('#' + slide).addClass('current');
        $('[href="#home"]').show();
    });
}(jQuery, routie));
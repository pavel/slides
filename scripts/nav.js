(function ($, router) {
    router('go/:slide', function (slide) {
        $('.slide.current').removeClass('current');
        $('#' + slide).addClass('current');
    });
}(jQuery, routie));
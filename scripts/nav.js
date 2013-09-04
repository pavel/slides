(function ($, router) {
    router('go/:slide', function (slide) {
        var slide = $('#' + slide);
        $('.slide.current').removeClass('current');
        slide.addClass('current');
        if (slide.next('.slide').length) {
            $('#next').removeClass('disabled');
        } else {
            $('#next').addClass('disabled');
        }
        if (slide.prev('.slide').length) {
            $('#prev').removeClass('disabled');
        } else {
            $('#prev').addClass('disabled');
        }
    });
    router('', function () {
        router('go/home');
    });
    function next() {
        var current = $('.slide.current'),
            next = current.next('.slide');
        if (next.length) router('go/' + next.attr('id'));
    }
    function prev() {
        var current = $('.slide.current'),
            prev = current.prev('.slide');
        if (prev.length) router('go/' + prev.attr('id'));
    }
    function handler(el) {
        return function () { el.trigger('click'); };
    }
    $('footer').on('click', '#next:not(".disabled")', next);
    $('footer').on('click', '#prev:not(".disabled")', prev);
    Mousetrap.bind('right', handler($('#next')));
    Mousetrap.bind('left', handler($('#prev')));
    Mousetrap.bind('ctrl+alt+h', function () { router('go/home'); });
}(jQuery, routie));
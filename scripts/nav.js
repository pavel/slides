(function ($, router) {
    var next, prev,
        current = $('.slide.current'),
        next_btn = $('#next'),
        prev_btn = $('#prev');
    router('go/:slide', function (slide) {
        var slide = $('#' + slide);
        current.removeClass('current');
        prev = slide.prev('.slide');
        current = slide.addClass('current');
        next = slide.next('.slide');
        if (next.length) {
            next_btn.removeClass('disabled');
        } else {
            next_btn.addClass('disabled');
        }
        if (prev.length) {
            prev_btn.removeClass('disabled');
        } else {
            prev_btn.addClass('disabled');
        }
    });
    router('', function () {
        router('go/home');
    });
    $('footer').on('click', '#next:not(".disabled")', function () { router('go/' + next.attr('id')); });
    $('footer').on('click', '#prev:not(".disabled")', function () { router('go/' + prev.attr('id')); });
    Mousetrap.bind('right', function () { next_btn.trigger('click'); });
    Mousetrap.bind('left', function () { prev_btn.trigger('click'); });
    Mousetrap.bind('ctrl+alt+h', function () { router('go/home'); });
}(jQuery, routie));

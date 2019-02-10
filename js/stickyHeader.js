$(document).ready(function () {
    var fixed_header = $('#fixedheader');

    $(window).on('scroll', function () {
        var proyectos_offset_top = $('#proyectos').offset().top;

        if ($(window).scrollTop() >= proyectos_offset_top) {
            fixed_header.css('margin-top', 0);
        } else if ($(window).scrollTop() <= proyectos_offset_top / 2) {
            fixed_header.css('margin-top', '-68px');
        }
    })
});
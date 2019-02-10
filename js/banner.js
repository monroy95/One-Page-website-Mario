$(document).ready(function () {
    var banner = $('#banner');

    // Verifinir altura dinamica para el banner
    function altura_banner() {
        var vpaltura = $(window).height();
        banner.css('height', vpaltura);
    }

    altura_banner();

    // Vuelve a calcular cuando se cambia el tamaño de la ventana
    $(window).resize(altura_banner);
});
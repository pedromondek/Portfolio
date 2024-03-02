let menu = $('.menu');
let menuLuz = $('#menuLuz');
let terminal = $('.terminal');
let underline = $('#terminalUnder');
let textoMenu = $('.menu h2');
let imgMenu = $('.menu img');
let nomeJP = $('#nomeJP');
let nomeEN = $('#nomeEN');

$(imgMenu).css('transition','3s');

$(menu).on('mouseover', function() {   
    $(this).css('width', '15vw');
    $(this).css('transition', 'width 0.8s');
    $(menuLuz).css('width', '9vw');
    $(menuLuz).css('transition', 'width 0.8s');
    $(textoMenu).css('opacity', '1');
    $(textoMenu).css('transition', '3s');
    $(imgMenu).css('filter', 'brightness(0) invert(1) drop-shadow(0 0 8px #ffffff)');
});

$(menu).on('mouseout', function() {
    $(this).width('5.5%');
    $(this).css('transition', 'width 2s');
    $(menuLuz).width('65px');
    $(menuLuz).css('transition', 'width 2s');
    $(textoMenu).css('opacity', '0');
    $(textoMenu).css('transition', '0.6s');
    $(imgMenu).css('filter', 'brightness(0) invert(0.65)');
});

$(nomeJP).ready(function() {
    setTimeout(function() {
        $(nomeJP).css('display', 'none');
        // animação glitch maior e lenta
        $(nomeEN).css('display', 'block');
        // animação glitch after e before apenas
    }, 10000);
})
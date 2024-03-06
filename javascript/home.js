let menu = $('.menu');
let menuLuz = $('#menuLuz');
let terminal = $('.terminal');
let underline = $('#terminalUnder');
let textoMenu = $('.menu h2');
let imgMenu = $('.menu img');
let nomeJP = $('#nomeJP');
let nomeEN = $('#nomeEN');


// menu
$(imgMenu).css('transition','3s');

// CRIAR ANIMAÇÃO DO MENU DESCENDO

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


// welcome
$(nomeJP).ready(function() {
    $(nomeJP).animate({
        opacity: "1",
    },2500);
    setTimeout(function() {
        $(nomeJP).hide();
        $(nomeEN).css('transition', '3s');
        $(nomeEN).show();
        $(nomeEN).css('animation', 'glitch 2s reverse, glitchOpacity 1s, glitchFont 2s, glitchMovement 3s reverse');
    }, 6500);

    let check = false;
    
    setTimeout(function () {
        setInterval(function() {
            if (check == false) {
                $(nomeEN).removeClass('glitchClass');
                check = true;
            } else {
                $(nomeEN).css('animation', '');
                $(nomeEN).addClass('glitchClass');
                check = false;
            }
        }, 2000);
    }, 3500);
});
let menu = $('.menu');
let menuLuz = $('#menuLuz');
let menuImgs = $('.menuImgs');

let textoMenu = $('.menu h2');
let imgMenu = $('.menu img');

let terminal = $('#terminal');
let terminalIcon = $('.terminalIcon');
let underline = $('#terminalUnder');

let nomeJP = $('#nomeJP');
let nomeEN = $('#nomeEN');

let cargoJP = $('#cargoJP');

let imgFundo1 = $('.fundo');
let imgFundo2 = $('.fundoBrilho');

let setaAbaixo = $('.setaAbaixo');


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


// load
/// menu
$(menuLuz).animate({
    top: '+=1000',
    opacity: '1'
},2500);
$(menu).animate({
    top: '+=1000',
    opacity: '100%'
},2000);
$(menuImgs).show(1250);
$(menuImgs).fadeTo(1500,1);

/// terminal icon
$(terminal).animate({
    opacity: "1"
},3000);
$(underline).animate({
    opacity: "1"
},4000);

/// imagem fundo
$(imgFundo1).animate({opacity:1}, 4500);

/// down scroll
$(setaAbaixo).animate({opacity:1},4500);

/// nome
$(nomeJP).ready(function() {
    $(nomeJP).animate({
        opacity: "1"
    },5000);
    setTimeout(function() {
        $(nomeJP).hide();
        $(nomeEN).css('transition', '3s');
        $(nomeEN).show();
        $(nomeEN).css('animation', 'glitch 2s reverse, glitchOpacity 1s, glitchFont 2s, glitchMovement 3s reverse');
    }, 9000);

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
    }, 6000);
});

/// cargo
setTimeout(function() {
    $(cargoJP).fadeTo(4000,1);
},450);
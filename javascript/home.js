let menu = $('.menu');
let menuLuz = $('#menuLuz');
let menuImgs = $('.menuImgs');

let textoMenu = $('.menu h2');
let textoMenuCursor = $('.menu h2::before');
let imgMenu = $('.menu img');

let terminal = $('#terminal');
let terminalIcon = $('.terminalIcon');
let underline = $('#terminalUnder');

let nomeJP = $('#nomeJP');
let nomeEN = $('#nomeEN');

let cargoJP = $('#cargoJP');
let cargoPT = $('#cargoPT');

let roles = $('.roles');
let rolesB = $('.roles::before');

let imgFundoA = $('.fundo');
let imgFundoB = $('.fundoBrilho');

let setaAbaixo = $('.setaAbaixo');


// menu
$(imgMenu).css('transition','3s');

let checkMenu = false;

$(menu).on('mouseover', function() {   
    checkMenu = false;
    $(this).css('width', '15vw');
    $(this).css('transition', 'width 0.8s');
    $(menuLuz).css('width', '9vw');
    $(menuLuz).css('transition', 'width 0.8s');
    // $(textoMenu).css('opacity', '1');
    $(textoMenu).animate({opacity:1}, 100);
    $(textoMenu).css('animation', 'typingMenu 1s .1s steps(12)');
    $(textoMenuCursor).css('animation', 'typing 1s .1s steps(12)');
    $(imgMenu).css('filter', 'brightness(0) invert(1) drop-shadow(0 0 8px #ffffff)');
});

if(checkMenu==true) {
    $(textoMenu).css('animation', '');
    $(textoMenuCursor).css('animation', '');
    setTimeout(function() {
        $(textoMenu).css('animation', 'typingMenu 0.5s steps(12) reverse');
        $(textoMenuCursor).css('animation', 'typingMenu .5s steps(12) reverse');
    },200);
}

$(menu).on('mouseout', function() {
    checkMenu = true;
    $(this).width('5.5%');
    $(this).css('transition', 'width 2s');
    $(menuLuz).width('65px');
    $(menuLuz).css('transition', 'width 2s');
    $(textoMenu).css('transition', '0.6s');
    $(textoMenu).animate({opacity:0}, 200);
    $(imgMenu).css('filter', 'brightness(0) invert(0.65)');
});

// menu load
$(menuLuz).animate({
    top: '+=1300',
    opacity: '1'
},2500);
$(menu).animate({
    top: '+=1300',
    opacity: '100%'
},2000);
$(menuImgs).show(1250);
$(menuImgs).fadeTo(1500,1);

// terminal icon
$(terminal).animate({
    opacity: "1"
},3000);
$(underline).animate({
    opacity: "1"
},4000);

// imagem fundo
$(imgFundoA).animate({opacity:1}, 4500);

// down scroll
$(setaAbaixo).animate({opacity:1},4500);

// nome
$(nomeJP).ready(function() {
    $(nomeJP).animate({
        opacity: "1"
    },5000);
    setTimeout(function() {
        $(nomeJP).hide();
        $(nomeEN).css('transition', '3s');
        $(nomeEN).show();
        $(nomeEN).css('animation', 'glitch 2s reverse, glitchOpacity 1s, glitchFont 2s, glitchMovement 3s reverse');
    }, 5500);

    let checkName = false;
    
    setTimeout(function () {
        setInterval(function() {
            if (checkName == false) {
                $(nomeEN).removeClass('glitchClass');
                checkName = true;
            } else {
                $(nomeEN).css('animation', '');
                $(nomeEN).addClass('glitchClass');
                checkName = false;
            }
        }, 2000);
    }, 6000);
});

// cargo
setTimeout(function() {
    $(cargoJP).fadeTo(4000,1);
},450);
setTimeout(function() {
    $(cargoJP).hide();
    $(cargoPT).css('transition', '3s');
    $(cargoPT).show();
    $(cargoPT).css('animation', 'glitch 2s reverse, glitchOpacity 1s, glitchFont 2s, glitchMovement 3s reverse');
}, 6500);

let checkCargo = false;
    
setTimeout(function () {
    setInterval(function() {
        if (checkCargo == false) {
            $(cargoPT).removeClass('glitchClass');
            checkCargo = true;
        } else {
            $(cargoPT).css('animation', '');
            $(cargoPT).addClass('glitchClass');
            checkCargo = false;
        }
    }, 3000);
}, 5000);

// roles
function rolesChange() {
    $(roles).text('--web');
    setTimeout(function () {
        $(roles).text('--backend');
    }, 3150);
    setTimeout(function () {
        $(roles).text('--frontend');
    }, 6000);
    setTimeout(function () {
        $(roles).text('--fullstack');
    }, 9000);
}

setTimeout(function () {
    $(roles).fadeTo(500,1);
},9000);
setInterval(rolesChange,12000);
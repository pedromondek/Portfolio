// main menu
let menu = $('.menu');
let menuLuz = $('#menuLuz');
let menuImgs = $('.menuImgs');

let textoMenu = $('.menu h2');
let textoMenuCursor = $('.menu h2::before');
let imgMenu = $('.menu img');

// UI menu
let homeMenu = $('.home');
let aboutMenu = $('.about');
let skillsMenu = $('.skillsMenu');

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

// skills
let skillsSections = $('.skillsSections');
let skillsPlayLeft = $('#skillsPlayLeft');

let skill = $('.skill');
let skillClosedBrackets = ('.skill::after');
let skillBE = $('.backend');
let skillFE = $('.frontend');
let skillTool = $('.tools');

//footer
$(document).ready(function() {
    let today = new Date();
    $('footer a').append(' ' + today.getFullYear());
});

// menu
$(imgMenu).css('transition','3s');

$(menu).hover(function() {   
    $(this).css('transition', 'width 0.8s');
    $(menuLuz).css('transition', 'width 0.8s');

    $(this).css('width', '12vw');
    $(menuLuz).css('width', '15vw');

    $(textoMenu).css('opacity', 1);

    $(imgMenu).css('filter', 'brightness(0) invert(1) drop-shadow(0 0 8px #ffffff)');
    
    $(textoMenu).removeClass('typingMenuClose');
    $(textoMenu).addClass('typingMenuOpen');
}, function () {
    $(textoMenu).removeClass('typingMenuOpen');
    $(textoMenu).addClass('typingMenuClose');

    $(textoMenu).css('opacity', 0);

    $(this).css('transition', 'width 2s');
    $(menuLuz).css('transition', 'width 2s');

    $(this).width('65px');
    $(menuLuz).width('5.5%');

    $(imgMenu).css('filter', 'brightness(0) invert(0.65)');
    }
);

// menu load
$(menu).animate({
    top: '+=1300',
    opacity: '1'
},2500);
$(menuLuz).animate({
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
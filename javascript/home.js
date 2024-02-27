let menu = document.querySelector('.menu');
let menuLuz = document.getElementById('menuLuz');
let terminal = document.querySelector('.terminal');
let underline = document.getElementById('terminalUnder');
// let textoMenu = document.querySelectorAll('.menu h2');
let textoMenu = document.querySelector('.menu h2');
let imgMenu = document.querySelector('.menu img');

imgMenu.style.transition = '3s';

menu.addEventListener('mouseover', function() {   
    this.style.width = '15vw';
    menu.style.transition = 'width 0.8s';
    menuLuz.style.width = '10vw';
    menuLuz.style.transition = 'width 0.8s';
    textoMenu.style.opacity = '1';
    textoMenu.style.transition = '3s';
    imgMenu.style.filter = 'brightness(0) invert(1) drop-shadow(0 0 8px #ffffff)';
});
menu.addEventListener('mouseout', function() {
    this.style.width = '5.5%';
    menu.style.transition = 'width 2s';
    menuLuz.style.width = '65px';
    menuLuz.style.transition = 'width 2s';
    textoMenu.style.opacity = '0';
    textoMenu.style.transition = '0.6s';
    imgMenu.style.filter = 'brightness(0) invert(0.65)';
});

// window.addEventListener('load', function() {
//         terminal.style.left = '525px';
//         setInterval(function(){
//             underline.style.transition = 'left 5s';
//             // underline.style.left = '525px';
//         },5000);
//     });
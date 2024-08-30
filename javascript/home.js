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

    $(imgMenu).not('#iconPTBR, #iconENUS').css('filter', 'brightness(0) invert(1) drop-shadow(0 0 8px #ffffff)');
    $('.languageContainer').show();
    
    $(textoMenu).removeClass('typingMenuClose');
    $(textoMenu).addClass('typingMenuOpen');
    
    
}, function () {
    $(textoMenu).removeClass('typingMenuOpen');
    $(textoMenu).addClass('typingMenuClose');
    
    $(textoMenu).css('opacity', 0);
    
    $(this).css('transition', 'width 2s');
    $(menuLuz).css('transition', 'width 2s');
    // $('.languages, #iconPTBR, #iconENUS').css({'opacity': '0'},650);
    $('.languageContainer').hide();
    
    $(this).width('65px');
    $(menuLuz).width('5.5%');
    
    $(imgMenu).not('#iconPTBR, #iconENUS').css('filter', 'brightness(0) invert(0.65)');
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

// Carrousel Skills Types
let leftSkill = 0;
let selectedSkill = 1;
let rightSkill = 2;
let temp;
let activeSection;

function mainSectionSkill() {
    if ($(skillsSections[selectedSkill]).text() === 'Front-end') {
        skillActive = true;
        showSkill();

        $(skillBE).hide();
        $(skillTool).hide();
        $(skillFE).show();

        activeSection = 'skillFE';
    } else if ($(skillsSections[selectedSkill]).text() === 'Back-end') {
        skillActive = true;
        showSkill();
        
        $(skillFE).hide();
        $(skillTool).hide();
        $(skillBE).show();

        activeSection = 'skillBE';
    } else if($(skillsSections[selectedSkill]).text() === 'Tools') {
        skillActive = true;
        showSkill();
        
        $(skillBE).hide();
        $(skillFE).hide();
        $(skillTool).show();

        activeSection = 'skillTool';
    }
}

$('#skillsPage').ready(function() {
    mainSectionSkill();
    $('.noProjects a').hide();
    // $('.projectDetailedContainer').hide();
})


// Click Events to change main section
$(skillsSections[rightSkill]).on("click", function() {
    temp = $(skillsSections[leftSkill]).html();
    $(skillsSections[leftSkill]).html($(skillsSections[selectedSkill]).html());
    $(skillsSections[selectedSkill]).html($(skillsSections[rightSkill]).html());
    $(skillsSections[rightSkill]).html(temp);

    mainSectionSkill();
});

$(skillsPlayRight).on("click", function() {
    temp = $(skillsSections[leftSkill]).html();
    $(skillsSections[leftSkill]).html($(skillsSections[selectedSkill]).html());
    $(skillsSections[selectedSkill]).html($(skillsSections[rightSkill]).html());
    $(skillsSections[rightSkill]).html(temp);

    mainSectionSkill();
});

$(skillsSections[leftSkill]).on("click", function() {
    temp = $(skillsSections[rightSkill]).html();
    $(skillsSections[rightSkill]).html($(skillsSections[selectedSkill]).html());
    $(skillsSections[selectedSkill]).html($(skillsSections[leftSkill]).html());
    $(skillsSections[leftSkill]).html(temp);

    mainSectionSkill();
});

$(skillsPlayLeft).on("click", function() {
    temp = $(skillsSections[rightSkill]).html();
    $(skillsSections[rightSkill]).html($(skillsSections[selectedSkill]).html());
    $(skillsSections[selectedSkill]).html($(skillsSections[leftSkill]).html());
    $(skillsSections[leftSkill]).html(temp);

    mainSectionSkill();
});

// Skill Selected style
$(skillsSections[selectedSkill]).css({
    'font-size': '40px',
    'color': '#ffffff',
    'filter': 'drop-shadow(0px -2px 6px #cececeb6)',
    'border-bottom': 'solid 2px #c7244c'
});

// Skill Active
let skillOn;
let skillOff;
let skillActive = false;

// show all certificates about the skills and projects
function showSkill(tecnology, section) {
    if(activeSection === 'skillFE' || section === 0) {
        section = 0;
        skillOn = $(skillFE).index(tecnology);
        skillOff = $(skillFE).not(tecnology);
    } else if(activeSection === 'skillBE' || section === 1) {
        section = 1;
        skillOn = $(skillBE).index(tecnology);
        skillOff = $(skillBE).not(tecnology);
    } else if(activeSection === 'skillTool' || section === 1) {
        section = 2;
        skillOn = $(skillTool).index(tecnology);
        skillOff = $(skillTool).not(tecnology);
    }

    var ls = tecnology;
    ls = $(ls).clone().children().remove().end().text().trim().toLowerCase();

    if (skillActive === false) {
        skillActive = true;
        
        $('.skillsListContainer').css('opacity', '1');
        
        $(skillOff).each(function(index, element) {
            var skillOffArray = $(element).contents().filter(function () {
                return this.nodeType === 3;                
            }).text().trim();

            $('.skillsListContainer ul').append($("<li class=otherSkills>").text(skillOffArray));
        });
        
        $(skillOff).hide();
        
        if (section === 0) {
            $(skillFE).addClass('skillActive');
            $('.skillActive').find("ul").show();
        } else if(section === 1) {
            $(skillBE).addClass('skillActive');
            $('.skillActive').find("ul").show();
        } else if(section === 2) {
            $(skillTool).addClass('skillActive');
            $('.skillActive').find("ul").show();
        };
        
        $('.imgSkill').css({
            'display': 'block',
            'transform': 'translate(-2770%,40%)',
            'filter': 'brightness(100%)'
        });
       
        // DESENVOLVENDO PROJECTS RELACIONADO A SKILL
        $('.projectList').not("." + ls).hide();

        if (document.querySelectorAll('.' + ls).length < 3) {
            $('.scrollProjects').hide();
            $('.projectCard').css({
                'top': '21%',
                'height': '84%'
        });
        };

    } else {
        $('.skillsListContainer').css('opacity', '0');
        
        $(skillOff).each(function(index, element) {
            $('.skillsListContainer ul li').remove();
        });
        
        $('.imgSkill').css({
            'display': 'none',
            'transform': 'translate(0,-4.1%)',
            'filter': 'brightness(80%)'
        });
        
        if (section === 0) {
            $('.skillActive').find("ul").hide();
            $(skillFE).removeClass('skillActive');
        } else if(section === 1) {
            $('.skillActive').find("ul").hide();
            $(skillBE).removeClass('skillActive');
        } else if(section === 2) {
            $('.skillActive').find("ul").hide();
            $(skillTool).removeClass('skillActive');
        };

        $(skillOff).show();
        $('.projectList').show();
        $('.projectCard').css({
            'top': '15%',
            'height': '84%'
        });
        $('.scrollProjects').show();
        
        skillActive = false;
    };
};

$(skill).on("click", function() {
    showSkill(this);
});

// open & close certificate
var tempCertificate;

$('.courses').each(function(i,e) {
    $(e).on("click", function() {
        event.stopPropagation(); // replace later other way for event.
    
        $('.certificate').each(function(i,el) {
            var eClass = $(e).attr('class').split(' ');
            var elClass = $(el).attr('class').split(' ');

            if(eClass[1] === elClass[1]) {
                tempCertificate = el;

                $(tempCertificate).show();
                $('.certificateContainer').show();

                $('body').animate({
                    scrollTop: $('#skillsPage').offset().top
                });

                $('body').css('overflow-y', 'hidden');
            };
        });
    });
});

$('.certificateContainer').not('.certificate', '.certificateContainer').on("click", function() {
    $('.certificate').hide();
    $('.certificateContainer').hide();
    $('body').css('overflow-y', 'visible');
});

$('.skillsListContainer ul').each(function (i,element) {
    $(element).on("click", "li", function() {
        tec = $(this).text().trim();

        $(skill).each(function(i,e) {
            if ($(e).clone().find('ul').remove().end().text().trim() === tec) {
                tecnologySkill = e;
            }
        });
        
        showSkill();
        showSkill(tecnologySkill);
    });
});

// scroll-x projects
$('#scrollProjectsLeft').on("click", function() {
    $('.projectsContainer').scrollLeft($('.projectsContainer').scrollLeft() - 507);
});

$('#scrollProjectsRight').on("click", function() {
    $('.projectsContainer').scrollLeft($('.projectsContainer').scrollLeft() + 507);
});

// open & close project detailed
var tempProject;

$('.projectList').each(function(i,e) {
    $(e).on("click", function() {
        $('.certificate').each(function(i,el) { // trocar certificate por projeto descrito
            var eClass = $(e).attr('class').split(' ');
            var elClass = $(el).attr('class').split(' ');

            if(eClass[1] === elClass[1]) {
                tempProject = el;

                $(tempProject).show();
                $('.projectDetailedContainer').show();

                $('body').animate({
                    scrollTop: $('#skillsPage').offset().top // definir altura desejada
                });

                $('body').css('overflow-y', 'hidden');
            };
        });
    });
});
// modificar certificate para projeto
$('.projectDetailedContainer').not('.certificate', '.projectDetailedContainer').on("click", function() {
    $('.projectDetailedContainer').hide();
    $('body').css('overflow-y', 'visible');
});
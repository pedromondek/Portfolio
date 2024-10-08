function changeLanguage(language) {
    const translationsData = './javascript/translate.json';

    fetch(translationsData)
      .then(response => response.json())
      .then(translations => {
        const elementTranslation = translations;
        const translateElement = document.querySelectorAll('.translation');

        translateElement.forEach((index) => {
            const word = index.getAttribute('data-text');
    
            index.textContent = elementTranslation[language][word];
        });
      })
      .catch(error => console.error('Erro ao carregar o arquivo JSON:', error));

}

let activeLang;

$(document).ready(function() {
    let langNative = navigator.language || navigator.userLanguage;
    if(langNative === "pt-BR" || langNative === "pt") {
        activeLang = "ptBR";
        changeLanguage(activeLang);
        $('#containerENUS').removeClass('activeLanguage');
        $('#containerPTBR').addClass('activeLanguage');
    } else {
        activeLang = "en";
        changeLanguage(activeLang);
        $('#containerPTBR').removeClass('activeLanguage');
        $('#containerENUS').addClass('activeLanguage');
    }
});

$('.languageTitle').on("click", function() {
    if(activeLang === "ptBR") {
        activeLang = "en";
        changeLanguage(activeLang);
        $('#containerPTBR').removeClass('activeLanguage');
        $('#containerENUS').addClass('activeLanguage');
    } else {
        activeLang = "ptBR";
        changeLanguage(activeLang);
        $('#containerENUS').removeClass('activeLanguage');
        $('#containerPTBR').addClass('activeLanguage');
    }
})

$('#containerPTBR, #containerENUS').on("click", function() {
    if($(this).attr('id') === 'containerPTBR') {
        changeLanguage('ptBR');
        activeLang = 'ptBR';
        $('#containerENUS').removeClass('activeLanguage');
        $('#containerPTBR').addClass('activeLanguage');
    } else if($(this).attr('id') === 'containerENUS') {
        changeLanguage('en');
        activeLang = 'en';
        $('#containerPTBR').removeClass('activeLanguage');
        $('#containerENUS').addClass('activeLanguage');
    }
});
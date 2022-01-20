const transcriptionObj = {
    'en': {
      'skills': 'Skills',
      'portfolio': 'Portfolio',
      'video': 'Video',
      'price': 'Price',
      'contacts': 'Contacts',
      'hero-title': 'Alexa Rise',
      'hero-text': 'Save sincere emotions, romantic feelings and happy moments of life together with professional photographer Alexa Rise',
      'hire': 'Hire me',
      'skill-title-1': 'Digital photography',
      'skill-text-1': 'High-quality photos in the studio and on the nature',
      'skill-title-2': 'Video shooting',
      'skill-text-2': 'Capture your moments so that they always stay with you',
      'skill-title-3': 'Rotouch',
      'skill-text-3': 'I strive to make photography surpass reality',
      'skill-title-4': 'Audio',
      'skill-text-4': 'Professional sounds recording for video, advertising, portfolio',
      'winter': 'Winter',
      'spring': 'Spring',
      'summer': 'Summer',
      'autumn': 'Autumn',
      'price-type-1': 'Standart',
      'price-description-1-p-1': 'One location',
      'price-description-1-p-2': '120 photos in color',
      'price-description-1-p-3': '12 photos in retouch',
      'price-description-1-p-4': 'Readiness 2-3 weeks',
      'price-description-1-p-5': 'Make up, visage',
      'price-type-2': 'Premium',
      'price-description-2-p-1': 'One or two locations',
      'price-description-2-p-2': '200 photos in color',
      'price-description-2-p-3': '20 photos in retouch',
      'price-description-2-p-4': 'Readiness 1-2 weeks',
      'price-description-2-p-5': 'Make up, visage',
      'price-type-3': 'Gold',
      'price-description-3-p-1': 'Three locations or more',
      'price-description-3-p-2': '300 photos in color',
      'price-description-3-p-3': '50 photos in retouch',
      'price-description-3-p-4': 'Readiness 1 week',
      'price-description-3-p-5': 'Make up, visage, hairstyle',
      'order': 'Order shooting',
      'contact-me': 'Contact me',
      'send-message': 'Send message'
    },
    'ru': {
      'skills': 'Навыки',
      'portfolio': 'Портфолио',
      'video': 'Видео',
      'price': 'Цены',
      'contacts': 'Контакты',
      'hero-title': 'Алекса Райс',
      'hero-text': 'Сохраните искренние эмоции, романтические переживания и счастливые моменты жизни вместе с профессиональным фотографом',
      'hire': 'Пригласить',
      'skill-title-1': 'Фотография',
      'skill-text-1': 'Высококачественные фото в студии и на природе',
      'skill-title-2': 'Видеосъемка',
      'skill-text-2': 'Запечатлите лучшие моменты, чтобы они всегда оставались с вами',
      'skill-title-3': 'Ретушь',
      'skill-text-3': 'Я стремлюсь к тому, чтобы фотография превосходила реальность',
      'skill-title-4': 'Звук',
      'skill-text-4': 'Профессиональная запись звука для видео, рекламы, портфолио',
      'winter': 'Зима',
      'spring': 'Весна',
      'summer': 'Лето',
      'autumn': 'Осень',
      'price-type-1': 'Стандартый',
      'price-description-1-p-1': 'Одна локация',
      'price-description-1-p-2': '120 цветных фото',
      'price-description-1-p-3': '12 отретушированных фото',
      'price-description-1-p-4': 'Готовность через 2-3 недели',
      'price-description-1-p-5': 'Макияж, визаж',
      'price-type-2': 'Премиум',
      'price-description-2-p-1': 'Одна-две локации',
      'price-description-2-p-2': '200 цветных фото',
      'price-description-2-p-3': '20 отретушированных фото',
      'price-description-2-p-4': 'Готовность через 1-2 недели',
      'price-description-2-p-5': 'Макияж, визаж',
      'price-type-3': 'Золотой',
      'price-description-3-p-1': 'Три локации и больше',
      'price-description-3-p-2': '300 цветных фото',
      'price-description-3-p-3': '50 отретушированных фото',
      'price-description-3-p-4': 'Готовность через 1 неделю',
      'price-description-3-p-5': 'Макияж, визаж, прическа',
      'order': 'Заказать съемку',
      'contact-me': 'Свяжитесь со мной',
      'send-message': 'Отправить'
    }
  }


  /*получаем в константы кнопки- переключатели языков и все элементы, подлежащие переводу с атрибутом data-transcription. */
  const switchBtn = document.querySelectorAll('.switch-btn');
  const transcriptionText = document.querySelectorAll('[data-transcription]');
  const switchBlock = document.querySelector('.switch'); 
  
switchBlock.addEventListener('click', changeLanguage);

function changeLanguage(event) {

    if(event.target.classList.contains('switch-btn')) {
        
            switchBtn.forEach(elem => {
                let language = elem.getAttribute('data-language');
                elem.classList.remove('current-language');
                event.target.classList.add('current-language');

                elem.addEventListener('click', function () {
                      transcriptionText.forEach(item => {
                      let dataText = item.getAttribute("data-transcription");  /*получаем значение атрибута data у всех элементов для переводa */ 
                      item.textContent = transcriptionObj[language][dataText];
                    });  
                });      
        });
        
        
    }
}


  
 /*  switchLanguage.forEach(elem => {
    elem.addEventListener('click', function (event) {
        if (event.target.classList.contains('current-language')) {
        elem.classList.remove('current-language');
        }
        let language = elem.getAttribute('data-language'); /*получаем  значение атрибута data у кнопок */ /*
        transcriptionText.forEach(elem => {
          let dataText = elem.getAttribute("data-transcription");  /*получаем значение атрибута data у всех элементов для переводa */ /*
          console.log(dataText);
          elem.textContent = transcriptionObj[language][dataText];
          
      });
        
        event.target.classList.add('current-language');
    });
  }); */

  
 

  
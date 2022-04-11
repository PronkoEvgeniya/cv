const i18nObj = {
    'en': {
        'contacts': 'Contacts',
        'minsk': 'Minsk',
        'skills': 'Skills',
        'name': 'Eugeniya Pronko',
        'about': 'About me',
        'about-me': 'My working experience is 5 years in veterinary medicine and retail trade. In September 21, I began to independently study the basics of layout and development in javaScript.  I\'m interested in graphic design and tech, so I chosed a digital  specialty for myself. Now my goal is getting my first job as a position front-end developer.',
        'educ': 'Education',
        'portfolio': 'Portfolio',
        'minimal': 'One-page landing based on the layout of Figma.',
        'port': 'One-page landing based on the layout of Figma. Added functionality: photo gallery, language change, theme change. Created during the learning process at RSSchool.',
        'shelter': 'Double page website. Created during the learning process at RSSchool.',
        'gallery': 'Photo gallery with search function based on Unsplash API. Created during the learning process at RSSchool.',
        'audio': 'Custom audio player. Created during the learning process at RSSchool.',
        'tic': 'Tic-tac-toe game in custom design. Game mode 2 users, there is a table of the last 10 results. Created during the learning process at RSSchool.',
        'back': 'Back to main page'
    },
    'ru': {
        'contacts': 'Контакты',
        'minsk': 'Минск',
        'skills': 'Навыки',
        'name': 'Евгения Пронько',
        'about': 'Обо мне',
        'about-me': 'Мой опыт работы состовляет 5 лет в сфере ветеринарной медицины и розничной торговли. В сентябре 2021 года я начала изучать основы верстки и веб-разработки на JavaScript.  Я интересовалась графическим дизайном, поэтому выбрала digital-специальность. Сейчас моя цель - найти свою первую работу в качестве веб-разработчика.',
        'educ': 'Образование',
        'portfolio': 'Портфолио',
        'minimal': 'Одностраничный лэндинг по макету из Фигмы.',
        'port': 'Одностраничный лэндинг по макету из Фигмы. Добавлен функционал: фото-галлерея, смена языка, смена темы. Создано в рамках обучения в RSSchool.',
        'shelter': 'Двустраничный веб-сайт. Создано в рамках обучения в RSSchool.',
        'gallery': 'Фото-галлерея с функцией поиска, основанная на Unsplash API. Создано в рамках обучения в RSSchool.',
        'audio': 'Кастомный аудио-плеер. Создано в рамках обучения в RSSchool.',
        'tic': 'Игра крестики-нолики с кастомным дизайном. Режим игры для двух пользователей. Есть таблица последних результатов. Создано в рамках обучения в RSSchool.',
        'back': 'Вернуться на главную'
    }
}
const lang = document.querySelector('.lang');
function getTranslate(lang) {
    const transCollection = document.querySelectorAll('[data-i18n]');
    transCollection.forEach((elem) => {
        elem.textContent = i18nObj[lang][elem.dataset.i18n]});
}

lang.addEventListener('click', function btnToggle() {
    if (lang.classList.contains('ru-lang')) {
        lang.classList.remove('ru-lang');
        lang.innerHTML = 'en';
        getTranslate('ru');
    } else {
        lang.classList.add('ru-lang');
        lang.innerHTML = 'ru';
        getTranslate('en');
    }
})

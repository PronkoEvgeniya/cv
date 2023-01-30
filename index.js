const i18nObj = {
  en: {
    contacts: 'Contacts',
    minsk: 'Minsk',
    skills: 'Skills',
    name: 'Eugeniya Pronko',
    about: 'About me',
    'about-me':
      'I completed the FE JS course from RSSCHOOL in September 2022. After graduation, I took a basic PHP course on Hexlet, currently I am studying Vue. I am looking for a job as a coder or junior developer with the aim of further developing in front-end development.',
    educ: 'Education',
    portfolio: 'Portfolio',
    minimal: 'One-page landing based on the layout of Figma.',
    travel: 'One-page landing based on the layout of Figma',
    robin: 'Mini online shop on React.',
    port: 'One-page landing based on the layout of Figma. Added functionality: photo gallery, language change, theme change. Created during the learning process at RSSchool.',
    shelter: 'Double page website. Created during the learning process at RSSchool.',
    gallery:
      'Photo gallery with search function based on Unsplash API. Created during the learning process at RSSchool.',
    audio: 'Custom audio player. Created during the learning process at RSSchool.',
    tic: 'Tic-tac-toe game in custom design. Game mode 2 users, there is a table of the last 10 results. Created during the learning process at RSSchool.',
    back: 'Back to main page',
  },
  ru: {
    contacts: 'Контакты',
    minsk: 'Минск',
    skills: 'Навыки',
    name: 'Евгения Пронько',
    about: 'Обо мне',
    'about-me':
      'Я закончила курс FE JS от RSSCHOOL в сентябре 2022 года. После окончания прошла базовый курс PHP на Хекслете, в данный момент изучаю Vue. Ищу работу верстальщиком или младшим разработчиком с целью далее развиваться во фронтенд-разработке.',
    educ: 'Образование',
    portfolio: 'Портфолио',
    minimal: 'Одностраничный лэндинг по макету из Фигмы.',
    travel: 'Одностраничный лэндинг по макету из Фигмы.',
    robin: 'Мини онлайн-магазин, написан на Реакт.',
    port: 'Одностраничный лэндинг по макету из Фигмы. Добавлен функционал: фото-галлерея, смена языка, смена темы. Создано в рамках обучения в RSSchool.',
    shelter: 'Двустраничный веб-сайт. Создано в рамках обучения в RSSchool.',
    gallery:
      'Фото-галлерея с функцией поиска, основанная на Unsplash API. Создано в рамках обучения в RSSchool.',
    audio: 'Кастомный аудио-плеер. Создано в рамках обучения в RSSchool.',
    tic: 'Игра крестики-нолики с кастомным дизайном. Режим игры для двух пользователей. Есть таблица последних результатов. Создано в рамках обучения в RSSchool.',
    back: 'Вернуться на главную',
  },
};
const lang = document.querySelector('.lang');
function getTranslate(lang) {
  const transCollection = document.querySelectorAll('[data-i18n]');
  transCollection.forEach((elem) => {
    elem.textContent = i18nObj[lang][elem.dataset.i18n];
  });
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
});

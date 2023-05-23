import { fieldWithItemsObj, makeGameAction } from './gameAction';
import { createInfoPanel } from './infoPanel';
import { createField } from './field';

export function createScreenLight() {
  // create header
  const header = document.createElement('header');
  header.classList.add('header');
  header.innerHTML = `<div class = 'container'>
    <ul class = 'nav__list'>
    </ul><div class = 'nav-mob__burger'></div></div>`;
  document.body.appendChild(header);
  // create nav-list elements
  let i = 0;
  const navList = document.querySelector('.nav__list');
  const navContent = ['new&nbsp;game', 'easy', 'medium', 'hard', 'light',
    'dark'];
  navContent.forEach((link) => {
    const li = document.createElement('li');
    li.classList = `nav__item nav__item-${i}`;
    li.innerHTML = `<a class = 'nav__link'>${link}</a>`;
    navList.appendChild(li);
    i++;
  });
  // create nav-list 360px
  i = 0;
  const ul = document.createElement('ul');
  ul.classList.add('nav-mob__list');
  document.body.appendChild(ul);
  const burger = document.querySelector('.nav-mob__burger');
  burger.innerHTML = `<svg width="20" height="16" viewBox="0 0 20 16"
     fill="none" xmlns="http://www.w3.org/2000/svg">
    <line y1="1" x2="20" y2="1" stroke="#D483FA" stroke-width="2"/>
    <line y1="8" x2="20" y2="8" stroke="#D483FA" stroke-width="2"/>
    <line y1="15" x2="20" y2="15" stroke="#D483FA" stroke-width="2"/>
    </svg>`;
  const navListMob = document.querySelector('.nav-mob__list');
  const navContentMob = ['new game', 'easy', 'medium', 'hard', 'light',
    'dark'];
  navContentMob.forEach((link) => {
    const li = document.createElement('li');
    li.classList = `nav-mob__item nav-mob__item-${i}`;
    li.innerHTML = `<a class = 'nav-mob__link'>${link}</a>`;
    navListMob.appendChild(li);
    i++;
  });
  const newGame = document.querySelector('.nav__item-0');
  const newGameMob = document.querySelector('.nav-mob__item-0');
  const lightTheme = document.querySelector('.nav__item-4');
  const lightThemeMob = document.querySelector('.nav-mob__item-4');
  const darkTheme = document.querySelector('.nav__item-5');
  const darkThemeMob = document.querySelector('.nav-mob__item-5');
  burger.addEventListener('click', () => {
    navListMob.classList.toggle('nav-mob--active');
  });
  // включение и выключение темной темы

  darkTheme.addEventListener('click', () => {
    const infoPanel = document.querySelector('.game__info-panel');
    const main = document.querySelector('.main');
    document.body.classList.add('dark_bg');
    main.classList.add('dark_bg');
    header.classList.add('dark_header');
    infoPanel.classList.add('dark_info');
  });

  lightTheme.addEventListener('click', () => {
    const infoPanel = document.querySelector('.game__info-panel');
    const main = document.querySelector('.main');
    document.body.className = '';
    main.classList.remove('dark_bg');
    header.classList.remove('dark_header');
    infoPanel.classList.remove('dark_info');
  });
  darkThemeMob.addEventListener('click', () => {
    const infoPanel = document.querySelector('.game__info-panel');
    const main = document.querySelector('.main');
    document.body.classList.add('dark_bg');
    main.classList.add('dark_bg');
    header.classList.add('dark_header');
    infoPanel.classList.add('dark_info');
    navListMob.classList.remove('nav-mob--active');
  });

  lightThemeMob.addEventListener('click', () => {
    const infoPanel = document.querySelector('.game__info-panel');
    const main = document.querySelector('.main');
    document.body.className = '';
    main.classList.remove('dark_bg');
    header.classList.remove('dark_header');
    infoPanel.classList.remove('dark_info');
    navListMob.classList.remove('nav-mob--active');
  });
  // рестарт кнопкой new game
  newGameMob.addEventListener('click', () => {
    document.body.className = '';
    createInfoPanel();
    createField(10, 10);
    makeGameAction();
    for (let k = 0; k < 10; k++) {
      for (let j = 0; j < 10; j++) {
        fieldWithItemsObj[k][j].withMine = false;
        fieldWithItemsObj[k][j].open = false;
      }
    }

    navListMob.classList.remove('nav-mob--active');
  });
  newGame.addEventListener('click', () => {
    document.body.className = '';
    createInfoPanel();
    createField(10, 10);
    makeGameAction();
    for (let k = 0; k < 10; k++) {
      for (let j = 0; j < 10; j++) {
        fieldWithItemsObj[k][j].withMine = false;
        fieldWithItemsObj[k][j].open = false;
      }
    }
  });
}

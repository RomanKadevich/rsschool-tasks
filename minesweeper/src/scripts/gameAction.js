import { creatFieldWithItemObj } from './createItemObj';
import { isNeigborWithMine } from './isNeigborWithMine';
import { openCell } from './openItemsWithoutMines';

export const fieldWithItemsObj = creatFieldWithItemObj(10, 10);
export function makeGameAction() {
  const windowWithInfo = document.querySelector('#window3');
  let clickCounter = 0;
  const field = document.querySelector('.field');
  let timeCounter = 0;
  const timeWindow = document.querySelector('#window2');
  const numOfOpenItems = 10 * 10 - 10;
  let minesAdded = false;
  const smile = document.querySelector('#window1');
  const movesNum = document.querySelector('#window0');
  let timerId;
  function changeTimeWindow() {
    timeCounter++;
    timeWindow.textContent = `${timeCounter}`;
  }

  const recOpenCells = (event) => {
    const { target } = event;
    if (target.classList.contains('field__item')) {
      if (target.classList.contains('field__item_withFlag')) {
        return;
      }
      clickCounter++;
      movesNum.textContent = `${clickCounter}`;
      const targetRow = parseInt(target.getAttribute('data-row'), 10);
      const targetCol = parseInt(target.getAttribute('data-col'), 10);

      // поражение при попадании на мину
      if (fieldWithItemsObj[targetRow][targetCol].withMine) {
        const targetItem = document.querySelector(`#item-${targetRow}-${targetCol}`);
        targetItem.classList.add('field__explosion');

        for (let i = 0; i < 10; i++) {
          for (let j = 0; j < 10; j++) {
            if (fieldWithItemsObj[i][j].withMine && fieldWithItemsObj[i][j]
              !== fieldWithItemsObj[targetRow][targetCol]) {
              const item = document.querySelector(`#item-${i}-${j}`);
              item.classList.add('field__mines');
            }
          }
          field.classList.add('field--hover-act-disable');
          clearInterval(timerId);
          windowWithInfo.textContent = 'Игра окончена. Попробуйте еще раз!';
          windowWithInfo.classList.add('game__window_lost');
        }
        smile.classList.add('gameOver');
        field.removeEventListener('click', recOpenCells);
      }
      // присовение свойства open
      openCell(fieldWithItemsObj, targetRow, targetCol);
      // открытие ячеек и прверка на побуду
      let counter = 0;
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          const numOfMines = isNeigborWithMine(i, j, fieldWithItemsObj);
          if (fieldWithItemsObj[i][j].open) {
            const itemEl = document.querySelector(`#item-${i}-${j}`);
            itemEl.classList.add('field__item_open');
            if (fieldWithItemsObj[i][j].open) {
              // const item = document.querySelector(`#item-${i}-${j}`);
              // item.classList.add('field__item_open');
              // // if (fieldWithItemsObj[i][j].withMine) {
              // //   item.textContent = '';
              // // }
              if (numOfMines > 0 && (!fieldWithItemsObj[targetRow][targetCol].withMine)) {
                itemEl.textContent = `${numOfMines}`;
              }
              counter++;
            }
          }
        }
      }
      // проверка на открытия всех ячеек(победа)
      if (numOfOpenItems === counter) {
        smile.classList.add('win');
        // остановка таймера
        clearInterval(timerId);
        const movesRes = movesNum.textContent;
        const timeRes = timeWindow.textContent;
        windowWithInfo.textContent = `Ура! Вы нашли все мины за ${timeRes} сек. и ${movesRes} ход.!`;
        windowWithInfo.classList.add('game__window_win');
      }
    }
  };
  const addMines = (event) => {
    if (!minesAdded) {
      let mines = 10;
      while (mines > 0) {
        const row = Math.floor(Math.random() * 10);
        const col = Math.floor(Math.random() * 10);
        if (!fieldWithItemsObj[row][col].withMine) {
          fieldWithItemsObj[row][col].withMine = true;
          mines--;
        }
      }
      minesAdded = true;
    }
    const { target } = event;
    if (target.classList.contains('field__item')) {
      if (target.classList.contains('field__item_withFlag')) {
        return;
      }
      //  установка таймера
      timerId = setInterval(changeTimeWindow, 1000);

      clickCounter++;
      movesNum.textContent = `${clickCounter}`;
      const targetRow = parseInt(target.getAttribute('data-row'), 10);
      const targetCol = parseInt(target.getAttribute('data-col'), 10);

      openCell(fieldWithItemsObj, targetRow, targetCol);

      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          // показать мины для проверки задания
          if (fieldWithItemsObj[i][j].withMine && fieldWithItemsObj[i][j]
            !== fieldWithItemsObj[targetRow][targetCol]) {
            const item = document.querySelector(`#item-${i}-${j}`);
            item.classList.add('field__mines');
          }

          const numOfMines = isNeigborWithMine(i, j, fieldWithItemsObj);
          if (fieldWithItemsObj[i][j].open) {
            const item = document.querySelector(`#item-${i}-${j}`);
            item.classList.add('field__item_open');

            if (numOfMines > 0) {
              item.textContent = `${numOfMines}`;
            }
          }
        }
      }

      field.removeEventListener('click', addMines);
      // field.removeEventListener('touchend', addMines);
      field.addEventListener('click', recOpenCells);
      // field.addEventListener('touchend', recOpenCells);
      smile.classList.add('successfullClick');
    }
  };
  //  const explosion = document.querySelector('.field__explosion');
  //   if (explosion){
  //     explosion.textContent =''
  //   }
  field.addEventListener('click', addMines);
  // if ('ontouchstart' in window) {
  //   field.removeEventListener('click', addMines);
  //   field.addEventListener('touchend', addMines);
  // }
}

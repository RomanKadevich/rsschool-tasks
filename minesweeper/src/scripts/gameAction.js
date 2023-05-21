import { creatFieldWithItemObj } from './createItemObj';
import { isNeigborWithMine } from './isNeigborWithMine';
import { openCell } from './openItemsWithoutMines';

export function makeGameAction() {
  const field = document.querySelector('.field');
  const fieldWithItemsObj = creatFieldWithItemObj(10, 10);
  const addMines = (event) => {
    const { target } = event;
    const targetRow = parseInt(target.getAttribute('data-row'), 10);
    const targetCol = parseInt(target.getAttribute('data-col'), 10);

    let mines = 10;
    while (mines > 0) {
      const row = Math.floor(Math.random() * 10);
      const col = Math.floor(Math.random() * 10);
      if (!fieldWithItemsObj[row][col].withMine) {
        fieldWithItemsObj[row][col].withMine = true;
        mines--;
      }
    }
    openCell(fieldWithItemsObj, targetRow, targetCol);
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (fieldWithItemsObj[i][j].withMine && fieldWithItemsObj[i][j] !== fieldWithItemsObj[targetRow][targetCol]) {
          // const item = document.querySelector(`#item-${i}-${j}`);
          // item.classList.add('field__mines');
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

      field.removeEventListener('click', addMines);
    }
  };

  field.addEventListener('click', addMines);
}

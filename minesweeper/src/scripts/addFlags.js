// import { fieldWithItemsObj } from './gameAction';

// export function addFlags() {
//   const field = document.querySelector('.field');
//   field.addEventListener('contextmenu', (event) => {
//     event.preventDefault();
//   });
//   function setFlag(event) {
//     const { target } = event;
//     if (target.classList.contains('field__item')) {
//       if (!fieldWithItemsObj.open && !fieldWithItemsObj.withMine) {
//         target.classList.toggle('field__item_withFlag');
//       }
//     }
//     return true;
//   }
//   field.addEventListener('contextmenu', setFlag);
//   // field.addEventListener('dblclick', setFlag);
// }
import { fieldWithItemsObj } from './gameAction';

export function addFlags() {
  const field = document.querySelector('.field');
  field.addEventListener('contextmenu', (event) => {
    event.preventDefault();
  });

  function setFlag(event) {
    const { target } = event;
    if (target.classList.contains('field__item')) {
      if (!fieldWithItemsObj.open && !fieldWithItemsObj.withMine) {
        target.classList.toggle('field__item_withFlag');
      }
    }
    return true;
  }

  field.addEventListener('contextmenu', setFlag);

  //   let longPressTimer;

  //   field.addEventListener('touchstart', (event) => {
  //     event.preventDefault();
  //     longPressTimer = setTimeout(() => {
  //       setFlag(event);
  //     }, 1500); // Задайте желаемую продолжительность долгого нажатия
  //   });

  //   field.addEventListener('touchmove', () => {
  //     clearTimeout(longPressTimer); // Очистка таймера при перемещении пальца
  //   });

//   field.addEventListener('touchend', () => {
//     clearTimeout(longPressTimer); // Очистка таймера при отрыве пальца
//   });
}

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
}

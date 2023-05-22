// 14, 15, 29, 30, 42, 43, 55-59, 61-65 - color
// 14, 30, 42, 43, 55 - size
// функция создает верстку клавиатуры в блоке HTML, используя массив из ключей клавиш

function changeNameKeys(keys) {
  for (const key of keys) {
    switch (key.textContent) {
      case 'Delete':
        key.textContent = 'DEL';
        break;
      case 'Enter':
        key.textContent = 'ENTER';
        break;
      case 'CapsLock':
        key.textContent = 'Caps Lock';
        break;
      case 'Meta':
        key.textContent = 'Win';
        break;
      case '(blank space)':
        key.textContent = '';
        break;
      case 'Control':
        key.textContent = 'Ctrl';
        break;
      case 'ArrowUp':
        key.innerHTML = `<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.116566 12L7.004 0.40909L13.8914 12H0.116566Z" fill="white"/>
                </svg>`;
        break;
      case 'ArrowLeft':
        key.innerHTML = `<svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.4992 14.3636L0.79106 7.54545L12.4992 0.727272V14.3636Z" fill="white"/>
                </svg>`;
        break;
      case 'ArrowDown':
        key.innerHTML = `<svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.116566 0.0909088H13.8861L6.99867 11.6818L0.116566 0.0909088Z" fill="white"/>
                </svg>`;
        break;
      case 'ArrowRight':
        key.innerHTML = `<svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.494185 14.3636V0.727272L12.2023 7.54545L0.494185 14.3636Z" fill="white"/>
                </svg>`;
        break;
    }
  }
}
class RusKeyboard {
  constructor(arrOfKeys, htmlFieldElement) {
    this.arrOfKeys = arrOfKeys;
    this.htmlFieldElement = htmlFieldElement;
  }

  creat() {
    for (let i = 0; i < this.arrOfKeys.length; i++) {
      if ((i === 14) || (i === 28) || ((i >= 54) && (i <= 58))
                || ((i >= 60) && (i <= 64))) {
        this.htmlFieldElement.innerHTML += '<div class = \'keyboard__key keyboard__key_color\' data =' + `${i}` + `>${this.arrOfKeys[i]}</div>`;
      } else if ((i === 13) || (i === 29) || (i === 41) || (i === 42)
                || (i === 54) || (i === 42) || ((i >= 54) && (i <= 58))
                || ((i >= 60) && (i <= 64))) {
        this.htmlFieldElement.innerHTML += '<div class = \'keyboard__key keyboard__key_color keyboard__key_size\' data =' + `${i}` + `>${this.arrOfKeys[i]}</div>`;
      } else if (i === 59) {
        this.htmlFieldElement.innerHTML += '<div class = \'keyboard__key keyboard__key_bs-size\' data =' + `${i}` + `>${this.arrOfKeys[i]}</div>`;
      } else {
        this.htmlFieldElement.innerHTML += '<div class = \'keyboard__key\' data =' + `${i}` + `>${this.arrOfKeys[i]}</div>`;
      }
    }
  }
}
class EngKeyboard {
  constructor(arrOfKeys, htmlFieldElement) {
    this.arrOfKeys = arrOfKeys;
    this.htmlFieldElement = htmlFieldElement;
  }

  creat() {
    for (let i = 0; i < this.arrOfKeys.length; i++) {
      if ((i === 14) || (i === 28) || ((i >= 54) && (i <= 58))
                || ((i >= 60) && (i <= 64))) {
        this.htmlFieldElement.innerHTML += '<div class = \'keyboard__key keyboard__key_color\'  data =' + '0' + `${i}` + `>${this.arrOfKeys[i]}</div>`;
      } else if ((i === 13) || (i === 29) || (i === 41) || (i === 42)
                || (i === 54) || (i === 42) || ((i >= 54) && (i <= 58))
                || ((i >= 60) && (i <= 64))) {
        this.htmlFieldElement.innerHTML += '<div class = \'keyboard__key keyboard__key_color keyboard__key_size\'  data =' + '0' + `${i}` + `>${this.arrOfKeys[i]}</div>`;
      } else if (i === 59) {
        this.htmlFieldElement.innerHTML += '<div class = \'keyboard__key keyboard__key_bs-size\'  data =' + '0' + `${i}` + `>${this.arrOfKeys[i]}</div>`;
      } else {
        this.htmlFieldElement.innerHTML += '<div class = \'keyboard__key\'  data =' + '0' + `${i}` + `>${this.arrOfKeys[i]}</div>`;
      }
    }
  }
}

function addInputText(keys, textarea) {
  keys.forEach((key) => {
    key.addEventListener('click', () => {
      // Получаем символ, соответствующий нажатой клавише

      const character = key.textContent;

      // Добавляем символ в конец текста в textarea
      textarea.value += character;
    });
  });
  document.addEventListener('keydown', (event) => {
    event.preventDefault();
    let character = '';

    // Получаем символ, соответствующий нажатой клавише
    for (const item of pressedRusKeys) {
      if (((event.key === item) || (event.key === item.toLowerCase())) && (event.key !== 'Backspace')
                && (event.key !== 'Delete') && (event.key !== 'Enter')
                && (event.key !== 'CapsLock') && (event.key !== 'ArrowRight') && (event.key !== 'ArrowLeft')
                && (event.key !== 'Shift') && (event.key !== 'Alt') && (event.key !== 'Control')) {
        character = event.key;
      }
      if (!event.getModifierState('CapsLock')) {
        character = character.toLowerCase();
      }
    }
    for (const item of pressedEngKeys) {
      if (((event.key === item) || (event.key === item.toLowerCase()))  && (event.key !== 'Backspace')
                && (event.key !== 'Delete') && (event.key !== 'Enter')
                && (event.key !== 'CapsLock') && (event.key !== 'ArrowRight') && (event.key !== 'ArrowLeft')
                && (event.key !== 'Shift') && (event.key !== 'Alt') && (event.key !== 'Control')) {
        character = event.key;
      }
      if (!event.getModifierState('CapsLock')) {
        character = character.toLowerCase();
      }
    }

    textarea.value += character;
    if (event.key === 'Backspace') {
      textarea.value = textarea.value.substring(0, textarea.value.length - 1);
    }
    if (event.key === 'Delete') {
      const { selectionStart } = textarea;
      const { value } = textarea;

      const newValue = value.substring(0, selectionStart) + value.substring(selectionStart + 1);

      textarea.value = newValue;
      textarea.selectionStart = selectionStart;
      textarea.selectionEnd = selectionStart;
    }
    if (event.key === 'Enter') {
      textarea.value += '\n';
    }
    if (event.key === 'ArrowLeft') {
      textarea.selectionStart -= 1;
      textarea.selectionEnd -= 1;
    }
    if (event.key === 'ArrowRight') {
      textarea.selectionStart += 1;
      textarea.selectionEnd += 1;
    }
    if (event.key === 'ArrowUp') {
      const cursorPosition = textarea.getBoundingClientRect();
      textarea.style.top = `${cursorPosition.top - 20}px`;
    }
    if (event.key === 'ArrowDown') {
      const cursorPosition = textarea.getBoundingClientRect();
      textarea.style.top = `${cursorPosition.top + 20}px`;
    }
  });
}
// создал массив event.key русскоязычной И АНГЛ.клавиатуры
const pressedRusKeys = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
  'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\',
  'Delete', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
  'Shift', '/', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', 'ArrowUp', 'Shift',
  'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
const pressedEngKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=',
  'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',
  'Delete', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',
  'Shift', '/', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', 'ArrowUp', 'Shift',
  'Control', 'Meta', 'Alt', ' ', 'Alt', 'Control', 'ArrowLeft', 'ArrowDown', 'ArrowRight'];
const info = document.createElement('p');
info.textContent = 'Смена языка клавиатуры: alt + shift;  OC: WINDOWS';
document.body.append(info);
info.className = 'info';
const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
keyboard.innerHTML = '<textarea id="textarea" autofocus rows="4" cols="50"></textarea><div id="keyfield-rus"></div><div id="keyfield-eng"></div>';
document.body.append(keyboard);
const textArea = document.getElementById('textarea');
textArea.className = 'keyboard__textarea';

const keyFieldRus = document.getElementById('keyfield-rus');
keyFieldRus.className = 'keyboard__keyfield';
const keyFieldEng = document.getElementById('keyfield-eng');
keyFieldEng.className = 'keyboard__keyfield keyboard__keyfield_disable';
const addRusKeyboard = new RusKeyboard(pressedRusKeys, keyFieldRus);
addRusKeyboard.creat();
const addEngKeyboard = new EngKeyboard(pressedEngKeys, keyFieldEng);
addEngKeyboard.creat();
const keys = document.querySelectorAll('.keyboard__key');
changeNameKeys(keys);

window.addEventListener('keydown', (event) => {
  if (event.altKey && event.shiftKey) {
    keyFieldEng.classList.toggle('keyboard__keyfield_disable');
    keyFieldRus.classList.toggle('keyboard__keyfield_disable');
  }
});
function highlight(el) {
  el.classList.add('keyboard__key_active');
}
function cancelHighlight(el) {
  el.classList.remove('keyboard__key_active');
}

const highlightRusKey = (event) => {
  for (const item of pressedRusKeys) {
    if  ((event.key === item) || (event.key === item.toLowerCase()))  {
      const indexOfKey = pressedRusKeys.indexOf(item);
      highlight(document.querySelector('[data =' + '"' + `${indexOfKey}` + '"' + ']'));
    }
  }
};
const cancelHighlightRusKey = (event) => {
  for (const item of pressedRusKeys) {
    if ((event.key === item) || (event.key === item.toLowerCase()))  {
      const indexOfKey = pressedRusKeys.indexOf(item);
      cancelHighlight(document.querySelector('[data =' + '"' + `${indexOfKey}` + '"' + ']'));
    }
  }
};
const highlightEngKey = (event) => {
  for (const item of pressedEngKeys) {
    if ((event.key === item) || (event.key === item.toLowerCase()))  {
      const indexOfKey = pressedEngKeys.indexOf(item);
      highlight(document.querySelector('[data =' + '"' + '0' + `${indexOfKey}` + '"' + ']'));
    }
  }
};
const cancelHighlightEngKey = (event) => {
  for (const item of pressedEngKeys) {
    if ((event.key === item) || (event.key === item.toLowerCase()))  {
      const indexOfKey = pressedEngKeys.indexOf(item);
      cancelHighlight(document.querySelector('[data =' + '"' + '0' + `${indexOfKey}` + '"' + ']'));
    }
  }
};

document.addEventListener('keydown', highlightRusKey);
document.addEventListener('keyup', cancelHighlightRusKey);

document.addEventListener('keydown', highlightEngKey);
document.addEventListener('keyup', cancelHighlightEngKey);

addInputText(keys, textArea);
textArea.setAttribute('placeholder', 'Введите текст');
textArea.setAttribute('wrap', 'hard');

textArea.addEventListener('input', (event) => {
  document.cookie = `my-input-value=${event.target.value}; expires=${new Date(9999, 12, 31).toUTCString()}; path=/`;
});

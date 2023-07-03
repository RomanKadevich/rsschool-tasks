import { CssEditor } from './css_editor';
import { HtmlEditor } from './html_viewer';
import hljs from 'highlight.js';
import { hashes } from '../../templates/vars';
import { Navigation } from '../../templates/navigation';

interface CheckButtonText {
  [key: string]: string;
}
// correct selector text for win
const checkButtonText: CheckButtonText = {
  'btn-level-1': 'plate',
  'btn-level-2': 'bento',
  'btn-level-3': '#fancy',
  'btn-level-4': 'plate shawarma',
  'btn-level-5': '#fancy chicken',
  'btn-level-6': '.small',
  'btn-level-7': 'shawarma.small',
  'btn-level-8': 'bento shawarma.small',
  'btn-level-9': 'plate, bento' || 'plate,bento',
  'btn-level-10': '*',
}

export class Editor {
  private container: HTMLElement;
  private cssEditor: CssEditor;
  private htmlEditor: HtmlEditor;

  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'row editor';
    this.cssEditor = new CssEditor();
    this.htmlEditor = new HtmlEditor();
  }

  highlightAllTag(tag: string) {
    return `<div class= code>${tag}</div>`;
  }

  highlightOpenTag(tag: string) {
    return `<div class= code>${tag}`;
  }

  highlightCloseTag(tag: string) {
    return `${tag}</div>`;
  }

  static highlightInputCode() {
    const inputView: HTMLElement | null = document.querySelector('.inputCSS-view');
    const input: HTMLInputElement | null = document.querySelector('.inputCSS');
    let selector: string;
    if (inputView && input) {
      input.addEventListener('click', () => {
        if (!input.value) {
          const cursor = '|';
          inputView.innerHTML = `<span class='cur'>
        ${cursor}</span>`;
        }
      });

      input.addEventListener('input', () => {
        selector = input.value;
        if (input.value) {
          inputView.classList.remove('animate__animated');
        }
        if (!input.value) {
          inputView.classList.add('animate__animated')
          selector = 'Typ Type in а CSS selector';
        }
        inputView.innerHTML = '<pre><code class="Css">'
          + selector + '</code></pre>';
        document.querySelectorAll<HTMLElement>('pre code').forEach((el) => {
          hljs.highlightElement(el);
        });

      });
    }


  }

  static highlightCode() {
    document.querySelectorAll<HTMLElement>('pre code').forEach((el) => {
      hljs.highlightElement(el);
    });

    // highlight element on the table on hover in html element
    const handleMouseOver = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('code') && target.textContent) {
        target.classList.add('hovered-tag');
        if (target.textContent.includes('plate') && !target.textContent.includes('fancy')) {
          const plate: NodeListOf<HTMLElement> = document.querySelectorAll('.plate')
          const plateBurger: NodeListOf<HTMLElement> = document.querySelectorAll('.plate-burger')
          const plateChicken: NodeListOf<HTMLElement> = document.querySelectorAll('.plate-chicken')
          const plateShawarmaSmall: NodeListOf<HTMLElement> = document.querySelectorAll('.plate-shawarma-small')
          const plateBurgerSmall: NodeListOf<HTMLElement> = document.querySelectorAll('.plate-burger-small')
          plate.forEach(item => item.classList.add('hover-element'));
          plateBurger.forEach(item => item.classList.add('hover-element'))
          plateChicken.forEach(item => item.classList.add('hover-element'))
          plateShawarmaSmall.forEach(item => item.classList.add('hover-element'));
          plateBurgerSmall.forEach(item => item.classList.add('hover-element'))

        }
        if (target.textContent.includes('bento')) {
          const bento: NodeListOf<HTMLElement> = document.querySelectorAll('.bento')
          const bentoBurger: NodeListOf<HTMLElement> = document.querySelectorAll('.bento-burger')
          const bentoChicken: NodeListOf<HTMLElement> = document.querySelectorAll('.bento-chicken')
          const bentoShawarmaSmall: NodeListOf<HTMLElement> = document.querySelectorAll('.bento-shawarma-small')
          const bentoBurgerSmall: NodeListOf<HTMLElement> = document.querySelectorAll('.bento-burger-small')
          bento.forEach(item => item.classList.add('hover-element'));
          bentoBurger.forEach(item => item.classList.add('hover-element'))
          bentoChicken.forEach(item => item.classList.add('hover-element'))
          bentoShawarmaSmall.forEach(item => item.classList.add('hover-element'));
          bentoBurgerSmall.forEach(item => item.classList.add('hover-element'))
        }
        if (target.textContent.includes('id')) {
          const fancy: NodeListOf<HTMLElement> = document.querySelectorAll('.plate-blue')
          fancy.forEach(item => item.classList.add('hover-element'))
        }
        if (target.textContent.includes('shawarma')) {

          const shawarma: NodeListOf<HTMLElement> = document.querySelectorAll('.shawarma')
          shawarma.forEach(item => item.classList.add('hover-element'))
        }

        if (target.textContent.includes('burger')) {
          const burger: NodeListOf<HTMLElement> = document.querySelectorAll('.burger')
          burger.forEach(item => item.classList.add('hover-element'))
        }
        if (target.textContent.includes('chicken')) {
          const chicken: NodeListOf<HTMLElement> = document.querySelectorAll('.chicken')
          chicken.forEach(item => item.classList.add('hover-element'))
        }

        if (target.textContent.includes('small') && target.textContent.includes('burger')) {
          const burgerSmall: NodeListOf<HTMLElement> = document.querySelectorAll('.burger-small')
          burgerSmall.forEach(item => item.classList.add('hover-element'))
        }
        if (target.textContent.includes('small') && target.textContent.includes('shawarma')) {
          const shawarmaSmall: NodeListOf<HTMLElement> = document.querySelectorAll('.shawarma-small')
          shawarmaSmall.forEach(item => item.classList.add('hover-element'))
        }
        if (target.textContent.includes('small') && target.textContent.includes('chicken')) {
          const chickenSmall: NodeListOf<HTMLElement> = document.querySelectorAll('.chicken-small')
          chickenSmall.forEach(item => item.classList.add('hover-element'))
        }
      }


    };
    // remove highlight element on hover in html
    const handleMouseOut = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('code') && target.textContent) {
        target.classList.remove('hovered-tag');
        if (target.textContent.includes('plate') && !target.textContent.includes('fancy')) {
          const plate: NodeListOf<HTMLElement> = document.querySelectorAll('.plate')
          const plateBurger: NodeListOf<HTMLElement> = document.querySelectorAll('.plate-burger')
          const plateChicken: NodeListOf<HTMLElement> = document.querySelectorAll('.plate-chicken')
          const plateShawarmaSmall: NodeListOf<HTMLElement> = document.querySelectorAll('.plate-shawarma-small')
          const plateBurgerSmall: NodeListOf<HTMLElement> = document.querySelectorAll('.plate-burger-small')
          plate.forEach(item => item.classList.remove('hover-element'));
          plateBurger.forEach(item => item.classList.remove('hover-element'))
          plateChicken.forEach(item => item.classList.remove('hover-element'))
          plateShawarmaSmall.forEach(item => item.classList.remove('hover-element'));
          plateBurgerSmall.forEach(item => item.classList.remove('hover-element'))

        }
        if (target.textContent.includes('bento')) {
          const bento: NodeListOf<HTMLElement> = document.querySelectorAll('.bento')
          const bentoBurger: NodeListOf<HTMLElement> = document.querySelectorAll('.bento-burger')
          const bentoChicken: NodeListOf<HTMLElement> = document.querySelectorAll('.bento-chicken')
          const bentoShawarmaSmall: NodeListOf<HTMLElement> = document.querySelectorAll('.bento-shawarma-small')
          const bentoBurgerSmall: NodeListOf<HTMLElement> = document.querySelectorAll('.bento-burger-small')
          bento.forEach(item => item.classList.remove('hover-element'));
          bentoBurger.forEach(item => item.classList.remove('hover-element'))
          bentoChicken.forEach(item => item.classList.remove('hover-element'))
          bentoShawarmaSmall.forEach(item => item.classList.remove('hover-element'));
          bentoBurgerSmall.forEach(item => item.classList.remove('hover-element'))
        }
        if (target.textContent.includes('id')) {
          const fancy: NodeListOf<HTMLElement> = document.querySelectorAll('.plate-blue')
          fancy.forEach(item => item.classList.remove('hover-element'))
        }
        if (target.textContent.includes('shawarma')) {

          const shawarma: NodeListOf<HTMLElement> = document.querySelectorAll('.shawarma')
          shawarma.forEach(item => item.classList.remove('hover-element'))
        }

        if (target.textContent.includes('burger')) {
          const burger: NodeListOf<HTMLElement> = document.querySelectorAll('.burger')
          burger.forEach(item => item.classList.remove('hover-element'))
        }
        if (target.textContent.includes('chicken')) {
          const chicken: NodeListOf<HTMLElement> = document.querySelectorAll('.chicken')
          chicken.forEach(item => item.classList.remove('hover-element'))
        }

        if (target.textContent.includes('small') && target.textContent.includes('burger')) {
          const burgerSmall: NodeListOf<HTMLElement> = document.querySelectorAll('.burger-small')
          burgerSmall.forEach(item => item.classList.remove('hover-element'))
        } if (target.textContent.includes('small') && target.textContent.includes('shawarma')) {
          const shawarmaSmall: NodeListOf<HTMLElement> = document.querySelectorAll('.shawarma-small')
          shawarmaSmall.forEach(item => item.classList.remove('hover-element'))
        }
        if (target.textContent.includes('small') && target.textContent.includes('chicken')) {
          const chickenSmall: NodeListOf<HTMLElement> = document.querySelectorAll('.chicken-small')
          chickenSmall.forEach(item => item.classList.remove('hover-element'))
        }
      }

    };
    document.querySelectorAll<HTMLElement>('.Html-editor__viewer').forEach((elem: HTMLElement): void => {
      elem.addEventListener('mouseover', handleMouseOver);
      elem.addEventListener('mouseout', handleMouseOut);
    });
  }

  static checkInputText(maxLevel: number): void {
    const checkingHash = +window.location.hash.slice(7);
    const enterBtn: HTMLElement | null = document.querySelector(`#btn-level-${checkingHash}`);

    const input: HTMLInputElement | null = document.querySelector('.inputCSS');

    const saveElementToLocalStorage = (element: HTMLElement | null, key: string) => {
      if (element) {
        const elementString = element.innerHTML;
        localStorage.setItem(key, elementString);
      }
    }


    const makeCheck = (): void => {
      if (enterBtn && input) {
        let checkingHash = +window.location.hash.slice(7);
        const buttonKey = `btn-level-${checkingHash}`
        if (input.value === checkButtonText[buttonKey]) {
          const navItem: HTMLElement | null = document.querySelector(`#nav-item-${checkingHash - 1}`);
          if (navItem) {
            const checkmark: HTMLElement | null = navItem.querySelector('.checkmark')
            if (checkmark) {
              checkmark.classList.add('checkmark-active')
              const navList: HTMLElement | null = document.querySelector('.nav-list')
              if (navList) { saveElementToLocalStorage(navList, `nav-list`) }

            }

          }
          if ((checkingHash + 1) <= maxLevel) {
            window.location.hash = `${hashes[checkingHash]}`;
            const maxLevel = 10;
            Navigation.changeLevel(maxLevel);
            const numberInHash = 7;
            checkingHash = +window.location.hash.slice(numberInHash);
          }
        }else if(input.value === 'help'){
            const help:HTMLElement = document.createElement('span');
            const inputView: HTMLElement | null = document.querySelector('.inputCSS-view');
            if (inputView){  inputView.innerHTML = `<span class= "help">${checkButtonText[buttonKey]}</span>`}
          
        } else {
          const editor: HTMLElement | null = document.querySelector('.editor');
          const animationTime = 800;
          if (editor) {
            editor.classList.add('animate__animated');
            editor.classList.add('animate__shakeX');
            editor.classList.add('animate__animate__faster')
            setTimeout(() => {
              editor.classList.remove('animate__animated');
              editor.classList.remove('animate__shakeX');
              editor.classList.remove('animate__animate__faster')
            }, animationTime);
          }
        }
      }
    }
    if (enterBtn) {
      enterBtn.setAttribute('tabindex', '0');
      enterBtn.addEventListener('click', makeCheck);
      document.addEventListener('keydown', (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
          makeCheck()
        }
      });
    }
  }
  render(btnId: string, htmlId: string, htmlCode: string):HTMLElement {
    this.container.append(this.cssEditor.render(btnId));
    this.container.append(this.htmlEditor.render(htmlId, htmlCode));
    return this.container;
  }
}







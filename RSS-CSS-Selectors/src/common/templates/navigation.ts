import { hashes } from './vars';
import { NavigationContent } from '../components/nav_content';

export class Navigation {
  protected container: HTMLElement;

  protected navigatonContent:NavigationContent;

  constructor() {
    this.container = document.createElement('div');
    this.navigatonContent = new NavigationContent();
  }
  static restartGame():void{
    const btnReset: HTMLElement|null =  document.querySelector('.btn-reset');
    if(btnReset){
      btnReset.addEventListener('click', ():void=>{
        localStorage.clear()
        window.location.hash =  `level-${1}`
        const checkmarks:NodeListOf<HTMLElement>   = document.querySelectorAll('.checkmark');
        checkmarks.forEach(elem=>elem.classList.remove('checkmark-active'));
        btnReset.blur();
      })
    }
    
  }
  static changeLevelInfo(currentHash:number):void {
    const levelInfo: HTMLElement | null = document.querySelector('.level-info');
    if (levelInfo) {    levelInfo.textContent = `Level ${currentHash} of 10`;}
  }
    
  static changeLevel(maxLevel:number):void {
    const navBtn1HTML:HTMLElement | null = document.querySelector('#navBtn0');
    const navBtn2HTML:HTMLElement | null = document.querySelector('#navBtn1');
    const navList: NodeList | null = document.querySelectorAll('.nav-list');
    if(navList){navList.forEach(item=> {
      item.addEventListener('click', (event):void=>{
        const clickedItem = event.target as HTMLElement;
        const idNum = +clickedItem.id.slice(9)+1;
        window.location.hash =  `level-${idNum}`
      })
    })}
    
   

    if (navBtn1HTML && navBtn2HTML) {
      navBtn2HTML.addEventListener('click', ():void=>{
        let currentHash = +window.location.hash.slice(7);
        if ((currentHash + 1) <= maxLevel) {

          window.location.hash = `${hashes[currentHash]}`;
          currentHash = +window.location.hash.slice(7);
        //   Navigation.changeLevelInfo(currentHash)
        }
      });
      navBtn1HTML.addEventListener('click', ():void=>{
        let currentHash = +window.location.hash.slice(7);
        if ((currentHash - 1) > 0) {
          window.location.hash = `${hashes[currentHash - 2]}`;
        
          currentHash = +window.location.hash.slice(7);
        //   Navigation.changeLevelInfo(currentHash)
        }
      });
    }
  }

  render():HTMLElement {
    this.container.append(this.navigatonContent.render());
    this.container.className = 'navigation col l4 m2 s2';
    return this.container;
  }

}
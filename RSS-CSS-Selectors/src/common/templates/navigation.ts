import { hashes } from './vars';
import { NavigationHeader } from '../components/nav_header';

export class Navigation {
  protected container: HTMLElement;

  protected navigatonHeader:NavigationHeader;

  constructor(id:string) {
    this.container = document.createElement('div');
    this.container.id = id;
    this.navigatonHeader = new NavigationHeader();
  }
    
    
  changeLevel(maxLevel:number) {
    const navBtn1HTML:HTMLElement | null = document.querySelector('#navBtn0');
    const navBtn2HTML:HTMLElement | null = document.querySelector('#navBtn1');
    let currentHash = +window.location.hash.slice(7);
    if (navBtn1HTML && navBtn2HTML) {
      navBtn2HTML.addEventListener('click', ()=>{
        if ((currentHash + 1) <= maxLevel) {
          window.location.hash = `${hashes[currentHash]}`;
          currentHash = +window.location.hash.slice(7);
          const levelInfo: HTMLElement | null = document.querySelector('.level-info');
          if (levelInfo) {    levelInfo.textContent = `Level ${currentHash} of 10`;}
        }
      });
      navBtn1HTML.addEventListener('click', ()=>{
        if ((currentHash - 1) > 0) {
          window.location.hash = `${hashes[currentHash - 2]}`;
        
          currentHash = +window.location.hash.slice(7);
          const levelInfo: HTMLElement | null = document.querySelector('.level-info');
          if (levelInfo) {    levelInfo.textContent = `Level ${currentHash} of 10`;}
        }
      });
    }
  }

  render() {
    this.container.append(this.navigatonHeader.render());
    this.container.className = 'navigation col s4 sidenav-fixed';
    return this.container;
  }

}
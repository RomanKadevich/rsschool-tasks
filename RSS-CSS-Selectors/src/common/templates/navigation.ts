import { LevelsIds } from '../../levels/levels_enums';
const hashes: string[] = [LevelsIds.level1, LevelsIds.level2, LevelsIds.level3];


export class Navigation {
  protected container: HTMLElement;

  constructor(id:string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }
    
    
  render() {
    return this.container;
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
        }
      });
      navBtn1HTML.addEventListener('click', ()=>{
        if ((currentHash - 1) > 0) {
          window.location.hash = `${hashes[currentHash - 2]}`;
        }
        currentHash = +window.location.hash.slice(7);
      });
    }
  }
}
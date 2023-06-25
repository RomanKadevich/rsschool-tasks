import { LevelsIds } from '../levels/levels_enums';
const hashes: string[] = [LevelsIds.level1, LevelsIds.level2, LevelsIds.level3];
export class Navigation {
  private container: HTMLElement;

  constructor(id:string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  renderNavButtons() {
    const navBtns: HTMLElement[] = [];

    for (let i = 0; i < 2; i++) {
      const navBtn: HTMLElement = document.createElement('div');
      navBtn.className = `navBtn navBtn${i}`;
      navBtn.id = `navBtn${i}`;
      navBtns.push(navBtn);
    }
    const [navBtn1, navBtn2] = navBtns;
    this.container.append(navBtn1);
    this.container.append(navBtn2);
   
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

  render() {
    this.renderNavButtons();
    this.container.className = 'navigation col s4 sidenav-fixed';
    return this.container;
  }
}
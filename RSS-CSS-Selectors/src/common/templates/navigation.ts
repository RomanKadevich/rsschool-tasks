import { hashes } from './vars';
import { NavigationContent } from '../components/nav_content';

export class Navigation {
  protected container: HTMLElement;

  protected navigatonContent:NavigationContent;

  constructor(id:string) {
    this.container = document.createElement('div');
    this.container.id = id;
    this.navigatonContent = new NavigationContent();
  }

  static changeLevelInfo(currentHash:number) {
    const levelInfo: HTMLElement | null = document.querySelector('.level-info');
    if (levelInfo) {    levelInfo.textContent = `Level ${currentHash} of 10`;}
  }
    
  static changeLevel(maxLevel:number) {
    const navBtn1HTML:HTMLElement | null = document.querySelector('#navBtn0');
    const navBtn2HTML:HTMLElement | null = document.querySelector('#navBtn1');
    const navList: NodeList | null = document.querySelectorAll('.nav-list');
    if(navList){navList.forEach(item=> {
      item.addEventListener('click', (event)=>{
        const clickedItem = event.target as HTMLElement;
        const idNum = +clickedItem.id.slice(9)+1;
        window.location.hash =  `level-${idNum}`
      })
    })}
    
   

    if (navBtn1HTML && navBtn2HTML) {
      navBtn2HTML.addEventListener('click', ()=>{
        let currentHash = +window.location.hash.slice(7);
        if ((currentHash + 1) <= maxLevel) {

          window.location.hash = `${hashes[currentHash]}`;
          currentHash = +window.location.hash.slice(7);
        //   Navigation.changeLevelInfo(currentHash)
        }
      });
      navBtn1HTML.addEventListener('click', ()=>{
        let currentHash = +window.location.hash.slice(7);
        if ((currentHash - 1) > 0) {
          window.location.hash = `${hashes[currentHash - 2]}`;
        
          currentHash = +window.location.hash.slice(7);
        //   Navigation.changeLevelInfo(currentHash)
        }
      });
    }
  }

  render() {
    const navigation:HTMLElement|null = document.querySelector('.nav-list');
    const savedNavList:string|null = localStorage.getItem('savedElement');
    if(navigation&&savedNavList){
      navigation.innerHTML = savedNavList}else{console.log('xxx')}
    this.container.append(this.navigatonContent.render());
    this.container.className = 'navigation col s4 sidenav-fixed';
    return this.container;
  }

}
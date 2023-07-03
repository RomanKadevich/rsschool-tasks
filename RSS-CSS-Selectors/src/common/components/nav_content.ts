
export class NavigationContent {
  private container:HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'navigation__header';
  }
    
  renderNavButtons():HTMLElement[] {
    const navBtns: HTMLElement[] = [];
    const quantityOfButtons = 2;
    for (let i = 0; i < quantityOfButtons; i++) {
      const navBtn: HTMLElement = document.createElement('div');
      navBtn.className = `navBtn navBtn${i}`;
      navBtn.id = `navBtn${i}`;
      navBtns.push(navBtn);
    }
    return navBtns;
  }

  renderLevelInfo():HTMLElement  {
    const levelInfo: HTMLElement = document.createElement('h2');
    levelInfo.textContent = 'Level 1 of 10';
    levelInfo.className = 'level-info';
    return levelInfo;
   
   
  }
  renderNavHeading():HTMLElement {
      const levelHeading: HTMLElement = document.createElement('div');
      levelHeading.className = 'nav-heading';
      levelHeading.append(this.renderNavButtons()[0]);
      levelHeading.append(this.renderNavButtons()[1]);
      levelHeading.append(this.renderLevelInfo());
      return levelHeading;
  }

  renderNavList(quantityOfLevels:number):HTMLElement {
    const levelList: HTMLElement = document.createElement('ul');
    levelList.className = 'nav-list';
    for (let i = 0; i < quantityOfLevels; i +=1){
      const levelItem: HTMLElement = document.createElement('li');
      levelItem.id = `nav-item-${i}`
      levelItem.className = 'nav-item'
      levelItem.textContent = `Level ${i+1}`
      const checkmark = document.createElement('span');
            checkmark.className = 'checkmark';
            levelItem.append(checkmark);
      levelList.append(levelItem)
    }
    return levelList;
}

  render() {
    const maxLevel = 10;
    this.container.append(this.renderNavHeading());
    this.container.append(this.renderNavList(maxLevel));
    return this.container;
  }
  

} 


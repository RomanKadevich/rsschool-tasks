
export class NavigationContent {
  private container:HTMLElement;

  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'navigation__header';
  }
    
  renderNavButtons() {
    const navBtns: HTMLElement[] = [];
    
    for (let i = 0; i < 2; i++) {
      const navBtn: HTMLElement = document.createElement('div');
      navBtn.className = `navBtn navBtn${i}`;
      navBtn.id = `navBtn${i}`;
      navBtns.push(navBtn);
    }
    // const [navBtn1, navBtn2] = navBtns;
    return navBtns;
  }

  renderLevelInfo() {
    const levelInfo: HTMLElement = document.createElement('h2');
    levelInfo.textContent = 'Level 1 of 10';
    levelInfo.className = 'level-info';
    return levelInfo;
   
   
  }
  renderNavHeading(){
      const levelHeading: HTMLElement = document.createElement('div');
      levelHeading.className = 'nav-heading';
      levelHeading.append(this.renderNavButtons()[0]);
      levelHeading.append(this.renderNavButtons()[1]);
      levelHeading.append(this.renderLevelInfo());
      return levelHeading;
  }

  renderNavList(quantityOfLevels:number){
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
    this.container.append(this.renderNavHeading());
    this.container.append(this.renderNavList(10));
    return this.container;
  }
  

} 



export class NavigationHeader {
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

  render() {
    this.container.append(this.renderLevelInfo());
    this.container.append(this.renderNavButtons()[0]);
    this.container.append(this.renderNavButtons()[1]);
    return this.container;
  }
  

} 


export class NavigationHeader {
    private container:HTMLElement;
    constructor(){
        this.container = document.createElement('div');
        this.container.className = "navigation__header";
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
    return this.container;   
  }

} 

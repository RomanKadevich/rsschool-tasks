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

  render() {
    this.renderNavButtons();
    this.container.className = 'navigation col s4 offset-s8';
    return this.container;
  }
}
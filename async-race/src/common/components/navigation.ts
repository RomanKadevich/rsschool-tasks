export class Navigation {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement("nav");
  }

  renderNavButtons(): void {
    const navBtns: HTMLElement[] = [];
    const quantityOfButtons = 2;
    for (let i = 0; i < quantityOfButtons; i++) {
      const navBtn: HTMLElement = document.createElement("button");
      navBtn.className = `navBtn navBtn${i}`;
      navBtn.id = `navBtn${i}`;
      navBtns.push(navBtn);
      navBtn.textContent = i === 0 ? "TO GARAGE" : "TO WINNERS";
    }
    this.container.append(navBtns[0]);
    this.container.append(navBtns[1]);
  }

  render(): HTMLElement {
    this.renderNavButtons();
    return this.container;
  }
}

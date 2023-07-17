import { createHTMLElement } from "../templates/createElementFunc";

export class Navigation {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement("nav");
    this.container.className = "navigation";
  }

  renderNavButtons(): void {
    const navBtns: HTMLElement[] = [];
    const quantityOfButtons = 2;
    for (let i = 0; i < quantityOfButtons; i++) {
      const navBtn: HTMLElement = createHTMLElement(
        "button",
        `navigation__btn navigation__btn-${i} button`,
        `navigation__btn-${i}`,
      );
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

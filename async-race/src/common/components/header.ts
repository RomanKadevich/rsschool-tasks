import { Navigation } from "./navigation";

export class Header {
  private container: HTMLElement;

  private navigation: Navigation;

  constructor() {
    this.container = document.createElement("header");
    this.navigation = new Navigation();
  }

  render() {
    this.container.append(this.navigation.render());
    return this.container;
  }
}

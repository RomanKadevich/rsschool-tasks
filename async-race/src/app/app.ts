import { Header } from "../common/components/header";

export class App {
  private container: HTMLElement;

  private header: Header;

  constructor() {
    this.container = document.body;
    this.header = new Header();
  }

  run(): void {
    this.container.append(this.header.render());
  }
}

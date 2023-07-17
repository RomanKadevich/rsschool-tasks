import { Header } from "../common/components/header";
import { Garage } from "../common/components/garage";

export class App {
  private container: HTMLElement;

  private header: Header;

  private garage: Garage;

  constructor() {
    this.container = document.body;
    this.header = new Header();
    this.garage = new Garage();
  }

  run(): void {
    this.container.append(this.header.render());
    this.container.append(this.garage.render());
  }
}

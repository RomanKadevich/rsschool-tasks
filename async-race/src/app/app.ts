import { Header } from "../common/components/header";
import { Garage } from "../common/components/garage";
import { ControlPanel } from "../common/components/controlPanel";

export class App {
  private container: HTMLElement;

  private header: Header;

  private garage: Garage;

  constructor() {
    this.container = document.body;
    this.header = new Header();
    this.garage = new Garage();
  }

  loadGarage(): void {
    const garageButton: HTMLElement | null =
      document.querySelector("#navigation__btn-0");
    const garage: HTMLElement | null = document.querySelector("#garage");
    const handle = () => {
      garage!.innerHTML = "";
      if (garage) {
        const serializedItems: string | null =
          localStorage.getItem("savedItems");
        if (serializedItems) {
          const items = JSON.parse(serializedItems);
          this.container.append(this.garage.render(items));
        }
      }
    };
    if (garageButton) {
      garageButton.addEventListener("click", handle);
      // garageButton.removeEventListener('click',handle )
    }
  }

  loadWinners(): void {
    const winnerButton: HTMLElement | null =
      document.querySelector("#navigation__btn-1");
    const garage: HTMLElement | null = document.querySelector("#garage");
    const handle = () => {
      if (garage) {
        while (garage.firstChild) {
          garage.firstChild.remove();
        }
      }
    };
    if (winnerButton) {
      winnerButton.addEventListener("click", handle);
      // winnerButton.removeEventListener('click',handle )
    }
  }

  run() {
    this.container.append(this.header.render());
    this.container.append(this.garage.render());
    this.loadGarage();
    this.loadWinners();
    ControlPanel.clearGarage();
    ControlPanel.createNewCar();
  }
}

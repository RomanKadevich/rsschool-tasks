/* eslint-disable import/no-cycle */
import { Header } from "../common/components/header";
import { Garage } from "../common/components/garage";
import { ControlPanel } from "../common/components/controlPanel";
import { NavigationGarage } from "../common/components/navGarageButton";
import { Winners } from "../common/components/winners";
import { RaceAction } from "../common/ApiClasses/raceAction";

export class App {
  private container: HTMLElement;

  private header: Header;

  private garage: Garage;

  private winners: Winners;

  private navigationGarage: NavigationGarage;

  private raceAction: RaceAction;

  constructor() {
    this.container = document.body;
    this.header = new Header();
    this.garage = new Garage();
    this.navigationGarage = new NavigationGarage();
    this.winners = new Winners();
    this.raceAction = new RaceAction();
  }

  loadGarage(): void {
    const garageButton: HTMLButtonElement | null =
      document.querySelector("#navigation__btn-0");
    const garage: HTMLElement | null = document.querySelector(".garage");
    const handle = () => {
      if (garage) {
        garage.remove();
        while (garage.firstChild) {
          garage.firstChild.remove();
        }
      }
      const winners: NodeListOf<Element> | null =
        document.querySelectorAll(".winners");
      if (winners) {
        winners.forEach((winner) => winner.remove());
      }
      if (!garage) {
        this.container.append(this.garage.render());
      } else {
        garage.remove();
      }
      this.container.append(this.garage.render());
      const navigationBtn1: HTMLButtonElement | null = document.querySelector(
        "#navigation-garage__btn-1",
      );
      if (navigationBtn1) {
        navigationBtn1.disabled = false;
      }
      const navigationBtn0: HTMLButtonElement | null = document.querySelector(
        "#navigation-garage__btn-0",
      );
      if (navigationBtn0) {
        navigationBtn0.disabled = false;
      }
      if (garageButton) {
        garageButton.disabled = true;
      }
      const winnerButton: HTMLButtonElement | null =
        document.querySelector("#navigation__btn-1");
      if (winnerButton) {
        winnerButton.disabled = false;
      }
      const controlPanel: HTMLElement | null =
        document.querySelector(".controlPanel");
      if (controlPanel) {
        controlPanel.classList.remove("disactive");
      }
    };
    if (garageButton) {
      garageButton.removeEventListener("click", handle);
      garageButton.addEventListener("click", handle);
      garageButton.disabled = true;
    }
  }

  loadWinners(): void {
    const winnerButton: HTMLButtonElement | null =
      document.querySelector("#navigation__btn-1");
    const winner: HTMLElement | null = document.querySelector(".winners");
    const winners: NodeListOf<Element> | null =
      document.querySelectorAll(".winners");
    const handle = (): void => {
      const garages: NodeListOf<Element> | null =
        document.querySelectorAll(".garage");
      if (garages) {
        garages.forEach((garage) => garage.remove());
      }

      if (winners) {
        winners.forEach((el) => {
          el.innerHTML = "";
        });
      }
      if (winner) {
        while (winner.firstChild) {
          winner.firstChild.remove();
        }
      }
      const garageButton: HTMLButtonElement | null =
        document.querySelector("#navigation__btn-0");
      if (garageButton) {
        garageButton.disabled = false;
      }
      if (winnerButton) {
        winnerButton.disabled = true;
      }
      const controlPanel: HTMLElement | null =
        document.querySelector(".controlPanel");
      if (controlPanel) {
        controlPanel.classList.add("disactive");
      }
      const navigationBtn1: HTMLButtonElement | null = document.querySelector(
        "#navigation-garage__btn-1",
      );
      if (navigationBtn1) {
        navigationBtn1.disabled = true;
      }
      const navigationBtn0: HTMLButtonElement | null = document.querySelector(
        "#navigation-garage__btn-0",
      );
      if (navigationBtn0) {
        navigationBtn0.disabled = true;
      }
      this.container.append(this.winners.render());
    };
    if (winnerButton) {
      winnerButton.removeEventListener("click", handle);
      winnerButton.addEventListener("click", handle);
    }
  }

  run(): void {
    this.container.append(this.header.render());
    this.container.append(this.navigationGarage.render());
    this.container.append(this.garage.render());
    ControlPanel.createNewCar();
    Garage.removeCar();
    ControlPanel.updateCar();
    ControlPanel.setRandomCars();
    this.loadGarage();
    this.loadWinners();
    NavigationGarage.pagination();
    this.raceAction.startAnimation();
    this.raceAction.restart();
    this.raceAction.allCarAnimation();
    this.raceAction.allCarAnimationRestart();
  }
}

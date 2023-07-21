import { setNewCar } from "../AsyncFunctions/setNewCar";
import { createHTMLElement } from "../DOMFunctions/createElementFunc";
import { createInputForm } from "../DOMFunctions/createInputForm";
import { createSubmitForm } from "../DOMFunctions/createSubmitForm";
import { Garage } from "./garage";
import { jsonBody } from "../../types";
import { updateCar } from "../AsyncFunctions/updateCar";

export class ControlPanel {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement("div");
    this.container.className = "controlPanel";
  }

  renderControlPanels(): void {
    const createPanel = <HTMLFormElement>createInputForm("create", "CREATE");
    this.container.append(createPanel);
    const updatePanel = <HTMLFormElement>createInputForm("update", "UPDATE");
    this.container.append(updatePanel);
  }

  renderControlButtons(): void {
    const controlButtons = <HTMLElement>(
      createHTMLElement("div", "controlPanel__buttons buttons")
    );
    const raceButton = <HTMLFormElement>createSubmitForm("race", "RACE", "get");
    const resetButton = <HTMLFormElement>(
      createSubmitForm("buttons__reset", "RESET", "DELETE")
    );
    const generateButton = <HTMLFormElement>(
      createSubmitForm("buttons__generate", "GENERATE CARS", "get")
    );
    controlButtons.append(raceButton);
    controlButtons.append(resetButton);
    controlButtons.append(generateButton);
    this.container.append(controlButtons);
  }

  static async createNewCar() {
    const form: HTMLFormElement | null = document.querySelector(
      ".controlPanel__create",
    );
    const container = document.body;
    if (form) {
      form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const jsonData: jsonBody = { color: "", name: "" };

        formData.forEach((value, key) => {
          jsonData[key as keyof jsonBody] = value as string;
        });
        await setNewCar(jsonData);
        const input: HTMLFormElement | null =
          document.querySelector("#create__input");
        if (input) {
          input.value = "";
        }
        const inputColor: HTMLFormElement | null = document.querySelector(
          "#create__input-color",
        );
        if (inputColor) {
          inputColor.value = "#D5F0C7";
        }
        const garage: Garage = new Garage();
        container.lastChild?.remove();
        container.append(garage.render());
      });
    }
  }

  static updateCar() {
    // const container = document.body;
    let id = 0;
    document.addEventListener("click", (event: MouseEvent) => {
      const target = event.target as HTMLButtonElement;
      if (target.classList.contains("select-button")) {
        id = +target.id.slice(7);
        console.log(id);
        // const garage: Garage = new Garage();
        // container.lastChild?.remove();
        // container.append(garage.render());
      }
    });
    const form: HTMLFormElement | null = document.querySelector(
      ".controlPanel__update",
    );
    const container = document.body;
    if (form) {
      form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        // const jsonData: jsonBody = { color: "", name: "" };
        const newJsonData: jsonBody = {};

        formData.forEach((value, key) => {
          if (!(value === "") && !(value === "#d5f0c7")) {
            newJsonData[key as keyof jsonBody] = value as string;
            console.log(JSON.stringify(newJsonData));
          }
        });
        console.log(JSON.stringify(newJsonData.color));
        console.log(JSON.stringify(newJsonData.name));
        console.log(JSON.stringify(newJsonData));
        await updateCar(id, newJsonData);
        const input: HTMLFormElement | null =
          document.querySelector("#update__input");
        if (input) {
          input.value = "";
        }
        const inputColor: HTMLFormElement | null = document.querySelector(
          "#update__input-color",
        );
        if (inputColor) {
          inputColor.value = "#D5F0C7";
        }
        const garage: Garage = new Garage();
        container.lastChild?.remove();
        container.append(garage.render());
      });
    }
  }

  render(): HTMLElement {
    this.renderControlPanels();
    this.renderControlButtons();
    return this.container;
  }
}

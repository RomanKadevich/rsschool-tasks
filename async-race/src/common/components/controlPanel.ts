import { setNewCar } from "../AsyncFunctions/setNewCar";
import { createHTMLElement } from "../DOMFunctions/createElementFunc";
import { createInputForm } from "../DOMFunctions/createInputForm";
import { createSubmitForm } from "../DOMFunctions/createSubmitForm";
import { Car } from "./garage";

export class ControlPanel {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement("div");
    this.container.className = "controlPanel";
  }

  renderControlPanels(): void {
    const createPanel = <HTMLFormElement>(
      createInputForm("create", "CREATE", "POST")
    );
    this.container.append(createPanel);
    const updatePanel = <HTMLFormElement>(
      createInputForm("update", "UPDATE", "post")
    );
    this.container.append(updatePanel);
  }

  renderControlButtons(): void {
    const controlButtons = <HTMLElement>(
      createHTMLElement("div", "controlPanel__buttons buttons")
    );
    const raceButton = <HTMLFormElement>createSubmitForm("race", "RACE", "get");
    const resetButton = <HTMLFormElement>(
      createSubmitForm("buttons__reset", "RESET", "get")
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
    const inputButton: HTMLButtonElement | null =
      document.querySelector("#create__button");

    if (inputButton) {
      inputButton.addEventListener("click", async () => {
        const input: HTMLInputElement | null =
          document.querySelector("#create__input");
        const inputColor: HTMLInputElement | null = document.querySelector(
          "#create__input-color",
        );
        if (input && inputColor) {
          const newCar: Car = {
            color: `${inputColor.value}`,
            name: `${input.value}`,
          };
          await setNewCar(newCar);
        }
      });
    }
  }

  render(): HTMLElement {
    this.renderControlPanels();
    this.renderControlButtons();
    return this.container;
  }
}

import { setNewCar } from "../AsyncFunctions/setNewCar";
import { createHTMLElement } from "../DOMFunctions/createElementFunc";
import { createInputForm } from "../DOMFunctions/createInputForm";
import { createSubmitForm } from "../DOMFunctions/createSubmitForm";

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
    const form: HTMLFormElement | null = document.querySelector(
      ".controlPanel__create",
    );

    if (form) {
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        interface json {
          color: string;
          name: string;
        }

        const formData = new FormData(form);
        const jsonData: json = { color: "", name: "" };

        formData.forEach((value, key) => {
          jsonData[key as keyof json] = value as string;
        });
        await setNewCar(jsonData);
      }); //  });
    }
  }

  render(): HTMLElement {
    this.renderControlPanels();
    this.renderControlButtons();
    return this.container;
  }
}

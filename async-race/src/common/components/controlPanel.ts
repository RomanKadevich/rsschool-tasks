import {
  createInputForm,
  createHTMLElement,
  createSubmitForm,
} from "../templates/createElementFunc";

export class ControlPanel {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement("div");
    this.container.className = "controlPanel";
  }

  renderControlPanels(): void {
    const createPanel = <HTMLFormElement>(
      createInputForm("create", "CREATE", "post")
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

  render(): HTMLElement {
    this.renderControlPanels();
    this.renderControlButtons();
    return this.container;
  }
}

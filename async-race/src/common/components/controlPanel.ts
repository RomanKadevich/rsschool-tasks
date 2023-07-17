import { createHTMLElement } from "../functions/createHTMLElement";

export class ControlPanel {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement("div");
    this.container.className = "controlPanel";
  }

  renderCreatePanel(): void {
    const panel = <HTMLFormElement>(
      createHTMLElement("form", "controlPanel__create create")
    );
    panel.method = "post";
    panel.action = "";
    const input = <HTMLInputElement>(
      createHTMLElement("input", "controlPanel__input")
    );
    input.name = "name";
    input.type = "text";
    const inputColor = <HTMLInputElement>(
      createHTMLElement("input", "controlPanel__input-color")
    );
    inputColor.name = "color";
    inputColor.type = "color";
    const button = <HTMLButtonElement>(
      createHTMLElement("button", "controlPanel__button")
    );
    button.textContent = "CREATE";
    panel.append(input);
    panel.append(inputColor);
    panel.append(button);
    this.container.append(panel);
  }

  render(): HTMLElement {
    this.renderCreatePanel();
    return this.container;
  }
}

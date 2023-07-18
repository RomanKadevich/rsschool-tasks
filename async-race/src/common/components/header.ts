import { Navigation } from "./navigation";
import { ControlPanel } from "./controlPanel";

export class Header {
  private container: HTMLElement;

  private controlPanel: ControlPanel;

  private navigation: Navigation;

  constructor() {
    this.container = document.createElement("header");
    this.navigation = new Navigation();
    this.controlPanel = new ControlPanel();
  }

  render(): HTMLElement {
    this.container.append(this.navigation.render());
    this.container.append(this.controlPanel.render());
    return this.container;
  }
}

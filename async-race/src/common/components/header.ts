import { Navigation } from "./navigation";
import { ControlPanel } from "./controlPanel";

export class Header {
  private container: HTMLElement;

  private navigation: Navigation;

  private controlPanel: ControlPanel;

  constructor() {
    this.container = document.createElement("header");
    this.navigation = new Navigation();
    this.controlPanel = new ControlPanel();
  }

  render() {
    this.container.append(this.navigation.render());
    this.container.append(this.controlPanel.render());
    return this.container;
  }
}

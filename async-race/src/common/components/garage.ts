import {
  createHTMLElement,
  createSubmitForm,
} from "../templates/createElementFunc";

import { createSvg } from "../templates/createSvg";

interface Car {
  name: string;
  color: string;
  id: number;
}
export class Garage {
  private container: HTMLElement;

  constructor() {
    this.container = createHTMLElement("div", "garage");
  }

  renderHeading(amountOfElements: number): void {
    const heading: HTMLElement = createHTMLElement("h1", "garage__heading");
    heading.textContent = `Garage (${amountOfElements})`;
    this.container.append(heading);
  }

  renderInfo(numberOfPage: number): void {
    const info: HTMLElement = createHTMLElement("h2", "garage__info");
    info.textContent = `Page #${numberOfPage}`;
    this.container.append(info);
  }

  renderList(): void {
    const list: HTMLElement = createHTMLElement("ul", "garage__list");
    list.append(
      this.renderItem({
        name: "Ford",
        color: "#ef3c40",
        id: 4,
      }),
    );
    this.container.append(list);
  }

  // Disable 'class-methods-use-this' rule for the 'renderItem' method
  // eslint-disable-next-line class-methods-use-this
  renderItem(car: Car): HTMLElement {
    const item: HTMLElement = createHTMLElement("li", "item");
    const selectButton = <HTMLFormElement>(
      createSubmitForm("item__select", "select", "get")
    );
    const removeButton = <HTMLFormElement>(
      createSubmitForm("item__remove", "remove", "get")
    );
    const startButton = <HTMLFormElement>(
      createSubmitForm("item__start", "A", "get")
    );
    const endButton = <HTMLFormElement>(
      createSubmitForm("item__end", "B", "get")
    );
    const carName: HTMLElement = createHTMLElement("div", "garage__car-name");
    carName.textContent = car.name;
    const carImg: HTMLElement = createHTMLElement("div", "garage__car-img");
    carImg.innerHTML = createSvg(car.color);
    item.append(selectButton);
    item.append(removeButton);
    item.append(carName);
    item.append(startButton);
    item.append(endButton);
    item.append(carImg);
    return item;
  }

  render() {
    this.renderHeading(1);
    this.renderInfo(1);
    this.renderList();
    return this.container;
  }
}

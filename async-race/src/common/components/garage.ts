import { createHTMLElement } from "../functions/createElementFunc";
import { createSubmitForm } from "../functions/createSubmitForm";

import { createSvg } from "../functions/createSvg";

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
    const itemContent: HTMLElement = createHTMLElement("div", "item__content");
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
    const carName: HTMLElement = createHTMLElement("div", "item__car-name");
    carName.textContent = car.name;
    const carImg: HTMLElement = createHTMLElement("div", "item__car-img");
    carImg.innerHTML = createSvg(car.color);
    itemContent.append(selectButton);
    itemContent.append(removeButton);
    itemContent.append(carName);
    itemContent.append(startButton);
    itemContent.append(endButton);
    itemContent.append(carImg);
    item.append(itemContent);
    return item;
  }

  render() {
    this.renderHeading(1);
    this.renderInfo(1);
    this.renderList();
    return this.container;
  }
}

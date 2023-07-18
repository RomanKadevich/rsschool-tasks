import { createHTMLElement } from "../DOMFunctions/createElementFunc";
import { createSubmitForm } from "../DOMFunctions/createSubmitForm";
import { getCars } from "../AsyncFunctions/getCars";

import { createSvg } from "../DOMFunctions/createSvg";

interface Car {
  color: string;
  id: number;
  name: string;
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

  async renderList(itemsFromStorage: Car[] | null = null): Promise<void> {
    try {
      let items: Car[] | null = itemsFromStorage;
      if (!itemsFromStorage) {
        items = await getCars();
        const serializedItems = JSON.stringify(items);
        localStorage.removeItem("savedItems");
        localStorage.setItem("savedItems", serializedItems);
      }
      const list: HTMLElement = createHTMLElement("ul", "garage__list");

      const garage: HTMLElement | null = document.querySelector("#garage");
      if (garage) {
        garage.innerHTML = "";
      }
      items?.forEach((item) => list.append(this.renderItem(item)));

      this.container.append(list);
    } catch (err) {
      console.error(err);
    }
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

  render(itemsFromStorage: Car[] | null = null) {
    this.renderHeading(1);
    this.renderInfo(1);
    this.renderList(itemsFromStorage);
    return this.container;
  }
}

import { createHTMLElement } from "../DOMFunctions/createElementFunc";
import { createSubmitForm } from "../DOMFunctions/createSubmitForm";
import { getCars } from "../AsyncFunctions/getCars";
import { getCountOfCars } from "../AsyncFunctions/getCountOfCars";
import { createSvg } from "../DOMFunctions/createSvg";
import { deleteCar } from "../AsyncFunctions/deleteCar";
import { Car, itemsResponse, QueryParams } from "../../types";

import { NavigationGarage } from "./navGarageButton";

export class Garage {
  private container: HTMLElement;

  constructor() {
    this.container = createHTMLElement("div", "garage");
  }

  async renderHeading(): Promise<void> {
    const heading: HTMLElement = createHTMLElement("h1", "garage__heading");
    heading.textContent = `Garage (${await getCountOfCars()})`;
    this.container.append(heading);
  }

  renderInfo(numberOfPage: number): void {
    const info: HTMLElement = createHTMLElement("h2", "garage__info");
    info.textContent = `Page #${numberOfPage}`;
    this.container.append(info);
  }

  async renderList(items: QueryParams[]): Promise<void> {
    try {
      const itemsRes: itemsResponse<Car> = await getCars(items);
      const list: HTMLElement = createHTMLElement("ul", "garage__list");
      itemsRes.items?.forEach((item) => list.append(this.renderItem(item)));

      this.container.append(list);
    } catch (err) {
      console.error(err);
    }
  }

  // Disable 'class-methods-use-this' rule for the 'renderItem' method
  // eslint-disable-next-line class-methods-use-this
  renderItem(car: Car): HTMLElement {
    const item: HTMLElement = createHTMLElement("li", "item", `item-${car.id}`);
    const itemContent: HTMLElement = createHTMLElement("div", "item__content");
    const selectButton = <HTMLButtonElement>(
      createHTMLElement("button", "select-button button", `select-${car.id}`)
    );
    selectButton.textContent = "select";
    const removeButton = <HTMLButtonElement>(
      createHTMLElement("button", "remove-button button", `remove-${car.id}`)
    );
    removeButton.textContent = "remove";
    const startButton = <HTMLFormElement>(
      createSubmitForm("item__start", "A", "get")
    );
    const endButton = <HTMLFormElement>(
      createSubmitForm("item__end", "B", "get")
    );
    const carName: HTMLElement = createHTMLElement("div", "item__car-name");
    carName.textContent = car.name || "";
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

  static removeCar() {
    const container = document.body;
    let id = 0;
    document.addEventListener("click", (event: MouseEvent) => {
      const target = event.target as HTMLButtonElement;
      if (target.classList.contains("remove-button")) {
        id = +target.id.slice(7);
        console.log(id);
        deleteCar(id);
        const garage: Garage = new Garage();
        container.lastChild?.remove();
        container.append(garage.render());
      }
    });
  }

  render(currentPage = 1) {
    const itemsPerPage = 7;
    this.renderHeading();
    this.renderInfo(1);
    console.log([
      { key: "_page", value: currentPage },
      { key: "_limit", value: itemsPerPage },
    ]);
    this.renderList([
      { key: "_page", value: currentPage },
      { key: "_limit", value: itemsPerPage },
    ]);

    // NavigationGarage.pagination();
    return this.container;
  }
}

import { createHTMLElement } from "../DOMFunctions/createElementFunc";
import { createSubmitForm } from "../DOMFunctions/createSubmitForm";
import { getCars } from "../APIFunctions/getCars";
import { getCountOfCars } from "../APIFunctions/getCountOfCars";
import { createSvg } from "../DOMFunctions/createSvg";
import { deleteCar } from "../APIFunctions/deleteCar";
import { Car, itemsResponse, QueryParams } from "../../types";
import { deleteWinner } from "../APIFunctions/deleteWiner";

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
      throw new Error();
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
    const startButton:HTMLElement = createHTMLElement("button", "item__start button", `item__start-${car.id}`);
    startButton.textContent = "A";


    const endButton = <HTMLButtonElement>createHTMLElement("button", "item__end button", `item__end-${car.id}`);
    endButton.textContent = "B";
    endButton.disabled = true;
    const carName: HTMLElement = createHTMLElement("div", "item__car-name");
    carName.textContent = car.name || "";
    const carImg: HTMLElement = createHTMLElement("div", "item__car-img", `item__car-img-${car.id}`);
    carImg.innerHTML = createSvg(car.color);
    const endImg: HTMLElement = createHTMLElement("div", "item__flag-img", `item__flag-img-${car.id}`);
    const flag = () => {
      const svg = `<svg width="31" height="60" viewBox="0 0 31 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="2" width="2" height="58" fill="#9E4E4E"/>
      <path d="M30.8278 17.4543L8.09547 32.3266L8.00646 2.71908L30.8278 17.4543Z" fill="#F40707"/>
      </svg>`;
      return svg;
    };
    endImg.innerHTML = flag();
    itemContent.append(selectButton);
    itemContent.append(removeButton);
    itemContent.append(carName);
    itemContent.append(startButton);
    itemContent.append(endButton);
    itemContent.append(carImg);
    item.append(itemContent);
    item.append(endImg);
    return item;
  }

  static removeCar() {
    const container = document.body;
    let id = 0;
    document.addEventListener("click", (event: MouseEvent) => {
      const target = event.target as HTMLButtonElement;
      if (target.classList.contains("remove-button")) {
        id = +target.id.slice(7);
        deleteCar(id);
        deleteWinner(id);
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
    this.renderList([
      { key: "_page", value: currentPage },
      { key: "_limit", value: itemsPerPage },
    ]);

    // NavigationGarage.pagination();
    return this.container;
  }
}

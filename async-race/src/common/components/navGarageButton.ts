import { createHTMLElement } from "../DOMFunctions/createElementFunc";
import { itemsResponse, Car } from "../../types";
import { Garage } from "./garage";
import { getCars } from "../APIFunctions/getCars";

export class NavigationGarage {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement("div");
    this.container.className = "navigation-garage";
  }

  renderGarageNavButtons(): void {
    const navigationGarageBtns: HTMLElement[] = [];
    const quantityOfButtons = 2;
    for (let i = 0; i < quantityOfButtons; i++) {
      const navigationGarageBtn: HTMLElement = createHTMLElement(
        "button",
        `navigation-garage__btn navigation-garage__btn-${i} button`,
        `navigation-garage__btn-${i}`,
      );
      navigationGarageBtns.push(navigationGarageBtn);
      navigationGarageBtn.textContent = i === 0 ? "PREV" : "NEXT";
    }
    this.container.append(navigationGarageBtns[0]);
    this.container.append(navigationGarageBtns[1]);
  }

  static pagination(): void {
    const nextButton: HTMLButtonElement | null = document.querySelector(
      ".navigation-garage__btn-1",
    );
    const prevButton: HTMLButtonElement | null = document.querySelector(
      ".navigation-garage__btn-0",
    );
    const container: HTMLElement = document.body;

    const loadNextPage = async (): Promise<void> => {
      const garageInfo = document.querySelector("#garage__info");
      let currentPage = 0;
      if (garageInfo) {
        currentPage = Number(garageInfo.textContent?.slice(6));
      }

      const itemsPerPage = 7;

      const itemsRes: itemsResponse<Car> = await getCars([
        { key: "_page", value: currentPage },
        { key: "_limit", value: itemsPerPage },
      ]);
      const countOfItems: number = itemsRes.count;
      const limitPage: number = Math.ceil(countOfItems / 7);

      if (currentPage < limitPage) {
        if (prevButton) {
          prevButton.disabled = false;
        }
        currentPage += 1;
        const garage: Garage = new Garage();
        container.lastChild?.remove();
        container.append(garage.render(currentPage));
        const garageInf = document.querySelector("#garage__info");
        if (garageInf) {
          garageInf.textContent = `Page #${currentPage}`;
        }
      }
      if (currentPage === limitPage) {
        if (nextButton) {
          nextButton.disabled = true;
        }
      }
    };
    const loadPreviousPage = (): void => {
      const garageInfo = document.querySelector("#garage__info");
      let currentPage = 0;
      if (garageInfo) {
        currentPage = Number(garageInfo.textContent?.slice(6));
      }
      if (currentPage > 1) {
        if (nextButton) {
          nextButton.disabled = false;
        }
        currentPage -= 1;
        const garage: Garage = new Garage();
        container.lastChild?.remove();
        container.append(garage.render(currentPage));
        const garageInf = document.querySelector("#garage__info");
        if (garageInf) {
          garageInf.textContent = `Page #${currentPage}`;
        }
      }
      if (currentPage === 1) {
        if (prevButton) {
          prevButton.disabled = true;
        }
      }
    };
    if (nextButton) {
      nextButton.addEventListener("click", () => loadNextPage());
    }
    if (prevButton) {
      prevButton.addEventListener("click", () => loadPreviousPage());
    }
  }

  render(): HTMLElement {
    this.renderGarageNavButtons();
    return this.container;
  }
}

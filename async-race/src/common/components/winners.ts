import { createHTMLElement } from "../DOMFunctions/createElementFunc";
import { getCars } from "../APIFunctions/getCars";
import { createSvg } from "../DOMFunctions/createSvg";
import { itemsResponse, QueryParams, Winner } from "../../types";

import { getWinners } from "../APIFunctions/getWinnerss";
import { getCountOfWinners } from "../APIFunctions/getCountOfWinners";

export class Winners {
  private container: HTMLElement;

  constructor() {
    this.container = createHTMLElement("div", "winners");
  }

  renderInfo(numberOfPage: number): void {
    const info: HTMLElement = createHTMLElement("h2", "Winner__info");
    info.textContent = `Page #${numberOfPage}`;
    this.container.append(info);
  }

  async renderList(items: QueryParams[]): Promise<void> {
    try {
      const itemsRes: itemsResponse<Winner> = await getWinners(items);
      const list: HTMLElement = createHTMLElement("ul", "winner__list");
      itemsRes.items?.forEach(async (item) => {
        list.append(await this.renderItem(item, item.id));
      });
      this.container.append(this.renderHederOfTable());
      this.container.append(list);
    } catch (err) {
      throw new Error();
    }
  }

  // Disable 'class-methods-use-this' rule for the 'renderItem' method
  // eslint-disable-next-line class-methods-use-this
  async renderItem(winner: Winner, id: number): Promise<HTMLElement> {
    const winnerItem: HTMLElement = createHTMLElement(
      "li",
      "winner",
      `winner-${winner.id}`,
    );
    const winnerContent: HTMLElement = createHTMLElement(
      "div",
      "winner__content",
    );
    const numberWinner = <HTMLElement>(
      createHTMLElement("div", "winner__number", `number-${winner.id}`)
    );
    numberWinner.textContent = "1";
    const car = await getCars([{ key: "id", value: id }]);
    const carImg: HTMLElement = createHTMLElement("div", "winner__car-img");
    carImg.innerHTML = createSvg(car.items[0].color);
    const carName: HTMLElement = createHTMLElement("div", "winner__car-name");
    carName.textContent = car.items[0].name || "";
    const wins: HTMLElement = createHTMLElement("div", "winner__wins");
    const besttime: HTMLElement = createHTMLElement("div", "winner__besttime");
    winnerContent.append(numberWinner);
    winnerContent.append(carImg);
    winnerContent.append(carName);
    winnerContent.append(wins);
    winnerContent.append(besttime);
    winnerItem.append(winnerContent);
    return winnerItem;
  }

  // Disable 'class-methods-use-this' rule for the 'renderHederOfTable' method
  // eslint-disable-next-line class-methods-use-this
  renderHederOfTable(): HTMLElement {
    const table: HTMLElement = createHTMLElement("div", "table");

    const tableHeader: HTMLElement = createHTMLElement("div", "table__header");
    const headers: string[] = ["#", "Car", "Name", "Wins", "Best Times (sec)"];
    headers.forEach((header) => {
      const th: HTMLElement = createHTMLElement("div", "table__header-cell");
      th.textContent = header;
      tableHeader.append(th);
    });
    table.append(tableHeader);
    return table;
  }

  async renderHeading(): Promise<void> {
    const heading: HTMLElement = createHTMLElement("h1", "winner__heading");
    heading.textContent = `Winners (${await getCountOfWinners()})`;
    this.container.append(heading);
  }

  render(currentPage = 1) {
    // const itemsPerPage = 7;
    this.container.innerHTML = "";
    this.renderHeading();
    this.renderInfo(1);
    this.renderList([
      { key: "_page", value: 0 },
      { key: "_limit", value: 10 },
    ]);
    // console.log([
    //   { key: "_page", value: currentPage },
    //   { key: "_limit", value: itemsPerPage },
    // ]);

    // NavigationGarage.pagination();

    return this.container;
  }
}

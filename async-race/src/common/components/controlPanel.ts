/* eslint-disable import/no-cycle */
import { setNewCar } from "../APIFunctions/setNewCar";
import { createHTMLElement } from "../DOMFunctions/createElementFunc";
import { createInputForm } from "../DOMFunctions/createInputForm";
import { createSubmitForm } from "../DOMFunctions/createSubmitForm";
import { jsonBody, Car } from "../../types";
import { updateCar } from "../APIFunctions/updateCar";
import { App } from "../../app/app";

export class ControlPanel {
  private container: HTMLElement;

  constructor() {
    this.container = document.createElement("div");
    this.container.className = "controlPanel";
  }

  renderControlPanels(): void {
    const createPanel = <HTMLFormElement>createInputForm("create", "CREATE");
    this.container.append(createPanel);
    const updatePanel = <HTMLFormElement>createInputForm("update", "UPDATE");
    this.container.append(updatePanel);
  }

  renderControlButtons(): void {
    const controlButtons = <HTMLElement>(
      createHTMLElement("div", "controlPanel__buttons buttons")
    );
    const raceButton = <HTMLFormElement>createSubmitForm("race", "RACE", "get");
    const resetButton = <HTMLFormElement>(
      createSubmitForm("buttons__reset", "RESET", "DELETE")
    );
    const generateButton = <HTMLFormElement>(
      createSubmitForm("buttons__generate", "GENERATE CARS", "get")
    );
    controlButtons.append(raceButton);
    controlButtons.append(resetButton);
    controlButtons.append(generateButton);
    this.container.append(controlButtons);
  }

  static async createNewCar(): Promise<void> {
    const form: HTMLFormElement | null = document.querySelector(
      ".controlPanel__create",
    );
    const container: HTMLElement = document.body;
    if (form) {
      form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData: FormData = new FormData(form);
        const jsonData: jsonBody = { color: "", name: "" };

        formData.forEach((value, key) => {
          jsonData[key as keyof jsonBody] = value as string;
        });
        await setNewCar(jsonData);
        const input: HTMLFormElement | null =
          document.querySelector("#create__input");
        if (input) {
          input.value = "";
        }
        const inputColor: HTMLFormElement | null = document.querySelector(
          "#create__input-color",
        );
        if (inputColor) {
          inputColor.value = "#D5F0C7";
        }
        container.innerHTML = "";
        const app: App = new App();
        app.run();
      });
    }
  }

  static updateCar(): void {
    let id = 0;
    document.addEventListener("click", (event: MouseEvent): void => {
      const target = event.target as HTMLButtonElement;
      if (target.classList.contains("select-button")) {
        id = +target.id.slice(7);
      }
    });
    const form: HTMLFormElement | null = document.querySelector(
      ".controlPanel__update",
    );
    const container: HTMLElement = document.body;
    if (form) {
      form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData: FormData = new FormData(form);
        const newJsonData: jsonBody = {};

        formData.forEach((value, key) => {
          if (!(value === "") && !(value === "#d5f0c7")) {
            newJsonData[key as keyof jsonBody] = value as string;
          }
        });
        await updateCar(id, newJsonData);
        const input: HTMLFormElement | null =
          document.querySelector("#update__input");
        if (input) {
          input.value = "";
        }
        const inputColor: HTMLFormElement | null = document.querySelector(
          "#update__input-color",
        );
        if (inputColor) {
          inputColor.value = "#D5F0C7";
        }
        container.innerHTML = "";
        const app: App = new App();
        app.run();
      });
    }
  }

  static setRandomCars(): void {
    const form: HTMLFormElement | null =
      document.querySelector("#buttons__generate");
    const brandNames: string[] = [
      "Tesla",
      "Ford",
      "Chevrolet",
      "Toyota",
      "Honda",
      "Nissan",
      "BMW",
      "Mercedes-Benz",
      "Audi",
      "Lamborghini",
      "Ferrari",
      "Porsche",
      "Subaru",
      "Volkswagen",
      "Mitsubishi",
      "Hyundai",
      "Volvo",
      "Mazda",
      "Kia",
      "Jaguar",
      "Land Rover",
      "Jeep",
      "Lexus",
      "Buick",
      "Chrysler",
      "Dodge",
      "GMC",
      "Lincoln",
      "Cadillac",
    ];
    const modelNames: string[] = [
      "Model S",
      "Mustang",
      "Civic",
      "Camry",
      "Leaf",
      "X5",
      "C-Class",
      "A4",
      "Huracan",
      "488 GTB",
      "911",
      "Outback",
      "Golf",
      "Outlander",
      "Santa Fe",
      "S60",
      "MX-5 Miata",
      "Soul",
      "F-PACE",
      "Range Rover",
      "Wrangler",
      "RX 350",
      "Enclave",
      "300",
      "Challenger",
      "Sierra",
      "Navigator",
      "Escalade",
    ];

    const colors: string[] = [
      "#FF0000",
      "#0000FF",
      "#00FF00",
      "#FFFF00",
      "#000000",
      "#FFFFFF",
      "#C0C0C0",
      "#808080",
      "#FFA500",
      "#800080",
      "#FFC0CB",
      "#A52A2A",
      "#FFD700",
      "#CD7F32",
      "#B87333",
      "#008080",
      "#000080",
      "#800000",
      "#00FF00",
      "#FF00FF",
      "#40E0D0",
      "#708090",
      "#4B0082",
      "#F5F5DC",
      "#808000",
      "#800000",
      "#98FF98",
      "#E6E6FA",
      "#36454F",
    ];

    const container: HTMLElement = document.body;
    const getRandomIndex = (maxIndex: number): number => {
      return Math.floor(Math.random() * maxIndex);
    };

    const createRandomCars = async (): Promise<void> => {
      const countOfElements = 100;
      const promises = [];

      for (let i = 0; i < countOfElements; i++) {
        const brand: string = brandNames[getRandomIndex(brandNames.length)];
        const model: string = modelNames[getRandomIndex(modelNames.length)];
        const color: string = colors[getRandomIndex(colors.length)];
        const carName: Car = {
          color: `${color}`,
          name: `${brand} ${model}`,
        };
        promises.push(setNewCar(carName));
      }

      await Promise.all(promises);
    };

    if (form) {
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        await createRandomCars();
        container.innerHTML = "";
        const app = new App();
        app.run();
      });
    }
  }

  render(): HTMLElement {
    this.renderControlPanels();
    this.renderControlButtons();
    return this.container;
  }
}

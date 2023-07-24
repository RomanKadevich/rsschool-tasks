import { setNewCar } from "../APIFunctions/setNewCar";
import { createHTMLElement } from "../DOMFunctions/createElementFunc";
import { createInputForm } from "../DOMFunctions/createInputForm";
import { createSubmitForm } from "../DOMFunctions/createSubmitForm";
import { jsonBody } from "../../types";
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

  static async createNewCar() {
    const form: HTMLFormElement | null = document.querySelector(
      ".controlPanel__create",
    );
    const container = document.body;
    if (form) {
      form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
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
        const app = new App();
        app.run();
      });
    }
  }

  static updateCar() {
    let id = 0;
    document.addEventListener("click", (event: MouseEvent) => {
      const target = event.target as HTMLButtonElement;
      if (target.classList.contains("select-button")) {
        id = +target.id.slice(7);
      }
    });
    const form: HTMLFormElement | null = document.querySelector(
      ".controlPanel__update",
    );
    const container = document.body;
    if (form) {
      form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        // const jsonData: jsonBody = { color: "", name: "" };
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
        const app = new App();
        app.run();
      });
    }
  }

  static setRandomCars() {
    const form: HTMLFormElement | null =
      document.querySelector("#buttons__generate");
    const brandNames = [
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
    const modelNames = [
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

    const colors = [
      "#FF0000", // Red
      "#0000FF", // Blue
      "#00FF00", // Green
      "#FFFF00", // Yellow
      "#000000", // Black
      "#FFFFFF", // White
      "#C0C0C0", // Silver
      "#808080", // Gray
      "#FFA500", // Orange
      "#800080", // Purple
      "#FFC0CB", // Pink
      "#A52A2A", // Brown
      "#FFD700", // Gold
      "#CD7F32", // Bronze
      "#B87333", // Copper
      "#008080", // Teal
      "#000080", // Navy
      "#800000", // Burgundy
      "#00FF00", // Lime
      "#FF00FF", // Magenta
      "#40E0D0", // Turquoise
      "#708090", // Slate
      "#4B0082", // Indigo
      "#F5F5DC", // Beige
      "#808000", // Olive
      "#800000", // Maroon
      "#98FF98", // Mint
      "#E6E6FA", // Lavender
      "#36454F", // Charcoal
    ];

    const container = document.body;
    function getRandomIndex(maxIndex: number) {
      return Math.floor(Math.random() * maxIndex);
    }

    const createRandomCars = async () => {
      // const randomCars = [];
      const countOfElements = 100;
      for (let i = 0; i < countOfElements; i++) {
        const brand = brandNames[getRandomIndex(brandNames.length)];
        const model = modelNames[getRandomIndex(modelNames.length)];
        const color = colors[getRandomIndex(colors.length)];
        const carName = {
          color: `${color}`,
          name: `${brand} ${model}`,
        };
        await setNewCar(carName);
        // randomCars.push(carName);
      }
      // return randomCars;
    };

    if (form) {
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        await createRandomCars();

        container.innerHTML = "";
        const app = new App();
        app.run();
        // const garage: Garage = new Garage();
        // container.lastChild?.remove();
        // container.append(garage.render());
      });
    }
  }

  render(): HTMLElement {
    this.renderControlPanels();
    this.renderControlButtons();
    return this.container;
  }
}

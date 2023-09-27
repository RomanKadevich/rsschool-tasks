import { raceApi } from "../APIFunctions/raceAPI";
import { startEngine } from "../../types";
import { getCountOfCars } from "../APIFunctions/getCountOfCars";

export class RaceAction {
  private animationFrameId: number | null = null;

  carAnimation(time: number, id: number): void {
    const car: HTMLElement | null = document.getElementById(
      `item__car-img-${id}`,
    );
    const flag: HTMLElement | null = document.getElementById(
      `item__flag-img-${id}`,
    );

    if (car && flag) {
      const flagRect: DOMRect = flag.getBoundingClientRect();
      const targetX: number = flagRect.left;
      const carRect: DOMRect = car.getBoundingClientRect();
      const carX: number = carRect.left;
      const distance: number = targetX - carX;

      let startTime: number;

      const animate = (timestamp: number): void => {
        if (!startTime) startTime = timestamp;
        const progress: number = timestamp - startTime;
        const progressFraction: number = progress / time;

        if (progressFraction < 1) {
          const moveDistance: number = distance * progressFraction;
          car.style.transform = `translateX(${moveDistance}px)`;
          this.animationFrameId = requestAnimationFrame(animate);
        }
      };

      this.animationFrameId = requestAnimationFrame(animate);
    }
  }

  stopAnimation(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
  }

  async doAnimationProcess(
    event: MouseEvent | SubmitEvent,
    id?: number | undefined,
  ): Promise<void> {
    try {
      const target = event.target as HTMLButtonElement;
      let animationId = id;
      if (!animationId) {
        animationId = +target.id.slice("item__start-".length);
      }

      if (target.id === `item__start-${animationId}` || target.id === "race") {
        const end: HTMLButtonElement | null = document.querySelector(
          `#item__end-${animationId}`,
        );
        if (end) {
          end.disabled = false;
        }
        const start: HTMLButtonElement | null = document.querySelector(
          `#item__start-${animationId}`,
        );
        if (start) {
          start.disabled = true;
        }

        const startRace = await raceApi([
          { key: "id", value: animationId },
          { key: "status", value: "started" },
        ]);
        const time = startRace.distance / startRace.velocity;
        this.carAnimation(time, animationId);

        const startDrive: startEngine = await raceApi([
          { key: "id", value: animationId },
          { key: "status", value: "drive" },
        ]);

        if (!startDrive.ok) {
          if (startDrive.status === 500) {
            // eslint-disable-next-line no-console
            console.error(
              `Car has been stopped suddenly. It's engine was broken down.`,
            );
          }
          this.stopAnimation();
        }
      }
    } catch (err) {
      if (err instanceof Error) {
        // eslint-disable-next-line no-console
        console.error(`Something wrong. Problem is "${err}"`);
        this.stopAnimation();
      }
    }
  }

  startAnimation(): void {
    document.addEventListener("click", (event: MouseEvent) =>
      this.doAnimationProcess(event),
    );
  }

  restart(): void {
    document.addEventListener(
      "click",
      async (event: MouseEvent): Promise<void> => {
        try {
          const target = event.target as HTMLButtonElement;
          const id: number = +target.id.slice("item__end-".length);
          if (target.id === `item__end-${id}`) {
            const car: HTMLElement | null = document.getElementById(
              `item__car-img-${id}`,
            );
            const start: HTMLButtonElement | null = document.querySelector(
              `#item__start-${id}`,
            );
            if (start) {
              start.disabled = false;
            }
            target.disabled = true;
            await raceApi([
              { key: "id", value: id },
              { key: "status", value: "stopped" },
            ]);

            if (car) {
              this.stopAnimation();
              car.style.transform = "translateX(0)";
            }
          }
        } catch (err) {
          if (err instanceof Error) {
            // eslint-disable-next-line no-console
            console.error(
              `Car has been stopped suddenly. It's engine was broken down.${err}`,
            );
          }
        }
      },
    );
  }

  allCarAnimation(): void {
    const form: HTMLButtonElement | null = document.querySelector("#race");
    if (form) {
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        try {
          const count: number = await getCountOfCars();
          const promiseStart = [];
          for (let i = 0; i < count; i++) {
            promiseStart.push(
              raceApi([
                { key: "id", value: i + 1 },
                { key: "status", value: "started" },
              ]),
            );
          }
          const arrayOfStartRace = Promise.all(promiseStart);
          const arrayOfTime = (await arrayOfStartRace).map(
            (item) => item.distance / item.velocity,
          );
          for (let i = 0; i < count; i++) {
            const end: HTMLButtonElement | null = document.querySelector(
              `#item__end-${i + 1}`,
            );
            if (end) {
              end.disabled = false;
            }
            const start: HTMLButtonElement | null = document.querySelector(
              `#item__start-${i + 1}`,
            );
            if (start) {
              start.disabled = true;
            }
            this.carAnimation(arrayOfTime[i], i + 1);
          }
          const promiseDrive = [];
          for (let i = 0; i < count; i++) {
            promiseDrive.push(
              raceApi([
                { key: "id", value: i + 1 },
                { key: "status", value: "drive" },
              ]),
            );
          }
          Promise.any(promiseDrive);
        } catch (err) {
          if (err instanceof Error) {
            // eslint-disable-next-line no-console
            console.error(
              `Car has been stopped suddenly. It's engine was broken down.${err}`,
            );
          }
        }
      });
    }
  }

  allCarAnimationRestart(): void {
    const form: HTMLFormElement | null =
      document.querySelector("#buttons__reset");
    if (form) {
      form.addEventListener("submit", async (event) => {
        event.preventDefault();

        try {
          const count: number = await getCountOfCars();
          const promiseRestart = [];
          for (let i = 0; i < count; i++) {
            promiseRestart.push(
              raceApi([
                { key: "id", value: i + 1 },
                { key: "status", value: "stopped" },
              ]),
            );
          }
          await Promise.all(promiseRestart);
          for (let i = 0; i < count; i++) {
            const end: HTMLButtonElement | null = document.querySelector(
              `#item__end-${i + 1}`,
            );
            if (end) {
              end.disabled = true;
            }
            const start: HTMLButtonElement | null = document.querySelector(
              `#item__start-${i + 1}`,
            );
            if (start) {
              start.disabled = false;
            }
            const cars: NodeList | null =
              document.querySelectorAll(`.item__car-img`);
            cars?.forEach((car) => {
              const carElement = car as HTMLElement;
              this.stopAnimation();
              carElement.style.transform = "translateX(0)";
            });
          }
        } catch (err) {
          if (err instanceof Error) {
            // eslint-disable-next-line no-console
            console.error(
              `Car has been stopped suddenly. It's engine was broken down.${err}`,
            );
          }
        }
      });
    }
  }
}

import { raceApi } from "../APIFunctions/raceAPI";

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
      const flagRect = flag.getBoundingClientRect();
      const targetX = flagRect.left;
      const carRect = car.getBoundingClientRect();
      const carX = carRect.left;
      const distance = targetX - carX;

      let startTime: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const progressFraction = progress / time;

        if (progressFraction < 1) {
          const moveDistance = distance * progressFraction;
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

  startAnimation() {
    document.addEventListener("click", async (event: MouseEvent) => {
      try {
        const target = event.target as HTMLButtonElement;
        const id = +target.id.slice("item__start-".length);

        if (target.id === `item__start-${id}`) {
          const end: HTMLButtonElement | null = document.querySelector(
            `#item__end-${id}`,
          );
          if (end) {
            end.disabled = false;
          }
          target.disabled = true;
          const startRace = await raceApi([
            { key: "id", value: id },
            { key: "status", value: "started" },
          ]);
          const time = startRace.distance / startRace.velocity;
          this.carAnimation(time, id);

          const startDrive = await raceApi([
            { key: "id", value: id },
            { key: "status", value: "drive" },
          ]);

          if (!startDrive.ok) {
            this.stopAnimation();
          }
        }
      } catch (err) {
        if (err instanceof Error) {
          // eslint-disable-next-line no-console
          console.error(
            `Car has been stopped suddenly. It's engine was broken down.${err}`,
          );
          // eslint-disable-next-line no-alert
          alert("Car has been stopped suddenly. It's engine was broken down.");
          this.stopAnimation();
        }
      }
    });
  }

  restart() {
    document.addEventListener("click", async (event: MouseEvent) => {
      try {
        const target = event.target as HTMLButtonElement;
        const id = +target.id.slice("item__end-".length);
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
          // eslint-disable-next-line no-alert
          alert("Car has not been stopped");
        }
      }
    });
  }
}

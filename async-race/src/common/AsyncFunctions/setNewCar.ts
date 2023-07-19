import { Car } from "../components/garage";
import { url, path } from "./vars";

export async function setNewCar(car: Car) {
  try {
    await fetch(`${url}${path.garage}}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(car),
    });
  } catch (err) {
    console.error(err);
  }
}

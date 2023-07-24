import { Car, jsonBody } from "../../types";
import { url, path } from "./vars";

export async function setNewCar(car: jsonBody | Car[]) {
  try {
    await fetch(`${url}${path.garage}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    });
  } catch (err) {
    throw new Error();
  }
}

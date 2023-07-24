import { url, path } from "./vars";
import { jsonBody } from "../../types";

export async function updateCar(id: number, car: jsonBody) {
  try {
    await fetch(`${url}${path.garage}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    });
  } catch (err) {
    throw new Error();
  }
}

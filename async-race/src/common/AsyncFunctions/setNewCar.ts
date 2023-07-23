import { Car, jsonBody } from "../../types";
import { url, path } from "./vars";

export async function setNewCar(car: jsonBody | Car[]) {
  try {
    const response = await fetch(`${url}${path.garage}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    });
    console.log(await response.json());
    // return await response.json();
  } catch (err) {
    console.error(err);
  }
}

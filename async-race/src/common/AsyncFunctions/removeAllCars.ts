import { url, path } from "./vars";

export async function removeAllCars() {
  try {
    await fetch(`${url}${path.garage}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([]),
    });
    // return await response.json();
  } catch (err) {
    console.error(err);
  }
}

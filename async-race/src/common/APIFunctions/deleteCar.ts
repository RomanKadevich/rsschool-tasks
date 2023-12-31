import { url, path } from "./vars";

export async function deleteCar(id: number): Promise<void> {
  try {
    await fetch(`${url}${path.garage}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    throw new Error();
  }
}

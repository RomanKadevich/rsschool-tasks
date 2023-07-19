import { url, path } from "./vars";

export async function getCountOfCars() {
  try {
    const res = await fetch(`${url}${path.garage}`);
    const items = await res.json();
    return items.length;
  } catch (err) {
    return err;
  }
}

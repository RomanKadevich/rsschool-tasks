import { url, path } from "./vars";

export async function getCountOfWinners() {
  try {
    const res = await fetch(`${url}${path.winner}`);
    const items = await res.json();
    return items.length;
  } catch (err) {
    return err;
  }
}

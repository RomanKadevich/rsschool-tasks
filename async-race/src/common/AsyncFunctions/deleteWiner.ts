import { url, path } from "./vars";

export async function deleteWinner(id: number) {
  try {
    await fetch(`${url}${path.winner}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error(err);
  }
}

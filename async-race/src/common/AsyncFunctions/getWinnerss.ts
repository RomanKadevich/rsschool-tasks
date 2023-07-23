import { url, path } from "./vars";
import { QueryParams, itemsResponse, Car, Winner } from "../../types";

export async function getWinners(
  queryParams: QueryParams[] = [],
): Promise<itemsResponse<Winner>> {
  try {
    const createQueryString = (Params: QueryParams[] = []) => {
      return Params.length
        ? `?${Params.map((item) => `${item.key}=${item.value}`).join("&")}`
        : "";
    };
    const res = await fetch(
      `${url}${path.winner}${createQueryString(queryParams)}`,
    );
    const items: Winner[] = await res.json();
    const count = Number(res.headers.get("X-Total-Count"));
    console.log(res.headers.get("X-Total-Count"));
    return { items, count };
  } catch (err) {
    throw err;
  }
}

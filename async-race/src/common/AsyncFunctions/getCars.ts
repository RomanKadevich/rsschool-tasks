import { url, path } from "./vars";
import { QueryParams, itemsResponse, Car } from "../../types";

export async function getCars(
  queryParams: QueryParams[] = [],
): Promise<itemsResponse<Car>> {
  try {
    const createQueryString = (Params: QueryParams[] = []) => {
      return Params.length
        ? `?${Params.map((item) => `${item.key}=${item.value}`).join("&")}`
        : "";
    };
    const res = await fetch(
      `${url}${path.garage}${createQueryString(queryParams)}`,
    );
    const items: Car[] = await res.json();
    const count = Number(res.headers.get("X-Total-Count"));
    console.log(res.headers.get("X-Total-Count"));
    return { items, count };
  } catch (err) {
    throw err;
  }
}

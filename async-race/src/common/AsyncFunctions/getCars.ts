import { url, path } from "./vars";
import { QueryParams } from "../../types";
import { itemsResponse } from "../../types";
import { Car } from "../../types";


export async function getCars(queryParams: QueryParams[] = []): Promise<itemsResponse<Car>>  {
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
    const count: number = Number(res.headers.get("X-Total-Count"));
    console.log(res.headers.get("X-Total-Count"));
    return {items, count};
  } catch (err) {
    throw err;
  }
}

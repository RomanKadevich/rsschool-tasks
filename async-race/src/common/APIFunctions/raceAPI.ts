import { url, path } from "./vars";
import { QueryParams, startEngine } from "../../types";

export async function raceApi(
  queryParams: QueryParams[] = [],
): Promise<startEngine> {
  try {
    const createQueryString = (Params: QueryParams[] = []) => {
      return Params.length
        ? `?${Params.map((item) => `${item.key}=${item.value}`).join("&")}`
        : "";
    };
    const res = await fetch(
      `${url}${path.engine}${createQueryString(queryParams)}`,
      {
        method: "PATCH",
      },
    );
    const items: startEngine = await res.json();
    return items;
  } catch (err) {
    throw new Error("Ошибка при выполнении запроса к серверу");
  }
}

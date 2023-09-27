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
    if (!res.ok) {
      if (res.status === 500) {
        // eslint-disable-next-line no-console
        console.error(
          `Car has been stopped suddenly. It's engine was broken down.`,
        );
      }
    }
    const items: startEngine = await res.json();
    return items;
  } catch (err) {
    throw new Error("Ошибка при выполнении запроса к серверу");
  }
}

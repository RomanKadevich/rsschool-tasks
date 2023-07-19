import { url, path } from "./vars";

interface QueryParams {
  key: string;
  value: string;
}

export async function getCars(queryParams: QueryParams[] = []) {
  try {
    const createQueryString = (Params: QueryParams[] = []) => {
      return Params.length
        ? `?${Params.map((item) => `${item.key}=${item.value}`).join()}`
        : "";
    };
    const res = await fetch(
      `${url}${path.garage}${createQueryString(queryParams)}`,
    );
    const items = await res.json();
    console.log(res.headers.get("X-Total-Count"));
    return items;
  } catch (err) {
    return err;
  }
}

export interface Car {
  color: string;
  id?: number;
  name: string;
}

export interface jsonBody {
  color?: string;
  name?: string;
}

export interface QueryParams {
  key: string;
  value: string|number;
}

export interface itemsResponse<T> {
  items: T[];
  count: number;
}

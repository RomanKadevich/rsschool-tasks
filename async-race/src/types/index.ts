export interface Car {
  color?: string;
  id?: number;
  name?: string;
}

export interface jsonBody {
  color?: string;
  name?: string;
}

export interface QueryParams {
  key: string;
  value: string | number;
}

export interface itemsResponse<T> {
  items: T[];
  count: number;
}
export interface Winner {
  id: number;
  wins: number;
  time: number;
}
export interface startEngine {
  velocity: number;
  distance: number;
  ok: boolean;
  status: string | number;
  statusText: string;
}
export interface Path {
  garage: string;
  engine: string;
  winner: string;
}

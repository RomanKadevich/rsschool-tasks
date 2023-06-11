export interface Source {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly url: string;
    readonly category: string;
    readonly language: string;
    readonly country: string;
    readonly urlToImage: string;
    readonly source: { name: string };
    readonly author: string;
    readonly publishedAt: string;
    readonly title: string;
}

export interface ApiData {
    readonly status: string;
    readonly sources: Source[];
    readonly articles: Source[];
}
export interface LoaderData {
    baseLink: string;
    options: { apiKey: string };
}
export interface RespData {
    endpoint: string;
    options?: {
        apiKey?: string;
        sources?: string;
    };
}

export interface FetchResponse<T> {
    ok: boolean;
    status: number;
    statusText: string;
    json(): Promise<T>;
}

export type Callback<T> = (data: T) => void;
export enum HttpStatus {
    Unauthorized = 401,
    NotFound = 404,
    ServerError = 500,
    TooManyRequests = 429,
}

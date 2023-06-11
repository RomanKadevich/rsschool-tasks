export interface Source {
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
    urlToImage: string;
    source: { name: string };
    author: string;
    publishedAt: string;
    title: string;
}

export interface ApiData {
    status: string;
    sources: Source[];
    articles: Source[];
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

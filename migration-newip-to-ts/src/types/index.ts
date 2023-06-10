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

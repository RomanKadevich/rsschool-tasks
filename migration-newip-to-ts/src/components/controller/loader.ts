import { RespData, FetchResponse, Callback, HttpStatus } from '../../types/index';
class Loader {
    baseLink: string;
    options: { apiKey?: string };
    constructor(baseLink: string, options: { apiKey: string }) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        { endpoint, options = {} }: RespData,
        callback = (): void => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    private errorHandler<T>(res: FetchResponse<T>): FetchResponse<T> {
        if (!res.ok) {
            if (
                res.status === HttpStatus.Unauthorized ||
                res.status === HttpStatus.NotFound ||
                res.status === HttpStatus.ServerError ||
                res.status === HttpStatus.TooManyRequests
            )
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: { apiKey?: string }, endpoint: string): string {
        const urlOptions: { apiKey?: string } = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.entries(urlOptions).forEach(([key, value]): void => {
            url += `${key}=${value ?? ''}&`;
        });

        return url.slice(0, -1);
    }

    private load<T>(method: string, endpoint: string, callback: Callback<T>, options: { apiKey?: string } = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;

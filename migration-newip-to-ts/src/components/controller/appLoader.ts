import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://rss-news-api.onrender.com/', {
            apiKey: '2a60d8b800de4840b6c0198f374881d4', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;

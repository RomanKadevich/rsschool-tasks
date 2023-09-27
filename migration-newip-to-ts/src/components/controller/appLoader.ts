import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://rss-news-api.onrender.com/', {
            apiKey: '68ad981c4ebe428fb4a54ba2c3fb9aa6', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;

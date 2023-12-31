import { ApiData } from '../../types/index';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    private news: News;

    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: ApiData | void): void {
        const values = data?.articles || [];
        this.news.draw(values);
    }

    public drawSources(data: ApiData | void): void {
        const values = data?.sources || [];
        this.sources.draw(values);
    }
}

export default AppView;

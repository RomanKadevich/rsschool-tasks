import { Callback } from '../../types/index';
import AppLoader from './appLoader';

class AppController extends AppLoader {
    public getSources(callback: Callback<void>): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: Event, callback: Callback<void>): void {
        let target: HTMLElement | Node | null = e.target as HTMLElement | Node | null;
        const newsContainer: HTMLElement | Node | null = e.currentTarget as HTMLElement | Node | null;

        while (target !== newsContainer) {
            if (target && target instanceof HTMLElement) {
                if (target.classList.contains('source__item')) {
                    const sourceId: string | null = target.getAttribute('data-source-id');
                    if (sourceId && newsContainer && newsContainer instanceof HTMLElement) {
                        if (newsContainer.getAttribute('data-source') !== sourceId) {
                            newsContainer.setAttribute('data-source', sourceId);
                            super.getResp(
                                {
                                    endpoint: 'everything',
                                    options: {
                                        sources: sourceId,
                                    },
                                },
                                callback
                            );
                        }
                    }
                    return;
                }
                target = target.parentNode;
            }
        }
    }
}

export default AppController;

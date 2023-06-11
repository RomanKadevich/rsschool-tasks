import './news.css';
import { Source } from '../../../types/index';

class News {
    draw(data: Source[]): void {
        const news: Source[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const fragment: DocumentFragment = document.createDocumentFragment() as DocumentFragment;
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector<HTMLTemplateElement>('#newsItemTemp');
        if (newsItemTemp) {
            news.forEach((item, idx) => {
                const newsClone: DocumentFragment = newsItemTemp.content.cloneNode(true) as DocumentFragment;
                const newsItem: Element | null = newsClone.querySelector('.news__item');
                if (newsItem) {
                    if (idx % 2) newsItem.classList.add('alt');
                }
                const newsMetaPhoto: HTMLElement | null = newsClone.querySelector('.news__meta-photo');
                if (newsMetaPhoto) {
                    newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
                }
                const newsMetaAuthor: Element | null = newsClone.querySelector('.news__meta-author');
                if (newsMetaAuthor) {
                    newsMetaAuthor.textContent = item.author || item.source.name;
                }
                const newsMetaDate: Element | null = newsClone.querySelector('.news__meta-date');
                if (newsMetaDate) {
                    newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                }
                const newsDescriptionTitle: Element | null = newsClone.querySelector('.news__description-title');
                if (newsDescriptionTitle) {
                    newsDescriptionTitle.textContent = item.title;
                }
                const newsDescriptionSource: Element | null = newsClone.querySelector('.news__description-source');
                if (newsDescriptionSource) {
                    newsDescriptionSource.textContent = item.source.name;
                }
                const newsDescriptionContent: Element | null = newsClone.querySelector('.news__description-content');
                if (newsDescriptionContent) {
                    newsDescriptionContent.textContent = item.description;
                }
                const newsReadMore: Element | null = newsClone.querySelector('.news__read-more a');
                if (newsReadMore) {
                    newsReadMore.setAttribute('href', item.url);
                }
                fragment.append(newsClone);
            });
            const newsEl: Element | null = document.querySelector('.news');
            if (newsEl) {
                newsEl.innerHTML = '';
                newsEl.appendChild(fragment);
            }
        }
    }
}

export default News;

import { Source } from '../../../types/index';
import './sources.css';

class Sources {
    draw(data: Source[]): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector<HTMLTemplateElement>(
            '#sourceItemTemp'
        );
        if (sourceItemTemp) {
            data.forEach((item) => {
                const sourceClone: DocumentFragment = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
                const itemNameElement: Element | null = sourceClone.querySelector('.source__item-name');
                if (itemNameElement) {
                    itemNameElement.textContent = item.name;
                }
                const itemItemElement: Element | null = sourceClone.querySelector('.source__item');
                if (itemItemElement) {
                    itemItemElement.setAttribute('data-source-id', item.id);
                }
                fragment.append(sourceClone);
            });
            const sourcesElement: Element | null = document.querySelector('.sources');
            if (sourcesElement) {
                sourcesElement.append(fragment);
            }
        }
    }
}

export default Sources;

import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;

    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    public start(): void {
        const docElement: HTMLElement | null = document.querySelector('.sources');
        if (docElement) {
            docElement.addEventListener('click', (e: MouseEvent | TouchEvent) =>
                this.controller.getNews(e, (data) => this.view.drawNews(data))
            );
            this.controller.getSources((data) => {
                this.view.drawSources(data);
                console.log(data);
            });
        }
    }
}

export default App;

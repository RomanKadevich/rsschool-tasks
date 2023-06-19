import { Navigation } from '../navigation/index';
export class App {
  private container: HTMLElement = document.body;

  private navigation: Navigation;

  constructor() {
    this.navigation = new Navigation('level-0');
  }

  run() {
    this.container.className = 'row';
    this.container.append(this.navigation.render());
  }
}


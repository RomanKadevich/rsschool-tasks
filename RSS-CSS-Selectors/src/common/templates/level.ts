export abstract class Level {
  protected container: HTMLElement;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
  }

  protected renderHeader(text:string) {
    const heading:HTMLElement = document.createElement('h1');
    heading.textContent = text;
    heading.className = 'heading';
    this.container.append(heading);
  }

  render():HTMLElement {
    return this.container;
  }
}
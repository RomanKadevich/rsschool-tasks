import { Editor } from '../components/editor/editor';
export abstract class Level {
  protected container: HTMLElement;

  protected Editor: Editor;

  constructor(id: string) {
    this.container = document.createElement('div');
    this.container.id = id;
    this.Editor = new Editor();
  }

  protected renderHeader(text: string): void {
    const heading: HTMLElement = document.createElement('h1');
    heading.textContent = text;
    heading.className = 'heading';
    this.container.append(heading);
  }
  protected renderFooter(): void {
    const footer: HTMLElement = document.createElement('footer');
    footer.innerHTML = `<footer><p class="copyright"><a href="https://rs.school/js/">
    <span class = 'RS'></span></a> <a href="https://github.com/RomanKadevich">
    <span class = 'github'></span></a><span>© 2023</span></p></footer>`
    this.container.append(footer);
  }

  render(): HTMLElement {
    return this.container;
  }
}
import { CssEditor } from './css_editor';
export class Editor {
  private container:HTMLElement;

  private cssEditor: CssEditor;

  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'editor row';
    this.cssEditor = new CssEditor();
  }
      


  render(id:string) {
    this.container.append(this.cssEditor.render(id));
    return this.container;
  }
    
  
} 
  





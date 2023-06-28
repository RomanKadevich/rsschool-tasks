import { CssEditor } from './css_editor';
import { HtmlEditor } from './html_viewer';


export class Editor {
  private container:HTMLElement;

  private cssEditor: CssEditor;

  private htmlEditor: HtmlEditor;

  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'row editor';
    this.cssEditor = new CssEditor();
    this.htmlEditor = new HtmlEditor();
  }



  render(cssId:string, htmlId:string) {
  
    this.container.append(this.cssEditor.render(cssId));
    this.container.append(this.htmlEditor.render(htmlId));
    return this.container;
  }
    
  
} 
  





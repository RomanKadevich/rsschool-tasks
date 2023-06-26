export class CssEditor {
  private container:HTMLElement;
      
  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'css-editor row';
  }
          
  renderCssEditorHeading() {
      
    const cssEditorHeading:HTMLElement = document.createElement('h3');
    cssEditorHeading.className = 'css-editor__heading col s12';
    cssEditorHeading.textContent = 'CSS Editor';
    return cssEditorHeading;
  }

  renderCssEditorNumberColumn() {
    const NumberColumn: HTMLElement =  document.createElement('div');
    NumberColumn.className = 'css-editor__num-column col s1';
    for (let i = 0; i < 18; i++) {
      const numOfLine = document.createElement('span');
      numOfLine.className = 'line-number';
      numOfLine.textContent = `${i + 1}`;
      NumberColumn.append(numOfLine);
    }
    return NumberColumn;
  }

  renderCssEditorTextarea(id:string) {
    const Textarea: HTMLTextAreaElement =  document.createElement('textarea');
    Textarea.className = 'css-editor__textarea col s11';
    Textarea.placeholder = 'Typ Type in a CSS selector';
    return Textarea;
  }
 
 
  render(id:string) {
    this.container.append(this.renderCssEditorHeading());
    this.container.append(this.renderCssEditorNumberColumn());
    this.container.append(this.renderCssEditorTextarea(id));
    return this.container;
  }
        
      
} 
      





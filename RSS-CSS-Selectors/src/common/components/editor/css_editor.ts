export class CssEditor {
  private container:HTMLElement;
      
  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'row col s6 css-editor ';
  }
          
  renderCssEditorHeading() {
      
    const cssEditorHeading:HTMLElement = document.createElement('h3');
    cssEditorHeading.className = 'editor__heading col s12';
    cssEditorHeading.textContent = 'CSS Editor';
    return cssEditorHeading;
  }

  renderCssEditorNumberColumn() {
    const NumberColumn: HTMLElement =  document.createElement('div');
    NumberColumn.className = 'editor__num-column col s1';
    for (let i = 0; i < 18; i++) {
      const numOfLine = document.createElement('span');
      numOfLine.className = 'line-number';
      numOfLine.textContent = `${i + 1}`;
      NumberColumn.append(numOfLine);
    }
    return NumberColumn;
  }

  private renderInput(){
    const inputBox: HTMLElement =  document.createElement('div');
    inputBox.className = 'input-box';
    const inputView: HTMLElement =  document.createElement('div');
    inputView.className = 'input-view';
    const input: HTMLInputElement =  document.createElement('input');
    input.className = 'input';
    inputBox.append(inputView);
    inputBox.append(input);
    return inputBox;
    
  }

  renderCssEditorTextarea(id:string) {
    const Textarea: HTMLElement =  document.createElement('div');
    Textarea.className = 'css-editor__textarea col s11';
    Textarea.id = id;
    const codeCSS = `{
 /* Styles would go here. */
 }
 /*
 Type a number to skip to a level.
 Ex → "5" for level 5
 */`;
    Textarea.innerHTML = '<pre><code class="Css">' + `${codeCSS}` + '</code></pre>';
    const inputView = this.renderInput();
    Textarea.insertBefore(inputView, Textarea.firstChild);
    return Textarea;
  }
 
 
  render(id:string) {
    this.container.append(this.renderCssEditorHeading());
    this.container.append(this.renderCssEditorNumberColumn());
    this.container.append(this.renderCssEditorTextarea(id));
    return this.container;
  }
        
      
} 
      





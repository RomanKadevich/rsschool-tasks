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
  private renderEnterButton(id:string){
    const EnterButton: HTMLElement =  document.createElement('button');
    EnterButton.className = 'enter-btn';
    EnterButton.textContent ='enter';
    EnterButton.id = id;
    return EnterButton;
  }
  private renderInput(){
    const inputBox: HTMLElement =  document.createElement('div');
    inputBox.className = 'inputCSS-box';
    const inputView: HTMLElement =  document.createElement('div');
    inputView.className = 'inputCSS-view animate__animated animate__infinite animate__flash animate__slower';
    const input: HTMLInputElement =  document.createElement('input');
    input.className = 'inputCSS';
    inputView.innerHTML = inputView.innerHTML = `<span class='cur'> Typ Type in a CSS selector</span>`;
    inputBox.append(inputView);
    inputBox.append(input);
    return inputBox;
    
  }

  renderCssEditorTextarea(id:string) {
    const Textarea: HTMLElement =  document.createElement('div');
    Textarea.className = 'css-editor__textarea col s11';
    const codeCSS = `{
 /* Styles would go here. */
 }
 /*
 Type a number to skip to a level.
 Ex → "5" for level 5
 */`;
    Textarea.innerHTML = '<pre><code class="Css">' + `${codeCSS}` + '</code></pre>';
    Textarea.insertBefore(this.renderInputBtnBox(id), Textarea.firstChild);
    return Textarea;
  }
  renderInputBtnBox(id:string){
    
    const InputBtnBox:HTMLElement = document.createElement('div');
    InputBtnBox.className = 'editor__btn-input-box';
    InputBtnBox.append(this.renderInput())
    InputBtnBox.append(this.renderEnterButton(id))
    return InputBtnBox;
  }
 
 
  render(id:string) {
    this.container.append(this.renderCssEditorHeading());
    this.container.append(this.renderCssEditorNumberColumn());
    this.container.append(this.renderCssEditorTextarea(id));
    return this.container;
  }
        
      
} 
      





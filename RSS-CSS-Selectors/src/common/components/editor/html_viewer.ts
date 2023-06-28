export class HtmlEditor {
  private container:HTMLElement;
        
  constructor() {
    this.container = document.createElement('div');
    this.container.className = 'row col s6 Html-editor';
  }
            
  renderHtmlEditorHeading() {
        
    const HtmlEditorHeading:HTMLElement = document.createElement('h3');
    HtmlEditorHeading.className = 'editor__heading col s12';
    HtmlEditorHeading.textContent = 'Html Editor';
    return HtmlEditorHeading;
  }
  
  renderHtmlEditorNumberColumn() {
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
  
  renderHtmlEditorViewer(id:string) {
    const textviewer: HTMLElement =  document.createElement('div');
    textviewer.className = 'Html-editor__viewer col s11';
    textviewer.id = id;
    // Viewer.placeholder = `Typ Type in a Html selector`;
    const code = '&lt;div class="table"&gt;&lt;plate /&gt;&lt;plate /&gt;&lt;/div&gt;';
    textviewer.innerHTML = '<pre><code class="Highlights">' + `${code}` + '</code></pre>';
    return textviewer;
  }
   
   
  render(id:string) {
    this.container.append(this.renderHtmlEditorHeading());
    this.container.append(this.renderHtmlEditorNumberColumn());
    this.container.append(this.renderHtmlEditorViewer(id));
    return this.container;
  }
          
        
} 
        
  
  
  
  
  
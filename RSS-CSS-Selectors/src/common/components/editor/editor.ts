import { CssEditor } from './css_editor';
import { HtmlEditor } from './html_viewer';
import hljs from 'highlight.js';


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

  highlightAllTag(tag:string){
    return `<div class= code>${tag}</div>`;
  }

  highlightOpenTag(tag:string){
    return `<div class= code>${tag}`;
  }

  highlightCloseTag(tag:string){
    return `${tag}</div>`;
  }

  static highlightInputCode(){
    const inputView:HTMLElement | null = document.querySelector('.inputCSS-view');
    const input:HTMLInputElement | null = document.querySelector('.inputCSS');
    let selector: string;
    if (inputView && input){
      input.addEventListener('click', ()=>{
        if(!input.value){
          const cursor = '|';
          inputView.innerHTML = `<span class='cur'>
        ${cursor}</span>`;}
      });

      input.addEventListener('input', ()=>{
        selector = input.value;
        if(input.value){
          inputView.classList.remove('animate__animated');
        }
        if(!input.value){
          inputView.classList.add('animate__animated')
          selector = 'Typ Type in а CSS selector';
        }
        inputView.innerHTML = '<pre><code class="Css">'
         + selector + '</code></pre>';
        document.querySelectorAll<HTMLElement>('pre code').forEach((el) => {
          hljs.highlightElement(el);
        });
        
      });
    }


  }

  static highlightCode(){

    document.querySelectorAll<HTMLElement>('pre code').forEach((el) => {
      hljs.highlightElement(el);
    });
    const handleMouseOver = (event:MouseEvent)=>{
      const target = event.target as HTMLElement;
      if (target.classList.contains('code')){ target.classList.add('hovered-tag');}
    };
    
    const handleMouseOut = (event:MouseEvent)=> {
      const target = event.target as HTMLElement;
      if (target.tagName === 'DIV'){ target.classList.remove('hovered-tag');}
      
    };
    document.querySelectorAll<HTMLElement>('.Html-editor__viewer').forEach((elem) => {
      elem.addEventListener('mouseover', handleMouseOver);
      elem.addEventListener('mouseout', handleMouseOut);
    });
  }

  render(cssId:string, htmlId:string, htmlCode:string) {
  
    this.container.append(this.cssEditor.render(cssId));
    this.container.append(this.htmlEditor.render(htmlId, htmlCode));
    return this.container;
  }
  
    
  
} 
  





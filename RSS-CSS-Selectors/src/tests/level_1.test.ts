import { Level1 } from "../levels/level_1";
import { TableItems, TablesIds } from '../levels/levels_enums';

describe('Level_1', () => {
  let level1: Level1;
  let container: HTMLElement;
  // do actions before test
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    level1 = new Level1('level-1');
  });
  // do actions after test
  afterEach(() => {
    container.remove();
  });

  test('Level1 render header', () => {
    const renderedLevel1 = level1.render();
    const header: HTMLElement|null = renderedLevel1.querySelector('.level-header');
    expect(header).toBeDefined();
    if(header){
      expect(header.textContent).toBe('Select the plates');
    }
  })
  test('Level1 render table', () => {
    
    const renderedLevel1 = level1.render();
    const table: HTMLElement|null = renderedLevel1.querySelector(`#${TablesIds.table1}`);
    expect(table).toBeDefined();
    if(table){
      const tableItems = table.querySelectorAll(TableItems.plate);
      tableItems.forEach(element => {
        expect(element.classList).toBe('plate btn-floating pulse animate__animated animate__pulse animate__infinite');
      });
    }
  })

  test('Level1 render editor', () => {
    
    const renderedLevel1 = level1.render();
    const editorHtml = renderedLevel1.querySelector(`#html-${renderedLevel1.id}`);
    expect(editorHtml).toBeDefined();
  })

  test('Level1 render editor', () => {
    const renderedLevel1 = level1.render();
    const footer = renderedLevel1.querySelector('.level-footer');
    expect(footer).toBeDefined();
  })
})
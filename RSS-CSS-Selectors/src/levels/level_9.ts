import { Level } from '../common/templates/level';
import { ItemsOfTable } from '../common/components/table';
import { Table } from '../common/components/table';
import { TableItems, TablesIds } from './levels_enums';

const listOfElements:ItemsOfTable = 
{  firstItem:TableItems.chickenSmall,
  secondItem:TableItems.chicken,
  thirdItem: TableItems.plateChicken + TableItems.pulse,
  fourthItem: TableItems.bentoChicken + TableItems.pulse+ TableItems.squareRadius,
  fifthItem: TableItems.plateChicken + TableItems.pulse,
  sixItem:TableItems.chicken,
  sevenItem:TableItems.chickenSmall,

};
export class Level9 extends Level {
  private table: Table;

  constructor(id:string) {
    super(id);
    this.table = new Table(TablesIds.table9);
  }
 
  render():HTMLElement {
    this.container.className = 'level-container col l8 m10 s10';
    this.renderHeader('Select all the plates and bentos');
    const tableHTML: HTMLElement = this.table.renderTableItems(listOfElements);
    this.container.append(tableHTML);
    const HTMLCode = this.Editor.highlightAllTag('&lt;chicken&gt;&lt;/chicken&gt;') 
    + this.Editor.highlightOpenTag('&lt;plate&gt;')+
    this.Editor.highlightAllTag('&lt;chicken&gt;&lt;/chicken&gt;')
    +this.Editor.highlightCloseTag('&lt;/plate&gt;')
    + this.Editor.highlightOpenTag('&lt;bento&gt;')+
    this.Editor.highlightAllTag('&lt;chicken&gt;&lt;/chicken&gt;')
    +this.Editor.highlightCloseTag('&lt;/bento&gt;')
    + this.Editor.highlightOpenTag('&lt;plate&gt;')+
    this.Editor.highlightAllTag('&lt;chicken&gt;&lt;/chicken&gt;')
    +this.Editor.highlightCloseTag('&lt;/plate&gt;')
    + this.Editor.highlightAllTag('&lt;chicken&gt;&lt;/chicken&gt;') 
 
    this.container.append(this.Editor.render(`btn-${this.container.id}`,
      `html-${this.container.id}`, HTMLCode ));
    return this.container;
    
  }
}
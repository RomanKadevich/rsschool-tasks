import { Level } from '../common/templates/level';
import { ItemsOfTable } from '../common/components/table';
import { Table } from '../common/components/table';
import { TableItems, TablesIds } from './levels_enums';

const listOfElements:ItemsOfTable = 
{ firstItem:TableItems.bentoBurger,
  secondItem:TableItems.plateBlue,
  thirdItem: TableItems.plateChicken,
};
export class Level5 extends Level {
  private table: Table;

  constructor(id:string) {
    super(id);
    this.table = new Table(TablesIds.table5);
  }
 
  render() {
    this.container.className = 'level-container col s8';
    this.renderHeader('Select the shawarma on the plate');
    const tableHTML: HTMLElement = this.table.renderTableItems(listOfElements, 2, TableItems.chicken+TableItems.pulseShake);
    this.container.append(tableHTML);
    const HTMLCode = this.Editor.highlightAllTag('&lt;bento&gt;&lt;/bento&gt;') 
    + this.Editor.highlightOpenTag('&lt;plate&gt;')+
    this.Editor.highlightAllTag('&lt;shawarma&gt;&lt;/shawarma&gt;')+this.Editor.highlightCloseTag('&lt;/bento&gt;')
    + this.Editor.highlightAllTag('&lt;shawarma&gt;&lt;/shawarma&gt;');
 
    this.container.append(this.Editor.render(`btn-${this.container.id}`, `html-${this.container.id}`, HTMLCode ));
    
    
    return this.container;
    
  }
}
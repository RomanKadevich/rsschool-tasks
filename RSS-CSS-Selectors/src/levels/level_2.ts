import { Level } from '../common/templates/level';
import { ItemsOfTable } from '../common/components/table';
import { Table } from '../common/components/table';
import { TableItems, TablesIds } from './levels_enums';

const listOfElements:ItemsOfTable = 
{ firstItem:TableItems.bento + TableItems.pulse + TableItems.squareRadius,
  secondItem:TableItems.plate,
  thirdItem: TableItems.bento + TableItems.pulse + TableItems.squareRadius,
};
export class Level2 extends Level {
  private table: Table;

  constructor(id:string) {
    super(id);
    this.table = new Table(TablesIds.table2);
  }
 
  render() {
    this.container.className = 'level-container col s8';
    this.renderHeader('SELECT THE PLATE');
    const tableHTML: HTMLElement = this.table.renderTableItems(listOfElements);
    this.container.append(tableHTML);
    const HTMLCode = this.Editor.highlightAllTag('&lt;bento&gt;&lt;/bento&gt;')
    + this.Editor.highlightAllTag('&lt;plate&gt;&lt;/plate&gt;')
    + this.Editor.highlightAllTag('&lt;bento&gt;&lt;/bento&gt;');
 
    this.container.append(this.Editor.render(`css-${this.container.id}`, `html-${this.container.id}`, HTMLCode ));
    return this.container;
  }
}

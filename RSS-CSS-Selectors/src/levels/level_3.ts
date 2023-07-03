import { Level } from '../common/templates/level';
import { ItemsOfTable } from '../common/components/table';
import { Table } from '../common/components/table';
import { TableItems, TablesIds } from './levels_enums';

const listOfElements: ItemsOfTable =
{
  firstItem: TableItems.plateBlue + TableItems.pulse,
  secondItem: TableItems.plate,
  thirdItem: TableItems.bento,
};
export class Level3 extends Level {
  private table: Table;

  constructor(id: string) {
    super(id);
    this.table = new Table(TablesIds.table3);
  }

  render():HTMLElement{
    this.container.className = 'level-container col l8 m10 s10';
    this.renderHeader('Select the fancy plate');
    const tableHTML: HTMLElement = this.table.renderTableItems(listOfElements);
    this.container.append(tableHTML);
    const HTMLCode = this.Editor.highlightAllTag('&lt;plate id = "fancy"&gt;&lt;/plate&gt;')
      + this.Editor.highlightAllTag('&lt;plate&gt;&lt;/plate&gt;')
      + this.Editor.highlightAllTag('&lt;bento&gt;&lt;/bento&gt;');
    this.container.append(this.Editor.render(`btn-${this.container.id}`, 
    `html-${this.container.id}`, HTMLCode));
    return this.container;
  }
}
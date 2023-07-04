import { Level } from '../common/templates/level';
import { ItemsOfTable } from '../common/components/table';
import { Table } from '../common/components/table';
import { TableItems, TablesIds } from './levels_enums';

const listOfElements: ItemsOfTable =
{
  firstItem: TableItems.bento,
  secondItem: TableItems.plate,
  thirdItem: TableItems.shawarma,
};
export class Level4 extends Level {
  private table: Table;

  constructor(id: string) {
    super(id);
    this.table = new Table(TablesIds.table4);
  }

  render():HTMLElement{
    this.container.className = 'level-container col l8 m10 s10';
    this.renderHeader('Select the shawarma on the plate');
    const tableHTML: HTMLElement = this.table.renderTableItems(listOfElements,
      TableItems.shawarma + TableItems.pulseShake, 2);
    this.container.append(tableHTML);
    const HTMLCode = this.Editor.highlightAllTag('&lt;bento&gt;&lt;/bento&gt;')
            + this.Editor.highlightOpenTag('&lt;plate&gt;') +
            this.Editor.highlightAllTag('&lt;shawarma&gt;&lt;/shawarma&gt;') +
            this.Editor.highlightCloseTag('&lt;/plate&gt;')
            + this.Editor.highlightAllTag('&lt;shawarma&gt;&lt;/shawarma&gt;');
    this.container.append(this.Editor.render(`btn-${this.container.id}`,
      `html-${this.container.id}`, HTMLCode));
      this.renderFooter();
    return this.container;

  }
}
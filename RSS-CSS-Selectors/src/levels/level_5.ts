import { Level } from '../common/templates/level';
import { ItemsOfTable } from '../common/components/table';
import { Table } from '../common/components/table';
import { TableItems, TablesIds } from './levels_enums';

const listOfElements: ItemsOfTable =
{
  firstItem: TableItems.bentoBurger,
  secondItem: TableItems.plateBlue,
  thirdItem: TableItems.plateChicken,
};
export class Level5 extends Level {
  private table: Table;

  constructor(id: string) {
    super(id);
    this.table = new Table(TablesIds.table5);
  }

  render():HTMLElement {
    this.container.className = 'level-container col l8 m10 s10';
    this.renderHeader('Select the shawarma on the plate');
    const tableHTML: HTMLElement = this.table.renderTableItems(listOfElements,
      TableItems.chicken + TableItems.pulseShake, 2);
    this.container.append(tableHTML);
    const HTMLCode = this.Editor.highlightOpenTag('&lt;bento&gt;') +
            this.Editor.highlightAllTag('&lt;burger&gt;&lt;/burger&gt;')
            + this.Editor.highlightCloseTag('&lt;/bento&gt;')
            + this.Editor.highlightOpenTag('&lt;plate id = "fancy"&gt;') +
            this.Editor.highlightAllTag('&lt;chicken&gt;&lt;/shawarma&gt;')
            + this.Editor.highlightCloseTag('&lt;/plate&gt;')
            + this.Editor.highlightOpenTag('&lt;plate&gt;') +
            this.Editor.highlightAllTag('&lt;chicken&gt;&lt;/shawarma&gt;')
            + this.Editor.highlightCloseTag('&lt;/plate&gt;')
    this.container.append(this.Editor.render(`btn-${this.container.id}`,
      `html-${this.container.id}`, HTMLCode));
      this.renderFooter();
    return this.container;

  }
}
import { Level } from '../common/templates/level';
import { ItemsOfTable } from '../common/components/table';
import { Table } from '../common/components/table';
import { TableItems, TablesIds } from './levels_enums';

const listOfElements: ItemsOfTable =
{
  firstItem: TableItems.shawarma,
  secondItem: TableItems.shawarmaSmall,
  thirdItem: TableItems.bento,
  fourthItem: TableItems.plateBurger,
  fifthItem: TableItems.plate,
};
export class Level7 extends Level {
  private table: Table;

  constructor(id: string) {
    super(id);
    this.table = new Table(TablesIds.table7);
  }

  render():HTMLElement {
    this.container.className = 'level-container col l8 m10 s10';
    this.renderHeader('Select the small burgers');
    const tableHTML: HTMLElement = this.table.renderTableItems(listOfElements,
      TableItems.burgerSmall + TableItems.pulseShake, 3, 5);
    this.container.append(tableHTML);
    const HTMLCode = this.Editor.highlightAllTag('&lt;shawarma&gt;&lt;/shawarma&gt;') +
            this.Editor.highlightAllTag('&lt;shawarma class = "small"&gt;&lt;/shawarma&gt;')
            + this.Editor.highlightOpenTag('&lt;bento&gt;') +
            this.Editor.highlightAllTag('&lt;burger class = "small"&gt;&lt;/burger&gt;')
            + this.Editor.highlightCloseTag('&lt;/bento&gt;')
            + this.Editor.highlightOpenTag('&lt;plate&gt;') +
            this.Editor.highlightAllTag('&lt;burger&gt;&lt;/burger&gt;')
            + this.Editor.highlightCloseTag('&lt;/plate&gt;') +
            this.Editor.highlightOpenTag('&lt;plate&gt;') +
            this.Editor.highlightAllTag('&lt;burger class = "small"&gt;&lt;/burger&gt;')
            + this.Editor.highlightCloseTag('&lt;/plate&gt;')

    this.container.append(this.Editor.render(`btn-${this.container.id}`,
      `html-${this.container.id}`, HTMLCode));
    this.renderFooter();
    return this.container;

  }
}
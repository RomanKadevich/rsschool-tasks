import { Level } from '../common/templates/level';
import { ItemsOfTable } from '../common/components/table';
import { Table } from '../common/components/table';
import { TableItems, TablesIds } from './levels_enums';

const listOfElements: ItemsOfTable =
{
  firstItem: TableItems.bentoBurger,
  secondItem: TableItems.burgerSmall,
  thirdItem: TableItems.bento,
  fourthItem: TableItems.bentoShawarmaSmall,
  fifthItem: TableItems.bento,
};
export class Level8 extends Level {
  private table: Table;

  constructor(id: string) {
    super(id);
    this.table = new Table(TablesIds.table8);
  }

  render():HTMLElement {
    this.container.className = 'level-container col l8 m10 s10';
    this.renderHeader('Select the small burgers in the bentos');
    const tableHTML: HTMLElement = this.table.renderTableItems(listOfElements,
      TableItems.burgerSmall + TableItems.pulseShake, 3, 5);
    this.container.append(tableHTML);
    const HTMLCode = this.Editor.highlightOpenTag('&lt;bento&gt;') +
            this.Editor.highlightAllTag('&lt;burger&gt;&lt;/burger&gt;')
            + this.Editor.highlightCloseTag('&lt;/bento&gt;') +
            this.Editor.highlightAllTag('&lt;burger class = "small"&gt;&lt;/burger&gt;') +
            this.Editor.highlightOpenTag('&lt;bento&gt;') +
            this.Editor.highlightAllTag('&lt;burger&gt;&lt;/burger class = "small"&gt;')
            + this.Editor.highlightCloseTag('&lt;/bento&gt;') + this.Editor.highlightOpenTag('&lt;bento&gt;') +
            this.Editor.highlightAllTag('&lt;shawarma&gt;&lt;/shawarma class = "small"&gt;')
            + this.Editor.highlightCloseTag('&lt;/bento&gt;') +
            this.Editor.highlightOpenTag('&lt;bento&gt;') +
            this.Editor.highlightAllTag('&lt;burger&gt;&lt;/burger class = "small"&gt;')
            + this.Editor.highlightCloseTag('&lt;/bento&gt;');


    this.container.append(this.Editor.render(`btn-${this.container.id}`,
      `html-${this.container.id}`, HTMLCode));
    this.renderFooter();
    return this.container;

  }
}
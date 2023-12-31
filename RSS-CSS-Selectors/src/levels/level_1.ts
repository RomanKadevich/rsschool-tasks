import { Level } from '../common/templates/level';
import { Table } from '../common/components/table';
import { ItemsOfTable } from '../common/components/table';
import { TableItems, TablesIds } from './levels_enums';

const listOfElements: ItemsOfTable =
{
  firstItem: TableItems.plate + TableItems.pulse,
  secondItem: TableItems.plate + TableItems.pulse
};

export class Level1 extends Level {
  private table: Table;

  constructor(id: string) {
    super(id);
    this.table = new Table(TablesIds.table1);
  }

  render(): HTMLElement {
    this.container.className = 'level-container col l8 m10 s10';
    this.renderHeader('Select the plates');
    const tableHTML: HTMLElement = this.table.renderTableItems(listOfElements);
    this.container.append(tableHTML);
    const HTMLCode = this.Editor.highlightAllTag('&lt;plate&gt;&lt;/plate&gt;');
    this.container.append(this.Editor.render(`btn-${this.container.id}`,
      `html-${this.container.id}`, HTMLCode));
    this.renderFooter();
    return this.container;
  }
}
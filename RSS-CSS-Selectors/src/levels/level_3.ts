import { Level } from '../common/templates/level';
import { itemsOfTable } from '../common/components/table';
import { Table } from '../common/components/table';
import { TableItems, TablesIds } from './levels_enums';

const listOfElements:itemsOfTable = 
{ firstItem:TableItems.plateBlue + TableItems.pulse,
  secondItem:TableItems.plate,
  thirdItem: TableItems.bento,
};
export class Level3 extends Level {
  private table: Table;

  constructor(id:string) {
    super(id);
    this.table = new Table(TablesIds.table3);
  }
 
  render() {
    this.container.className = 'level-container col s8';
    this.renderHeader('SELECT THE PLATE');
    const tableHTML: HTMLElement = this.table.renderTableItems(listOfElements);
    this.container.append(tableHTML);
    return this.container;
  }
}
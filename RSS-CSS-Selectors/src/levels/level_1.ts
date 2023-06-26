import { Level } from '../common/templates/level';
import { Table } from '../common/components/table';
import { itemsOfTable } from '../common/components/table';
import { TableItems, TablesIds } from './levels_enums';


const listOfElements:itemsOfTable = 
{ firstItem:TableItems.plate + TableItems.pulse,
  secondItem:TableItems.plate + TableItems.pulse };

export class Level1 extends Level {
  private table: Table;

  constructor(id:string) {
    super(id);
    this.table = new Table(TablesIds.table1);
  }

  render() {
    this.container.className = 'level-container col s8';
    this.renderHeader('SELECT THE PLATE');
    const tableHTML: HTMLElement = this.table.renderTableItems(listOfElements);
    this.container.append(tableHTML);

    this.container.append(this.Editor.render(`textarea-${this.container.id}`));
    return this.container;
  }
}
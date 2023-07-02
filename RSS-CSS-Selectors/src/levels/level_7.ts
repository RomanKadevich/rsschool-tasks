import { Level } from '../common/templates/level';
import { ItemsOfTable } from '../common/components/table';
import { Table } from '../common/components/table';
import { TableItems, TablesIds } from './levels_enums';

const listOfElements:ItemsOfTable = 
{  firstItem:TableItems.burger,
  secondItem:TableItems.burgerSmall,
  thirdItem: TableItems.bento,
  fourthItem: TableItems.plateShawarma,
  fifthItem: TableItems.plate,
};
export class Level7 extends Level {
  private table: Table;

  constructor(id:string) {
    super(id);
    this.table = new Table(TablesIds.table7);
  }
 
  render() {
    this.container.className = 'level-container col s8';
    this.renderHeader('Select the small shawarma');
    const tableHTML: HTMLElement = this.table.renderTableItems(listOfElements,
      TableItems.shawarmaSmall+TableItems.pulseShake, 3, 5);
    this.container.append(tableHTML);
    const HTMLCode = this.Editor.highlightAllTag('&lt;shawarma&gt;&lt;/shawarma&gt;') +
    this.Editor.highlightAllTag('&lt;shawarma class = "small"&gt;&lt;/shawarma&gt;') 
    + this.Editor.highlightOpenTag('&lt;plate&gt;')+
    this.Editor.highlightAllTag('&lt;shawarma class = "small"&gt;&lt;/shawarma&gt;')
    +this.Editor.highlightCloseTag('&lt;/plate&gt;')
    + this.Editor.highlightAllTag('&lt;plate&gt;&lt;/plate&gt;') 
 
    this.container.append(this.Editor.render(`btn-${this.container.id}`,
      `html-${this.container.id}`, HTMLCode ));
    
    
    return this.container;
    
  }
}
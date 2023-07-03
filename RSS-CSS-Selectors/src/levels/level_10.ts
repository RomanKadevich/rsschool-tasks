import { Level } from '../common/templates/level';
import { ItemsOfTable } from '../common/components/table';
import { Table } from '../common/components/table';
import { TableItems, TablesIds } from './levels_enums';

const listOfElements:ItemsOfTable = 
{  firstItem:TableItems.shawarma + TableItems.pulseShake,
  secondItem:TableItems.plateBurgerSmall + TableItems.pulse,
  thirdItem: TableItems.bento + TableItems.pulse + TableItems.squareRadius,
  fourthItem: TableItems.bentoBurgerSmall + TableItems.pulse+ TableItems.squareRadius,
  fifthItem: TableItems.plateBlue + TableItems.pulse,

};
export class Level10 extends Level {
  private table: Table;

  constructor(id:string) {
    super(id);
    this.table = new Table(TablesIds.table10);
  }
 
  render() {
    this.container.className = 'level-container col s8';
    this.renderHeader('Select all the things!');
    const tableHTML: HTMLElement = this.table.renderTableItems(listOfElements);
    this.container.append(tableHTML);
    const HTMLCode = this.Editor.highlightAllTag('&lt;shawarma&gt;&lt;/shawarma&gt;') +
    this.Editor.highlightOpenTag('&lt;plate&gt;')+
    this.Editor.highlightAllTag('&lt;burger&gt;&lt;/burger&gt;')
    +this.Editor.highlightCloseTag('&lt;/plate&gt;') 
    +
    this.Editor.highlightAllTag('&lt;bento&gt;&lt;/bento&gt;')+
    this.Editor.highlightOpenTag('&lt;bento&gt;')+
    this.Editor.highlightAllTag('&lt;burger&gt;&lt;/burger&gt;')
    +this.Editor.highlightCloseTag('&lt;/bento&gt;')
    + this.Editor.highlightAllTag('&lt;plate id = "fancy"&gt;&lt;/plate&gt;') 
 
    this.container.append(this.Editor.render(`btn-${this.container.id}`,
      `html-${this.container.id}`, HTMLCode ));
    
    
    return this.container;
    
  }
}
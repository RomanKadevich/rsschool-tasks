
export interface ItemsOfTable {
  [item:string]: string;
}

export class Table {
  table: HTMLElement;

  constructor(id: string) {
    this.table = document.createElement('div');
    this.table.className = 'table';
    this.table.id = id;
  }

  renderTableItems(listOfClasses: ItemsOfTable ) {
    let i = 1;
    for (const item in listOfClasses) {
      const itemNode = document.createElement('div');
      itemNode.className = listOfClasses[item];
      itemNode.id = `${item}-${this.table.id}-${i}`;
      this.table.append(itemNode);
      i += 1;
    }
    return this.table;
  }

    
}
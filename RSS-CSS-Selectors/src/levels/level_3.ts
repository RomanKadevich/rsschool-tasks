import { Level } from '../common/templates/level';

export class Level3 extends Level {
  constructor(id:string) {
    super(id);
  }
 
  render() {
    this.container.className = 'level-container col s8';
    this.renderHeader('SELECT THE ANOTHER ANOTHER PLATE');
    return this.container;
  }
}
import { Level } from '../common/templates/level';

export class Level2 extends Level {
  constructor(id:string) {
    super(id);
  }
 
  render() {
    this.container.className = 'level-container col s8';
    this.renderHeader('SELECT THE ANOTHER PLATE');
    return this.container;
  }
}
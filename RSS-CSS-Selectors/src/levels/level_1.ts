import { Level } from '../common/templates/level';



export class Level1 extends Level {
  constructor(id:string) {
    super(id);
  }

  render() {
    this.container.className = 'level-container col s8';
    this.renderHeader('SELECT THE PLATE');
    return this.container;
  }
}
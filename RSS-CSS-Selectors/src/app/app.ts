import { Navigation1 } from '../navigation/index';
import { Level1 } from '../levels/level_1';
import { Level2 } from '../levels/level_2';
import { Level3 } from '../levels/level_3';
import { Level } from '../common/templates/level';
import { LevelsIds } from '../levels/levels_enums';
export class App {
  private static container: HTMLElement =  document.body;

  private navigation: Navigation1;

  private static currId = 'current-level';

  private startLevel: Level1;

  constructor() {
    this.navigation = new Navigation1('nav-1');
    this.startLevel = new Level1('lev-1');
   
  }


  static renderNewLevel(idLevel: string, navHTML: HTMLElement) {
    const currentLevel = document.querySelector(`#${this.currId}`);
    if (currentLevel) {
      currentLevel.remove();
    }
    let level: Level | null = null;
    switch (idLevel) {
      case LevelsIds.level1:
        window.location.hash = `${idLevel}`;
        level = new Level1(idLevel);
        break;
      case LevelsIds.level2:
        window.location.hash = `${idLevel}`;
        level = new Level2(idLevel);
        break;
      case LevelsIds.level3:
        window.location.hash = `${idLevel}`;
        level = new Level3(idLevel);
        break;
    }
    if (level) {
      const levelHtml: HTMLElement = level.render();
      levelHtml.id = App.currId;
      App.container.insertBefore(levelHtml, navHTML);
    }
  }

  private listenHashChange() {
    window.addEventListener('hashchange', ()=>{
      const hash = window.location.hash.slice(1);
      const navigation: HTMLElement | null = document.querySelector('.navigation');
      if (navigation) {App.renderNewLevel(hash, navigation);}
    });
  }

  run() {
    App.container.className = 'row';
    App.container.append(this.navigation.render());
    const navigation: HTMLElement | null = document.querySelector('.navigation');
    if (navigation) {App.renderNewLevel('level-1', navigation);}
    this.listenHashChange();
    this.navigation.changeLevel(3);
   
  }

}


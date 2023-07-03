import { Navigation1 } from '../navigation/index';
import { Level1 } from '../levels/level_1';
import { Level2 } from '../levels/level_2';
import { Level3 } from '../levels/level_3';
import { Level4 } from '../levels/level_4';
import { Level5 } from '../levels/level_5';
import { Level6 } from '../levels/level_6';
import { Level7 } from '../levels/level_7';
import { Level8 } from '../levels/level_8';
import { Level9 } from '../levels/level_9';
import { Level10 } from '../levels/level_10';
import { Level } from '../common/templates/level';
import { LevelsIds } from '../levels/levels_enums';
import { Navigation } from '../common/templates/navigation';
import { Editor } from '../common/components/editor/editor';


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
      case LevelsIds.level4:
        window.location.hash = `${idLevel}`;
        level = new Level4(idLevel);
        break;
      case LevelsIds.level5:
        window.location.hash = `${idLevel}`;
        level = new Level5(idLevel);
        break;
      case LevelsIds.level6:
        window.location.hash = `${idLevel}`;
        level = new Level6(idLevel);
        break;
      case LevelsIds.level7:
        window.location.hash = `${idLevel}`;
        level = new Level7(idLevel);
        break;
      case LevelsIds.level8:
        window.location.hash = `${idLevel}`;
        level = new Level8(idLevel);
        break;
      case LevelsIds.level9:
        window.location.hash = `${idLevel}`;
        level = new Level9(idLevel);
        break;
      case LevelsIds.level10:
        window.location.hash = `${idLevel}`;
        level = new Level10(idLevel);
        break;
      
    }
    if (level) {
      const levelHtml: HTMLElement = level.render();
      levelHtml.id = App.currId;
      App.container.insertBefore(levelHtml, navHTML);
    }
  }

  static listenHashChange() {
    window.addEventListener('hashchange', ()=>{
      const hashName = window.location.hash;
      const hash = hashName.slice(1);
      const navigation: HTMLElement | null = document.querySelector('.navigation');
      if (navigation) {
        App.renderNewLevel(hash, navigation);
        Editor.highlightCode();
        Editor.highlightInputCode();
        const currHash = +hashName.slice(7);
        Editor.checkInputText(10)
        Navigation.changeLevelInfo(currHash);
        
      }
    });
  }

 
    
  run() {
  
    App.container.className = 'row';
    App.container.append(this.navigation.render());
    const navigation: HTMLElement | null = document.querySelector('.navigation');
    if (navigation) {App.renderNewLevel('level-1', navigation);}
    App.listenHashChange();
    Navigation.changeLevel(10);
    Editor.highlightCode();
    Editor.highlightInputCode();
  
   
  }

}


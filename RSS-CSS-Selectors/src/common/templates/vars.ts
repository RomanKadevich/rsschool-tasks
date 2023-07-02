import { LevelsIds } from '../../levels/levels_enums';
export const hashes: string[] = [LevelsIds.level1, LevelsIds.level2, 
  LevelsIds.level3, LevelsIds.level4, LevelsIds.level5, 
  LevelsIds.level6, LevelsIds.level7];
export  const currentHash = +window.location.hash.slice(7);
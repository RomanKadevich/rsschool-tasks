import { LevelsIds } from '../../levels/levels_enums';
export const hashes: string[] = [LevelsIds.level1, LevelsIds.level2, LevelsIds.level3];
export  const currentHash = +window.location.hash.slice(7);
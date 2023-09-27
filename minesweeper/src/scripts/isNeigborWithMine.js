export function isNeigborWithMine(row, col, itemFieldObj) {
  const lengthRows = itemFieldObj.length;
  const lengthCols = itemFieldObj[0].length;
  const firstRow = Math.max(0, row - 1);
  const lastRow = Math.min(row + 1, lengthRows - 1);
  const firstCol = Math.max(0, col - 1);
  const lastCol = Math.min(col + 1, lengthCols - 1);
  let counterMines = 0;
  for (let i = firstRow; i <= lastRow; i++) {
    for (let j = firstCol; j <= lastCol; j++) {
      if (i !== row || j !== col) {
        if (itemFieldObj[i][j].withMine) {
          counterMines++;
        }
      }
    }
  }
  return counterMines;
}

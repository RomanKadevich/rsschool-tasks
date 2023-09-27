function hasNeighboringMine(fieldWithObj, row, col) {
  if (row - 1 >= 0 && fieldWithObj[row - 1][col].withMine) {
    return true;
  }
  if (row + 1 < fieldWithObj.length && fieldWithObj[row + 1][col].withMine) {
    return true;
  }
  if (col - 1 >= 0 && fieldWithObj[row][col - 1].withMine) {
    return true;
  }
  if (col + 1 < fieldWithObj[0].length && fieldWithObj[row][col + 1].withMine) {
    return true;
  }
  return false;
}

export function openCell(fieldWithObj, row, col) {
  // Проверяем границы матрицы
  if (row < 0 || row >= fieldWithObj.length || col < 0 || col >= fieldWithObj[0].length) {
    return;
  }
  if (fieldWithObj[row][col].open) {
    return;
  }
  fieldWithObj[row][col].open = true;
  if (hasNeighboringMine(fieldWithObj, row, col)) {
    return;
  }
  openCell(fieldWithObj, row - 1, col);
  openCell(fieldWithObj, row + 1, col);
  openCell(fieldWithObj, row, col - 1);
  openCell(fieldWithObj, row, col + 1);
}

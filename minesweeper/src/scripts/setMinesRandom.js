export function getMinesRandomIndex(matrix) {
  const randomRowIndex = Math.floor(Math.random() * matrix.length);
  const randomColIndex = Math.floor(Math.random() * matrix[0].length);
  return matrix[randomRowIndex][randomColIndex];
}

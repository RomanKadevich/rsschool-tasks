export function createField(rowLength, colLength) {
  const game = document.querySelector('.game');
  const div = document.createElement('div');
  div.classList = 'game__field field';
  game.appendChild(div);
  const field = document.querySelector('.field');
  const fieldMatrix = [];
  //   создаем ячейки поля в виде матрицы
  for (let i = 0; i < rowLength; i++) {
    fieldMatrix[i] = [];
    for (let j = 0; j < colLength; j++) {
      const newDiv = document.createElement('div');
      newDiv.classList = 'field__item';
      //   фиксируем id и аттрибуты строки и столбца каждой ячеки поля
      newDiv.setAttribute('data-row', i);
      newDiv.setAttribute('data-col', j);
      newDiv.setAttribute('id', `item-${i}-${j}`);
      field.appendChild(newDiv);
    }
  }
}

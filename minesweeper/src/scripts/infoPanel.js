export function createInfoPanel() {
  //   create main
  const main = document.createElement('main');
  main.classList.add('main');
  main.innerHTML = `<div class = 'container game__container'>
  <div class = 'game' id = 'game'></div></div>`;
  document.body.appendChild(main);
  const game = document.querySelector('#game');
  game.innerHTML = `<div class = game__info-panel>
  </div><div class = 'game__field></div>`;
  const infoPanel = document.querySelector('.game__info-panel');
  for (let i = 0; i < 3; i++) {
    const div = document.createElement('div');
    div.classList = 'game__window';
    div.id = `window${i}`;
    infoPanel.appendChild(div);
  }
  const windowWithEmo = document.querySelector('#window1');
  const windowWithMines = document.querySelector('#window0');
  const windowWithТimer = document.querySelector('#window2');
  windowWithMines.textContent = '010';
  windowWithТimer.textContent = '000';
  windowWithEmo.classList.add('start');
}

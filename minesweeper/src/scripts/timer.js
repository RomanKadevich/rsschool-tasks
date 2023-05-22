export function Timer() {
  let timeCounter = 0;
  const timeWindow = document.querySelector('#window2');
  const win = document.querySelector('.win');
  function changeTimeWindow() {
    timeCounter++;
    timeWindow.textContent = `${timeCounter}`;
  }
  const TimerAction = setInterval(changeTimeWindow, 1000);
  if (win) {
    clearInterval(TimerAction);
  }
}

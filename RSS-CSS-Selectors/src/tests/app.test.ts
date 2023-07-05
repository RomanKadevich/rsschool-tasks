import { App } from "../app/app";

describe('App', () => {
  let app: App;
  let container: HTMLElement;
  // do actions before test
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    app = new App();
  });
  // do actions after test
  afterEach(() => {
    container.remove();
  });

  test('App renders navigation and initial level', () => {
    app.run();

    const navigation = container.querySelector('.navigation');
    const level1 = container.querySelector('#current-level');

    expect(navigation).toBeDefined();
    expect(level1).toBeDefined();
  })})

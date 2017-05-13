import { TankafideTutorialsPage } from './app.po';

describe('tankafide-tutorials App', () => {
  let page: TankafideTutorialsPage;

  beforeEach(() => {
    page = new TankafideTutorialsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

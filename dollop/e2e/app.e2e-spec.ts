import { DollopPage } from './app.po';

describe('dollop App', function() {
  let page: DollopPage;

  beforeEach(() => {
    page = new DollopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

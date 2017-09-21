import { TextPage } from './app.po';

describe('text App', function() {
  let page: TextPage;

  beforeEach(() => {
    page = new TextPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

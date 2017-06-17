import { FigurinePage } from './app.po';

describe('figurine App', () => {
  let page: FigurinePage;

  beforeEach(() => {
    page = new FigurinePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

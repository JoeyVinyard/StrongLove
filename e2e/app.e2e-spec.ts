import { StrongLovePage } from './app.po';

describe('strong-love App', () => {
  let page: StrongLovePage;

  beforeEach(() => {
    page = new StrongLovePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

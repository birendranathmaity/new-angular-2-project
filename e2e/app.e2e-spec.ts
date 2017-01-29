import { CodechallengeBerkadiaPage } from './app.po';

describe('codechallenge-berkadia App', function() {
  let page: CodechallengeBerkadiaPage;

  beforeEach(() => {
    page = new CodechallengeBerkadiaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

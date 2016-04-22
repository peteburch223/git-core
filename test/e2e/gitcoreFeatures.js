describe('Todos tracker', function() {
  it('has a title', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Git-Core');
  });

  it('shows username, number of repos, number of followers and avatar', function() {
    browser.get('/');
    $('#Input').sendKeys('smith');
    $('#Submit').click();
    var gitCoreUsers = element.all(by.repeater('gitUser in controller.gitUsers'));
    expect(gitCoreUsers.count()).toEqual(2);
    expect(gitCoreUsers.first().element(by.tagName('img')).getAttribute('src')).toEqual('https://avatars.githubusercontent.com/u/17009106?v=3');
    expect(gitCoreUsers.first().element(by.css('.user-name')).getText()).toEqual('jazzysmith');
    expect(gitCoreUsers.first().element(by.css('.repos')).getText()).toEqual('35');
    expect(gitCoreUsers.first().element(by.css('.followers')).getText()).toEqual('45');
    expect(gitCoreUsers.last().element(by.tagName('img')).getAttribute('src')).toEqual('https://avatars.githubusercontent.com/u/4344964?v=3');
    expect(gitCoreUsers.last().element(by.css('.user-name')).getText()).toEqual('petesmith');
    expect(gitCoreUsers.last().element(by.css('.repos')).getText()).toEqual('27');
    expect(gitCoreUsers.last().element(by.css('.followers')).getText()).toEqual('19');

  });

});

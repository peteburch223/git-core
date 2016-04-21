describe('Todos tracker', function() {
  it('has a title', function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual('Git-Core');
  });

  it('shows username', function() {
    browser.get('/');
    var gitCoreUsers = $$('#git-users li');
    expect(gitCoreUsers.count()).toEqual(2);
    expect(gitCoreUsers.first().getText()).toEqual('Jazzy');
    expect(gitCoreUsers.last().getText()).toEqual('Pete');
  });
});

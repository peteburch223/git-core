describe('UserSearchService', function() {
  beforeEach(module('gitCoreApp'));

  var UserSearchService, httpBackend;

  var searchData = {"items": [{ "login": "JojSh"},{ "login": "rhiannonruth"}]};

  beforeEach(inject(function(_UserSearchService_, $httpBackend) {
    UserSearchService = _UserSearchService_;
    httpBackend = $httpBackend;
  }));

  it('returns list of users based on parameter', function(){
    httpBackend.expectGET('https://api.github.com/search/users?q=JojSh').respond(searchData);
    UserSearchService.searchFor('JojSh').then(function(results){
      expect(results).toEqual(['JojSh','rhiannonruth']);
    });

    httpBackend.flush();
  });

});

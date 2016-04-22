describe('UserDataService', function() {
  beforeEach(module('gitCoreApp'));

  var UserDataService, httpBackend;

  var userData = { "login": "JojSh",
                  "avatar_url": "https://avatars.githubusercontent.com/u/16098730?v=3",
                  "public_repos": 29,
                  "followers": 9,
                  };

  beforeEach(inject(function(_UserDataService_, $httpBackend) {
    UserDataService = _UserDataService_;
    httpBackend = $httpBackend;
  }));

  it('returns user data', function(){
    httpBackend.expectGET('https://api.github.com/users/JojSh?access_token=eed410d933e9c4e65a6a02d6db1a12bdf66545b3').respond(userData);
    UserDataService.getData(['JojSh']).then(function(results){
      expect(results).toEqual({ username:'JojSh',
                                avatar_url: "https://avatars.githubusercontent.com/u/16098730?v=3",
                                followers: 9,
                                public_repos: 29 });
    });
    httpBackend.flush();
  });

});

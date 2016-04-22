describe('UserDataService', function() {
  beforeEach(module('gitCoreApp'));

  var UserDataService, httpBackend;

  var JojShUserData = { "login": "JojSh",
                         "avatar_url": "https://avatars.githubusercontent.com/u/16098730?v=3",
                         "public_repos": 29,
                         "followers": 9,
                       };

 var rhiannonruthUserData = { "login": "rhiannonruth",
                              "avatar_url": "rhiannonURL",
                              "public_repos": 50,
                              "followers": 1000,
                            };

  beforeEach(inject(function(_UserDataService_, $httpBackend) {
    UserDataService = _UserDataService_;
    httpBackend = $httpBackend;
  }));

  it('returns user data for one user', function(){
    httpBackend.expectGET('https://api.github.com/users/JojSh?access_token=eed410d933e9c4e65a6a02d6db1a12bdf66545b3').respond(JojShUserData);
    // UserDataService.getData(['JojSh']).then(function(results){
    //   expect(results).toEqual({ username:'JojSh',
    //                             avatar_url: "https://avatars.githubusercontent.com/u/16098730?v=3",
    //                             followers: 9,
    //                             public_repos: 29 });
    // });
    UserDataService.getData(['JojSh'], function(results){
      expect(results).toEqual({ username:'JojSh',
                                avatar_url: "https://avatars.githubusercontent.com/u/16098730?v=3",
                                followers: 9,
                                public_repos: 29 });
                              });
    httpBackend.flush();
  });

  it('returns user data for several users', function(){
    httpBackend.expectGET('https://api.github.com/users/JojSh?access_token=eed410d933e9c4e65a6a02d6db1a12bdf66545b3').respond(JojShUserData);
    httpBackend.expectGET('https://api.github.com/users/rhiannonruth?access_token=eed410d933e9c4e65a6a02d6db1a12bdf66545b3').respond(rhiannonruthUserData);
    // UserDataService.getData(['JojSh', 'rhiannonruth']).then(function(results){
    //   expect(results).toEqual([{ username:'JojSh',
    //                              avatar_url: "https://avatars.githubusercontent.com/u/16098730?v=3",
    //                              followers: 9,
    //                              public_repos: 29 },
    //                            { username:'rhiannonruth',
    //                              avatar_url: "rhiannonURL",
    //                              followers: 1000,
    //                              public_repos: 50 }]);
    // });
    UserDataService.getData(['JojSh', 'rhiannonruth'], function(results) {
      expect(results).toEqual([{ username:'JojSh',
                                 avatar_url: "https://avatars.githubusercontent.com/u/16098730?v=3",
                                 followers: 9,
                                 public_repos: 29 },
                               { username:'rhiannonruth',
                                 avatar_url: "rhiannonURL",
                                 followers: 1000,
                                 public_repos: 50 }]);
    });
    httpBackend.flush();
  });

});

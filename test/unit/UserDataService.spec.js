describe('UserDataService', function() {
  beforeEach(module('gitCoreApp'));

  var UserDataService, httpBackend;

  var userData = { "login": "JojSh",
                  "id": 16098730,
                  "avatar_url": "https://avatars.githubusercontent.com/u/16098730?v=3",
                  "gravatar_id": "",
                  "url": "https://api.github.com/users/JojSh",
                  "html_url": "https://github.com/JojSh",
                  "followers_url": "https://api.github.com/users/JojSh/followers",
                  "following_url": "https://api.github.com/users/JojSh/following{/other_user}",
                  "gists_url": "https://api.github.com/users/JojSh/gists{/gist_id}",
                  "starred_url": "https://api.github.com/users/JojSh/starred{/owner}{/repo}",
                  "subscriptions_url": "https://api.github.com/users/JojSh/subscriptions",
                  "organizations_url": "https://api.github.com/users/JojSh/orgs",
                  "repos_url": "https://api.github.com/users/JojSh/repos",
                  "events_url": "https://api.github.com/users/JojSh/events{/privacy}",
                  "received_events_url": "https://api.github.com/users/JojSh/received_events",
                  "type": "User",
                  "site_admin": false,
                  "name": "Joseph Sharratt",
                  "company": null,
                  "blog": null,
                  "location": "London",
                  "email": null,
                  "hireable": null,
                  "bio": null,
                  "public_repos": 29,
                  "public_gists": 0,
                  "followers": 9,
                  "following": 14,
                  "created_at": "2015-12-01T10:26:49Z",
                  "updated_at": "2016-04-07T07:17:28Z"
                  };

  beforeEach(inject(function(_UserDataService_, $httpBackend) {
    UserDataService = _UserDataService_;
    httpBackend = $httpBackend;
  }));

  it('returns user data', function(){
    httpBackend.expectGET('https://api.github.com/users/jojsh').respond(userData);
    console.log(UserDataService.getData(['JojSh']));
    UserDataService.getData(['JojSh']).then(function(results){
      expect(results).toEqual([{ username:'JojSh',
                                 avatar_url: "https://avatars.githubusercontent.com/u/16098730?v=3",
                                 followers: 9,
                                 public_repos: 29 }]);
    });
    httpBackend.flush();
  });

});

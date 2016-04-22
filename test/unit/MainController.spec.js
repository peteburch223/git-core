describe('MainController', function() {

  var ctrl, UserDataService, UserSearchService;
  var deferred, scope;


  var gitUsersSmithName = "smith";
  var gitUsersData = [{text: "jazzysmith", repos: 35, followers: 45, avatarUrl: "https://avatars.githubusercontent.com/u/17009106?v=3" },
                   {text: "petesmith", repos: 27, followers: 19, avatarUrl: "https://avatars.githubusercontent.com/u/4344964?v=3"}];

  var gitUsersSmithList = ["jazzysmith", "rhiannonsmith", "jojSmith", "petesmith"];

  beforeEach(module('gitCoreApp'));
  beforeEach(inject(function($rootScope, $controller, $q) {
    deferred = $q.defer();

    UserSearchService = jasmine.createSpyObj('UserSearchService', ['searchFor']);
    UserSearchService.searchFor.and.returnValue($q.when(gitUsersSmithList));

    UserDataService = jasmine.createSpyObj('UserDataService', ['fetchUserData']);
    UserDataService.fetchUserData.and.returnValue($q.when(gitUsersData));

    scope = $rootScope;

    ctrl = $controller('MainController', {
      UserDataService: UserDataService,
      UserSearchService: UserSearchService,
    });
  }));

  it('fetches user data from github based on a username using a promise', function(){
    ctrl.findGitUserData(gitUsersSmithName)
    scope.$apply();
    expect(ctrl.gitUsers).toEqual(gitUsersData);
  });
});

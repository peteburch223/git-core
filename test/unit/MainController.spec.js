describe('MainController', function() {
  beforeEach(module('gitCoreApp'));

  var ctrl, UserDataService, UserSearchService;

  var gitUsersSmithName = "smith";
  var gitUsersData = [{text: "jazzysmith", repos: 35, followers: 45, avatarUrl: "https://avatars.githubusercontent.com/u/17009106?v=3" },
                   {text: "petesmith", repos: 27, followers: 19, avatarUrl: "https://avatars.githubusercontent.com/u/4344964?v=3"}];

  var gitUsersSmithList = ["jazzysmith", "rhiannonsmith", "jojSmith", "petesmith"];

  beforeEach(inject(function($rootScope, $controller) {

    UserDataService = jasmine.createSpyObj('UserDataService', ['fetchUserData']);
    UserDataService.fetchUserData.and.returnValue(gitUsersData);

    UserSearchService = jasmine.createSpyObj('UserSearchService', ['fetchUserList']);
    UserSearchService.fetchUserList.and.returnValue(gitUsersSmithList);

    ctrl = $controller('MainController', {
      $scope: $rootScope.$new(),
      UserDataService: UserDataService,
      UserSearchService: UserSearchService
    });
  }));

  it('returns user data from UserDataService', function() {
    expect(ctrl.gitUsers).toEqual(gitUsersData);
  });

  it('returns a list of git users from UserSearchService', function(){
    expect(ctrl.findGitUsers(gitUsersSmithName)).toEqual(gitUsersSmithList);
  });

  it('calls UserSearchService.fetchUserList with a parameter', function(){
    var temp = ctrl.findGitUsers(gitUsersSmithName);
    expect(UserSearchService.fetchUserList).toHaveBeenCalledWith(gitUsersSmithName);
  });

});

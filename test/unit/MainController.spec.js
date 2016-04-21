describe('MainController', function() {
  beforeEach(module('gitCoreApp'));

  var ctrl, UserDataService;

  var gitUsers = [{text: "Jazzy", repos: 35, followers: 45, avatarUrl: "https://avatars.githubusercontent.com/u/17009106?v=3" },
                   {text: "Pete", repos: 27, followers: 19, avatarUrl: "https://avatars.githubusercontent.com/u/4344964?v=3"}];


  beforeEach(inject(function($rootScope, $controller) {

    UserDataService = jasmine.createSpyObj('UserDataService', ['fetchUserData']);
    UserDataService.fetchUserData.and.returnValue(gitUsers);

    ctrl = $controller('MainController', {
      $scope: $rootScope.$new(),
      UserDataService: UserDataService
    });
  }));

  it('returns user data from service', function() {
    expect(ctrl.gitUsers).toEqual(gitUsers);
  });
});

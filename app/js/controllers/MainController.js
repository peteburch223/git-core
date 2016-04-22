gitCoreApp.controller('MainController',
  ['UserDataService','UserSearchService', function(UserDataService, UserSearchService) {


  this.findGitUsers = function(userName){
    return UserSearchService.fetchUserList(userName);
  };

  this.gitUsers = UserDataService.fetchUserData();
}]);

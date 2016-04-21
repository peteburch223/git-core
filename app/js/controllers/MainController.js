gitCoreApp.controller('MainController', ['UserDataService', function(UserDataService) {
  this.gitUsers = UserDataService.fetchUserData();
}]);

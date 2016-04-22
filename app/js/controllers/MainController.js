gitCoreApp.controller('MainController',
  ['UserDataService','UserSearchService', function(UserDataService, UserSearchService) {
    var self = this;

    self.gitUsers = []

    self.findGitUserData = function(userName){
      UserSearchService.searchFor(userName)
        .then(_fetchGitUserData)
        .then(_storeGitUserData);
    };

    function _fetchGitUserData(response){
      return UserDataService.fetchUserData(response);
    }

    function _storeGitUserData(response){
      self.gitUsers = response;
    }
}]);

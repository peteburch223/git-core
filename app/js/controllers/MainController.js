gitCoreApp.controller('MainController',
  ['UserDataService','UserSearchService', function(UserDataService, UserSearchService) {
    var self = this;

    self.gitUsers = []

    self.findGitUserData = function(userName){
        UserSearchService.searchFor(userName)
        .then(_fetchGitUserData)
      };

    function _fetchGitUserData(response){
      return UserDataService.getData(response, function(results){
        _storeGitUserData(results);
      });
    }

    function _storeGitUserData(response){
      self.gitUsers.push(response);
    }
}]);

gitCoreApp.controller('MainController',
  ['UserDataService','UserSearchService', function(UserDataService, UserSearchService) {
    var self = this;

    self.gitUsers = []

    self.findGitUserData = function(userName){
      console.log('in findGitUserData');
      console.log(self.gitUsers);
      UserSearchService.searchFor(userName)
        .then(_fetchGitUserData)
      };

    function _fetchGitUserData(response){
      console.log('in _fetchGitUserData');
      console.log(response);

      return UserDataService.getData(response, function(results){
        console.log('in callback');
        // console.log(results);
        _storeGitUserData(results);
        console.log(self.gitUsers);
      });
    }

    function _storeGitUserData(response){
      self.gitUsers = [response];
    }
}]);

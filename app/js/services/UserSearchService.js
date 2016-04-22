
gitCoreApp.service('UserSearchService', ['$http', function($http){
  var self = this;

  // console.log ("IN USS");

  self.searchFor = function(username) {
    return $http.get('https://api.github.com/search/users?q='+username)
    .then(_handleResponseFromApi);
  };

  function _handleResponseFromApi(response) {
    return response.data.items.map(function(searchResults){
      return searchResults.login;
    });
  };
}]);

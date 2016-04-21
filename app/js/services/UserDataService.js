gitCoreApp.service('UserDataService', ['$http', function($http){
  var self = this;

  self.getData = function(usernames){
    return usernames.map(function(username){
      return $http.get('https://api.github.com/users/'+username)
      .then(_handleResponseFromApi);
    });
  };

  function _handleResponseFromApi(response){
    return response.data.map(function(){
      return {username: userData.login,
              avatar_url: userData.avatar_url,
              followers: userData.followers,
              public_repos: userData.public_repos};
    });
  }

}]);

gitCoreApp.service('UserDataService', ['$http', function($http){
  var self = this;
  var callbackFunction;

  self.getData = function(usernames, callback){
    callbackFunction = callback;
    return usernames.map(_getUserData);
  };

  function _getUserData(username){
    return _getApiData(username)
      .then(_handleResponseFromApi);
  }

  function _getApiData(username){
    return $http.get('https://api.github.com/users/' + username + '?access_token=eed410d933e9c4e65a6a02d6db1a12bdf66545b3');
  }

  function _handleResponseFromApi(response){
    var userData = response.data;
    callbackFunction( {username: userData.login,
            avatar_url: userData.avatar_url,
            followers: userData.followers,
            public_repos: userData.public_repos});
  }
}]);

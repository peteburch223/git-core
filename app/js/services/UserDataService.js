gitCoreApp.service('UserDataService', function() {
  var self = this;

  self.fetchUserData = function() {
    return [{text: "jazzysmith", repos: 35, followers: 45, avatarUrl: "https://avatars.githubusercontent.com/u/17009106?v=3" },
            {text: "petesmith", repos: 27, followers: 19, avatarUrl: "https://avatars.githubusercontent.com/u/4344964?v=3"}];
  };
});

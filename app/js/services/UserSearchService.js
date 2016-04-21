gitCoreApp.service('UserSearchService', function() {
  var self = this;

  self.fetchUserList = function() {
    return ["jazzysmith", "rhiannonsmith", "jojSmith", "petesmith"];
  };
});

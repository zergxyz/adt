(function() {
  'use strict';

  angular
    .module('ctnv2')
    .factory('Auth', AuthService);

  /** @ngInject */
  function AuthService($http, localStorageService) {
    var authenticate = function(credentials) {
      return $http.post('http://localhost:8080/adt/api/user/authenticate', 
                credentials)
                .then(function (response) {
                    return response;
                });
    };
    return {
      authenticate: authenticate
    };
  }
  
})();

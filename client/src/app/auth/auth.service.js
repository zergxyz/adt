(function() {
  'use strict';

  angular
    .module('ctnv2')
    .factory('Auth', AuthService);

  /** @ngInject */
  function AuthService($http, localStorageService) {
    var center = {};

    var authenticate = function(credentials) {
      return $http.post('http://localhost:8080/adt/api/user/authenticate', 
                credentials)
                .then(function (response) {
                    return response;
                });
    };

    var getCenter = function(ctr) {
        return $http.post('http://localhost:8080/adt/api/center',
                ctr).then(
                function (response) {
                    return response;
                });
    };

    var userRegister = function(user) {
            return $http.post('http://localhost:8080/adt/api/user/register',
                    user).then(
                    function (response) {
                        return response;
                    });
    };
    return {
      authenticate: authenticate,
      getCenter: getCenter,
      center:center,
      userRegister:userRegister
    };
  }
  
})();

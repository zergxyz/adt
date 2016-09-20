// (function() {
//   'use strict';

//   angular
//     .module('ctnv2')
//     .factory('Auth', Auth);

//   /** @ngInject */
//   function Auth($rootScope, $state, $q, Principal, AuthServerProvider, 
//   Account, localStorageService, $resource) {
      
//       var login = function(credentials, callback) {
//             var cb = callback || angular.noop;
//             var deferred = $q.defer();
            
//             AuthServerProvider.authorize(credentials).then(function (data) {
//                 // retrieve the logged account information
//                 Account.get().$promise
//                     .then(function (account) {
//                         //alert(account+"  "+account.username);
//                         Principal._identity = account;
//                         Principal._authenticated = true;
//                         deferred.resolve(data);
//                       // alert( Principal._identity.username);
//                     })
//                     .catch(function() {
//                         Principal._identity = null;
//                         Principal._authenticated = false;
//                       //deferred.resolve(data);
//                     });
                
//                 // Principal.identity(true).then(function(account) {
//                 //     deferred.resolve(data);
                    
//                 // });
               
//                 return cb();
//             }).catch(function (err) {
//                 this.logout();
//                 deferred.reject(err);
//                 return cb(err);
//             }.bind(this));
            
//             return deferred.promise;
//       };
      
//     var logout= function() {
//         localStorageService.clearAll();
//     }
    
//     var validateToken = function (token, callback) {
//         var response;
//         var tk = $resource('public/security/token');
//         tk.save(token, 
//         function (results) {
//                 	if(results.status==="valid") {
//                 		$rootScope.validation = true;
//                 		$rootScope.hospCode = results.token;
//                 		$rootScope.token = token;
//                 		$rootScope.hospName = results.hospName;
//                         response = { success: true };
//                 	}
//                 	else {
//                 		response = { success: false, message: 'token is incorrect' };
//                         $rootScope.validation = false;
//                 	}
//                     callback(response);
//                 }
        
//         );
//     }
    
    
      
//       return {
//         login: login,
//         logout:logout,
//         validateToken:validateToken
//       };

    
//   }
// })();

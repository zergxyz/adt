// (function() {
//   'use strict';

//   angular
//     .module('ctnv2')
//     .factory('AuthServerProvider', AuthServerProvider);

//   /** @ngInject */
//   function AuthServerProvider($http, localStorageService, Base64) {
      
//       var authorize = function(credentials, callback) {
//         var data = "username=" + credentials.username + "&password="
//                 + credentials.password + "&grant_type=password&scope=read%20write&" +
//                 "client_secret=qazwsx&client_id=certainclient";
//             return $http.post('http://runnerp13.codenvycorp.com:53995/oauth/token', data, {
//                 headers: {
//                     "Content-Type": "application/x-www-form-urlencoded",
//                     "Accept": "application/json",
//                     "Authorization": "Basic " + Base64.encode("certainclient" + ':' + "qazwsx")
//                 }
//             }).then(function (response) {
//                 var expiredAt = new Date();
//                 expiredAt.setSeconds(expiredAt.getSeconds() + response.data.expires_in);
                
//                 response.expires_at = expiredAt.getTime();
//                 //alert(response.expires_at+" "+response.data.access_token);
//                 localStorageService.set('token', response);
//                 return response;
//             });
//       };
      
//       return {
//         authorize: authorize
//       };

    
//   }
// })();

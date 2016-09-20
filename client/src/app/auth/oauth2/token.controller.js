// (function() {
//   'use strict';

//   angular
//     .module('ctnv2')
//     .controller('TokenController', TokenController);

//   /** @ngInject */
//   function TokenController($scope, $state, Auth, FlashService ){

//     var vm = this;
//     vm.validateToken = validateToken;

//     function validateToken() {
//         vm.dataLoading = true;
//         Auth.validateToken( vm.token, function (response) {
//             if (response.success) {
//                 $state.go('sighup');
//             } else {
//                 FlashService.Error(response.message);
//                 vm.dataLoading = false;
//             }
//         });
//     };

//   }
// })();

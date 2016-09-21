 (function() {
   'use strict';

   angular
     .module('ctnv2')
     .controller('TokenController', TokenController);

   /** @ngInject */
   function TokenController($scope, $state, Auth ){

     var vm = this;
     vm.validateToken = validateToken;

     function validateToken() {
        vm.dataLoading = true;
        Auth.getCenter(vm.center).then(
            function (response) {
                Auth.center = response.data;
                vm.dataLoading = false;
                $state.go("signup");
            },
            function errorCallback(response) {
                alert("bad token");
                vm.dataLoading = false;
            }
        );
     }

   }
 })();

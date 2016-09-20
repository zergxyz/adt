(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('ClaimController', ClaimController);

  /** @ngInject */
  function ClaimController($scope, $state ){

    var vm = this;
    vm.agree = agree;
    vm.back = back;

    function agree() {
       $state.go("token");
    }
    
    function back() {
       $state.go("signin");
    }

  }
})();

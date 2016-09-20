(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('AsideController', AsideController);

  /** @ngInject */
function AsideController($scope, $uibModalInstance, $state) {

          $scope.ptlist = function(e) {
            $uibModalInstance.close();
            e.stopPropagation();
            $state.go("demo");
          };
          $scope.rounding = function(e) {
            $uibModalInstance.close();
            e.stopPropagation();
            $state.go("checklist");
          };
  }
  
  
  
})();

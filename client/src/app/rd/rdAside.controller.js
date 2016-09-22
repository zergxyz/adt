(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('RDAsideController', RDAsideController);

  /** @ngInject */
function RDAsideController($scope, $uibModalInstance, $state) {

          $scope.ptlist = function(e) {
            $uibModalInstance.close();
            e.stopPropagation();
            $state.go("demo");
          };
          $scope.evaluation = function(e) {
            $uibModalInstance.close();
            e.stopPropagation();
            $state.go("dashboard");
          };
  }



})();
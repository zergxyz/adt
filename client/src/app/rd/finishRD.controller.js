(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('finishRDModalCtrl', finishRDModalCtrl);

  /** @ngInject */
function finishRDModalCtrl($scope, $uibModalInstance, RDService, $state) {

    RDService.rdData.printFlag=false;
    
    $scope.ok = function(e) {
      $uibModalInstance.close();
      RDService.rdData.printFlag=true;
      e.stopPropagation();

      
    };
    
    
    
    $scope.cancel = function(e) {
      $uibModalInstance.dismiss();
      e.stopPropagation();
      $state.go('demo');
    };
    
 
    
    
  }
  
  
  
})();

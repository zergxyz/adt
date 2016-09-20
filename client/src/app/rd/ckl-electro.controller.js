(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('ElcModalCtrl', ElcModalCtrl);

  /** @ngInject */
function ElcModalCtrl($scope, $uibModalInstance,RDService) {
    $scope.rd = RDService.detail;
    

    $scope.ok = function(e) {
      
      //update pain: 
       RDService.rdData.electrolyte   = RDService.detail.kidney_e_y1+
                                        RDService.detail.kidney_e_y2+
                                        RDService.detail.kidney_e_y3+
                                        RDService.detail.kidney_e_n1;
                                      
                                        
      $uibModalInstance.close();
      e.stopPropagation();
    };
    // $scope.cancel = function(e) {
    //   $uibModalInstance.dismiss();
    //   e.stopPropagation();
    // };
    
    $scope.$watch('rd.kidney_e_y1',  function () {
        if(RDService.detail.kidney_e_y1) {
            $scope.rd.kidney_e_n1= "";
        }
    });
    $scope.$watch('rd.kidney_e_y2',  function () {
        if(RDService.detail.kidney_e_y2) {
            $scope.rd.kidney_e_n1= "";
        }
    });
    $scope.$watch('rd.kidney_e_y3',  function () {
        if(RDService.detail.kidney_e_y3) {
            $scope.rd.kidney_e_n1= "";
        }
    });
    
    $scope.$watch('rd.kidney_e_n1',  function () {
        if(RDService.detail.kidney_e_n1) {
            $scope.rd.kidney_e_y1= "";
            $scope.rd.kidney_e_y2= "";
            $scope.rd.kidney_e_y3= "";
        }
    });
 
 
    
    
  }
  
  
  
})();

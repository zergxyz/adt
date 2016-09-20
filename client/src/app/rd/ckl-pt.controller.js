(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('PTModalCtrl', PTModalCtrl);

  /** @ngInject */
function PTModalCtrl($scope, $uibModalInstance,RDService) {
    $scope.rd = RDService.detail;
    

    $scope.ok = function(e) {
      
      //update delirium: 
       RDService.rdData.pt            = RDService.detail.pt_p_y1+
                                        RDService.detail.pt_p_y2+
                                        RDService.detail.pt_p_y3+
                                        RDService.detail.pt_p_n1+
                                        RDService.detail.pt_p_n2;
                                      
                                        
      $uibModalInstance.close();
      e.stopPropagation();
    };
    // $scope.cancel = function(e) {
    //   $uibModalInstance.dismiss();
    //   e.stopPropagation();
    // };
    
    $scope.$watch('rd.pt_p_y1',  function () {
        if(RDService.detail.pt_p_y1) {
            $scope.rd.pt_p_n1= "";
            $scope.rd.pt_p_n2= "";
        }
    });
     $scope.$watch('rd.pt_p_y2',  function () {
        if(RDService.detail.pt_p_y2) {
            $scope.rd.pt_p_n1= "";
            $scope.rd.pt_p_n2= "";
        }
    });
     $scope.$watch('rd.pt_p_y3',  function () {
        if(RDService.detail.pt_p_y3) {
            $scope.rd.pt_p_n1= "";
            $scope.rd.pt_p_n2= "";
        }
    });
  
    
    $scope.$watch('rd.pt_p_n1',  function () {
        if(RDService.detail.pt_p_n1) {
            $scope.rd.pt_p_y1= "";
            $scope.rd.pt_p_y2= "";
            $scope.rd.pt_p_y3= "";
        }
    });
    $scope.$watch('rd.pt_p_n2',  function () {
        if(RDService.detail.pt_p_n2) {
            $scope.rd.pt_p_y1= "";
            $scope.rd.pt_p_y2= "";
            $scope.rd.pt_p_y3= "";
        }
    });
    
  
    

    
    
  }
  
  
  
})();

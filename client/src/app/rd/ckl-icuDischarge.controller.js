(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('icuDischargeModalCtrl', icuDischargeModalCtrl);

  /** @ngInject */
function icuDischargeModalCtrl($scope, $uibModalInstance,RDService) {
    $scope.rd = RDService.detail;
    

    $scope.ok = function(e) {
      
      //update delirium: 
       RDService.rdData.icuDischarge  = RDService.detail.dis_i_y1+
                                        RDService.detail.dis_i_y2+
                                        RDService.detail.dis_i_y3+
                                        RDService.detail.dis_i_n1+
                                        RDService.detail.dis_i_n2;
                                      
                                        
      $uibModalInstance.close();
      e.stopPropagation();
    };
    // $scope.cancel = function(e) {
    //   $uibModalInstance.dismiss();
    //   e.stopPropagation();
    // };
    
    $scope.$watch('rd.dis_i_y1',  function () {
        if(RDService.detail.dis_i_y1) {
            $scope.rd.dis_i_n1= "";
            $scope.rd.dis_i_n2= "";
        }
    });
    $scope.$watch('rd.dis_i_y2',  function () {
        if(RDService.detail.dis_i_y2) {
            $scope.rd.dis_i_n1= "";
            $scope.rd.dis_i_n2= "";
        }
    });
    $scope.$watch('rd.dis_i_y3',  function () {
        if(RDService.detail.dis_i_y3) {
            $scope.rd.dis_i_n1= "";
            $scope.rd.dis_i_n2= "";
        }
    });
    
    
    $scope.$watch('rd.dis_i_n1',  function () {
        if(RDService.detail.dis_i_n1) {
            $scope.rd.dis_i_y1= "";
            $scope.rd.dis_i_y2= "";
            $scope.rd.dis_i_y3= "";
        }
    });
    $scope.$watch('rd.dis_i_n2',  function () {
        if(RDService.detail.dis_i_n2) {
            $scope.rd.dis_i_y1= "";
            $scope.rd.dis_i_y2= "";
            $scope.rd.dis_i_y3= "";
        }
    });
 
    

    
    
  }
  
  
  
})();

(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('LPVModalCtrl', LPVModalCtrl);

  /** @ngInject */
function LPVModalCtrl($scope, $uibModalInstance,RDService) {
    $scope.rd = RDService.detail;
    

    $scope.ok = function(e) {
      
      //update pain: 
       RDService.rdData.lpv           = RDService.detail.resp_l_y1+
                                        RDService.detail.resp_l_y2+
                                        RDService.detail.resp_l_y3+
                                        RDService.detail.resp_l_n1+
                                        RDService.detail.resp_l_n2;
                                      
                                        
      $uibModalInstance.close();
      e.stopPropagation();
    };
    // $scope.cancel = function(e) {
    //   $uibModalInstance.dismiss();
    //   e.stopPropagation();
    // };
    
    $scope.$watch('rd.resp_l_y1',  function () {
        if(RDService.detail.resp_l_y1) {
            $scope.rd.resp_l_n1= "";
            $scope.rd.resp_l_n2= "";
        }
    });
    $scope.$watch('rd.resp_l_y2',  function () {
        if(RDService.detail.resp_l_y2) {
            $scope.rd.resp_l_n1= "";
            $scope.rd.resp_l_n2= "";
        }
    });
    $scope.$watch('rd.resp_l_y3',  function () {
        if(RDService.detail.resp_l_y3) {
            $scope.rd.resp_l_n1= "";
            $scope.rd.resp_l_n2= "";
        }
    });
  
    $scope.$watch('rd.resp_l_n1',  function () {
        if(RDService.detail.resp_l_n1) {
            $scope.rd.resp_l_y1= "";
            $scope.rd.resp_l_y2= "";
            $scope.rd.resp_l_y3= "";
        }
    });
    $scope.$watch('rd.resp_l_n2',  function () {
        if(RDService.detail.resp_l_n2) {
            $scope.rd.resp_l_y1= "";
            $scope.rd.resp_l_y2= "";
            $scope.rd.resp_l_y3= "";
        }
    });
    
    
  }
  
  
  
})();

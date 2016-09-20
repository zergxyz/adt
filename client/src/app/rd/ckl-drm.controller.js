(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('DrmModalCtrl', DrmModalCtrl);

  /** @ngInject */
function DrmModalCtrl($scope, $uibModalInstance,RDService) {
    $scope.rd = RDService.detail;
    

    $scope.ok = function(e) {
      
      //update delirium: 
       RDService.rdData.delirium      = RDService.detail.cns_d_y1+
                                        RDService.detail.cns_d_y2+
                                        RDService.detail.cns_d_y3+
                                        RDService.detail.cns_d_y4+
                                        RDService.detail.cns_d_y5+
                                        RDService.detail.cns_d_y6+
                                        RDService.detail.cns_d_n1+
                                        RDService.detail.cns_d_n2+
                                        RDService.detail.cns_d_n3;
                                      
                                        
      $uibModalInstance.close();
      e.stopPropagation();
    };
    // $scope.cancel = function(e) {
    //   $uibModalInstance.dismiss();
    //   e.stopPropagation();
    // };
    
    $scope.$watch('rd.cns_d_y1',  function () {
        if(RDService.detail.cns_d_y1) {
            $scope.rd.cns_d_n1= "";
            $scope.rd.cns_d_n2= "";
            $scope.rd.cns_d_n3= "";
        }
    });
    
    $scope.$watch('rd.cns_d_y2',  function () {
        if(RDService.detail.cns_d_y2) {
            $scope.rd.cns_d_n1= "";
            $scope.rd.cns_d_n2= "";
            $scope.rd.cns_d_n3= "";
        }
    });
    
    $scope.$watch('rd.cns_d_y3',  function () {
        if(RDService.detail.cns_d_y3) {
            $scope.rd.cns_d_n1= "";
            $scope.rd.cns_d_n2= "";
            $scope.rd.cns_d_n3= "";
        }
    });
    
    $scope.$watch('rd.cns_d_y4',  function () {
        if(RDService.detail.cns_d_y4) {
            $scope.rd.cns_d_n1= "";
            $scope.rd.cns_d_n2= "";
            $scope.rd.cns_d_n3= "";
        }
    });
    
    $scope.$watch('rd.cns_d_y5',  function () {
        if(RDService.detail.cns_d_y5) {
            $scope.rd.cns_d_n1= "";
            $scope.rd.cns_d_n2= "";
            $scope.rd.cns_d_n3= "";
        }
    });
    
    $scope.$watch('rd.cns_d_y6',  function () {
        if(RDService.detail.cns_d_y6) {
            $scope.rd.cns_d_n1= "";
            $scope.rd.cns_d_n2= "";
            $scope.rd.cns_d_n3= "";
        }
    });
    
  
    
    $scope.$watch('rd.cns_d_n1',  function () {
        if(RDService.detail.cns_d_n1) {
            $scope.rd.cns_d_y1= "";
            $scope.rd.cns_d_y2= "";
            $scope.rd.cns_d_y3= "";
            $scope.rd.cns_d_y4= "";
            $scope.rd.cns_d_y5= "";
            $scope.rd.cns_d_y6= "";
        }
    });
    
    $scope.$watch('rd.cns_d_n2',  function () {
        if(RDService.detail.cns_d_n2) {
            $scope.rd.cns_d_y1= "";
            $scope.rd.cns_d_y2= "";
            $scope.rd.cns_d_y3= "";
            $scope.rd.cns_d_y4= "";
            $scope.rd.cns_d_y5= "";
            $scope.rd.cns_d_y6= "";
        }
    });
    
    $scope.$watch('rd.cns_d_n3',  function () {
        if(RDService.detail.cns_d_n3) {
            $scope.rd.cns_d_y1= "";
            $scope.rd.cns_d_y2= "";
            $scope.rd.cns_d_y3= "";
            $scope.rd.cns_d_y4= "";
            $scope.rd.cns_d_y5= "";
            $scope.rd.cns_d_y6= "";
        }
    });
    
    
  }
  
  
  
})();

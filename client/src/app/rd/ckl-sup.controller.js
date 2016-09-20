(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('SupModalCtrl', SupModalCtrl);

  /** @ngInject */
function SupModalCtrl($scope, $uibModalInstance,RDService) {
    $scope.rd = RDService.detail;
    

    $scope.ok = function(e) {
      
      //update pain: 
       RDService.rdData.sup           = RDService.detail.gi_s_y1+
                                        RDService.detail.gi_s_y2+
                                        RDService.detail.gi_s_y3+
                                        RDService.detail.gi_s_y4+
                                        RDService.detail.gi_s_y5+
                                        RDService.detail.gi_s_n1+
                                        RDService.detail.gi_s_n2;
                                      
                                        
      $uibModalInstance.close();
      e.stopPropagation();
    };
    // $scope.cancel = function(e) {
    //   $uibModalInstance.dismiss();
    //   e.stopPropagation();
    // };
    
    $scope.$watch('rd.gi_s_y1',  function () {
        if(RDService.detail.gi_s_y1) {
            $scope.rd.gi_s_n1= "";
            $scope.rd.gi_s_n2= "";
        }
    });
    $scope.$watch('rd.gi_s_y2',  function () {
        if(RDService.detail.gi_s_y2) {
            $scope.rd.gi_s_n1= "";
            $scope.rd.gi_s_n2= "";
        }
    });
    $scope.$watch('rd.gi_s_y3',  function () {
        if(RDService.detail.gi_s_y3) {
            $scope.rd.gi_s_n1= "";
            $scope.rd.gi_s_n2= "";
        }
    });
    $scope.$watch('rd.gi_s_y4',  function () {
        if(RDService.detail.gi_s_y4) {
            $scope.rd.gi_s_n1= "";
            $scope.rd.gi_s_n2= "";
        }
    });
    $scope.$watch('rd.gi_s_y5',  function () {
        if(RDService.detail.gi_s_y5) {
            $scope.rd.gi_s_n1= "";
            $scope.rd.gi_s_n2= "";
        }
    });
    
    $scope.$watch('rd.gi_s_n1',  function () {
        if(RDService.detail.gi_s_n1) {
            $scope.rd.gi_s_y1= "";
            $scope.rd.gi_s_y2= "";
            $scope.rd.gi_s_y3= "";
            $scope.rd.gi_s_y4= "";
            $scope.rd.gi_s_y5= "";
        }
    });
    $scope.$watch('rd.gi_s_n2',  function () {
        if(RDService.detail.gi_s_n2) {
            $scope.rd.gi_s_y1= "";
            $scope.rd.gi_s_y2= "";
            $scope.rd.gi_s_y3= "";
            $scope.rd.gi_s_y4= "";
            $scope.rd.gi_s_y5= "";
        }
    });
 
  
    
    
  }
  
  
  
})();

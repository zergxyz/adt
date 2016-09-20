(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('GluModalCtrl', GluModalCtrl);

  /** @ngInject */
function GluModalCtrl($scope, $uibModalInstance,RDService) {
    $scope.rd = RDService.detail;
    

    $scope.ok = function(e) {
      
      //update pain: 
       RDService.rdData.glucose       = RDService.detail.gi_g_y1+
                                        RDService.detail.gi_g_y2+
                                        RDService.detail.gi_g_y3+
                                        RDService.detail.gi_g_y4+
                                        RDService.detail.gi_g_n1;
                                      
                                        
      $uibModalInstance.close();
      e.stopPropagation();
    };
    // $scope.cancel = function(e) {
    //   $uibModalInstance.dismiss();
    //   e.stopPropagation();
    // };
    
    $scope.$watch('rd.gi_g_y1',  function () {
        if(RDService.detail.gi_g_y1) {
            $scope.rd.gi_g_n1= "";
        }
    });
     $scope.$watch('rd.gi_g_y2',  function () {
        if(RDService.detail.gi_g_y2) {
            $scope.rd.gi_g_n1= "";
        }
    });
     $scope.$watch('rd.gi_g_y3',  function () {
        if(RDService.detail.gi_g_y3) {
            $scope.rd.gi_g_n1= "";
        }
    });
     $scope.$watch('rd.gi_g_y4',  function () {
        if(RDService.detail.gi_g_y4) {
            $scope.rd.gi_g_n1= "";
        }
    });
 
    $scope.$watch('rd.gi_g_n1',  function () {
        if(RDService.detail.gi_g_n1) {
            $scope.rd.gi_g_y1= "";
            $scope.rd.gi_g_y2= "";
            $scope.rd.gi_g_y3= "";
            $scope.rd.gi_g_y4= "";
        }
    });
    
    
  }
  
  
  
})();

(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('DvcModalCtrl', DvcModalCtrl);

  /** @ngInject */
function DvcModalCtrl($scope, $uibModalInstance,RDService) {
    $scope.rd = RDService.detail;
    

    $scope.ok = function(e) {
      
        //update pain: 
        RDService.rdData.devices  = RDService.detail.dev_d_y1+
                                    RDService.detail.dev_d_y2+
                                    RDService.detail.dev_d_y3+
                                    RDService.detail.dev_d_y4+
                                    RDService.detail.dev_d_y5+
                                    RDService.detail.dev_d_y6+
                                    RDService.detail.dev_d_y7+
                                    RDService.detail.dev_d_y8+
                                    RDService.detail.dev_d_n1;
                                  
                                    
        $uibModalInstance.close();
        e.stopPropagation();
    };
    // $scope.cancel = function(e) {
    //   $uibModalInstance.dismiss();
    //   e.stopPropagation();
    // };
    
    $scope.$watch('rd.dev_d_y1',  function () {
        if(RDService.detail.dev_d_y1) {
            $scope.rd.dev_d_n1= "";

        }
    });
     $scope.$watch('rd.dev_d_y2',  function () {
        if(RDService.detail.dev_d_y2) {
            $scope.rd.dev_d_n1= "";

        }
    });
     $scope.$watch('rd.dev_d_y3',  function () {
        if(RDService.detail.dev_d_y3) {
            $scope.rd.dev_d_n1= "";

        }
    });
     $scope.$watch('rd.dev_d_y4',  function () {
        if(RDService.detail.dev_d_y4) {
            $scope.rd.dev_d_n1= "";

        }
    });
     $scope.$watch('rd.dev_d_y5',  function () {
        if(RDService.detail.dev_d_y5) {
            $scope.rd.dev_d_n1= "";

        }
    });
     $scope.$watch('rd.dev_d_y6',  function () {
        if(RDService.detail.dev_d_y6) {
            $scope.rd.dev_d_n1= "";

        }
    });
     $scope.$watch('rd.dev_d_y7',  function () {
        if(RDService.detail.dev_d_y7) {
            $scope.rd.dev_d_n1= "";

        }
    });
     $scope.$watch('rd.dev_d_y8',  function () {
        if(RDService.detail.dev_d_y8) {
            $scope.rd.dev_d_n1= "";

        }
    });
 
 
    $scope.$watch('rd.dev_d_n1',  function () {
        if(RDService.detail.dev_d_n1) {
            $scope.rd.dev_d_y1= "";
            $scope.rd.dev_d_y2= "";
            $scope.rd.dev_d_y3= "";
            $scope.rd.dev_d_y4= "";
            $scope.rd.dev_d_y5= "";
            $scope.rd.dev_d_y6= "";
            $scope.rd.dev_d_y7= "";
            $scope.rd.dev_d_y8= "";
        }
    });
    
    
  }
  
  
  
})();

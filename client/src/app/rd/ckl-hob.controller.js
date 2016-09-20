(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('HOBModalCtrl', HOBModalCtrl);

  /** @ngInject */
function HOBModalCtrl($scope, $uibModalInstance,RDService) {
    $scope.rd = RDService.detail;
    

    $scope.ok = function(e) {
      
      //update pain: 
       RDService.rdData.hob           = RDService.detail.resp_h_y1+
                                        RDService.detail.resp_h_y2+
                                        RDService.detail.resp_h_n1+
                                        RDService.detail.resp_h_n2+
                                        RDService.detail.resp_h_n3;
                                      
                                        
      $uibModalInstance.close();
      e.stopPropagation();
    };
    // $scope.cancel = function(e) {
    //   $uibModalInstance.dismiss();
    //   e.stopPropagation();
    // };
    
    $scope.$watch('rd.resp_h_y1',  function () {
        if(RDService.detail.resp_h_y1) {
            $scope.rd.resp_h_n1= "";
            $scope.rd.resp_h_n2= "";
            $scope.rd.resp_h_n3= "";
        }
    });
     $scope.$watch('rd.resp_h_y2',  function () {
        if(RDService.detail.resp_h_y2) {
            $scope.rd.resp_h_n1= "";
            $scope.rd.resp_h_n2= "";
            $scope.rd.resp_h_n3= "";
        }
    });
    
     $scope.$watch('rd.resp_h_n1',  function () {
        if(RDService.detail.resp_h_n1) {
            $scope.rd.resp_h_y1= "";
            $scope.rd.resp_h_y2= "";

        }
    });
    $scope.$watch('rd.resp_h_n2',  function () {
        if(RDService.detail.resp_h_n2) {
            $scope.rd.resp_h_y1= "";
            $scope.rd.resp_h_y2= "";

        }
    });
    $scope.$watch('rd.resp_h_n3',  function () {
        if(RDService.detail.resp_h_n3) {
            $scope.rd.resp_h_y1= "";
            $scope.rd.resp_h_y2= "";

        }
    });
 
    
    
  }
  
  
  
})();

(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('SPBModalCtrl', SPBModalCtrl);

  /** @ngInject */
function SPBModalCtrl($scope, $uibModalInstance,RDService) {
    $scope.rd = RDService.detail;
    

    $scope.ok = function(e) {
      
      //update pain: 
       RDService.rdData.spb           = RDService.detail.resp_s_y1+
                                        RDService.detail.resp_s_y2+
                                        RDService.detail.resp_s_n1+
                                        RDService.detail.resp_s_n2+
                                        RDService.detail.resp_s_n3+
                                        RDService.detail.resp_s_n4+
                                        RDService.detail.resp_s_n5;
                                      
                                        
      $uibModalInstance.close();
      e.stopPropagation();
    };
    // $scope.cancel = function(e) {
    //   $uibModalInstance.dismiss();
    //   e.stopPropagation();
    // };
    
    $scope.$watch('rd.resp_s_y1',  function () {
        if(RDService.detail.resp_s_y1) {
            $scope.rd.resp_s_n1= "";
            $scope.rd.resp_s_n2= "";
            $scope.rd.resp_s_n3= "";
            $scope.rd.resp_s_n4= "";
            $scope.rd.resp_s_n5= "";
        }
    });
    $scope.$watch('rd.resp_s_y2',  function () {
        if(RDService.detail.resp_s_y2) {
            $scope.rd.resp_s_n1= "";
            $scope.rd.resp_s_n2= "";
            $scope.rd.resp_s_n3= "";
            $scope.rd.resp_s_n4= "";
            $scope.rd.resp_s_n5= "";
        }
    });
    
    $scope.$watch('rd.resp_s_n1',  function () {
        if(RDService.detail.resp_s_n1) {
            $scope.rd.resp_s_y1= "";
            $scope.rd.resp_s_y2= "";
        }
    });
    $scope.$watch('rd.resp_s_n2',  function () {
        if(RDService.detail.resp_s_n2) {
            $scope.rd.resp_s_y1= "";
            $scope.rd.resp_s_y2= "";
        }
    });
    $scope.$watch('rd.resp_s_n3',  function () {
        if(RDService.detail.resp_s_n3) {
            $scope.rd.resp_s_y1= "";
            $scope.rd.resp_s_y2= "";
        }
    });
    $scope.$watch('rd.resp_s_n4',  function () {
        if(RDService.detail.resp_s_n4) {
            $scope.rd.resp_s_y1= "";
            $scope.rd.resp_s_y2= "";
        }
    });
    $scope.$watch('rd.resp_s_n5',  function () {
        if(RDService.detail.resp_s_n5) {
            $scope.rd.resp_s_y1= "";
            $scope.rd.resp_s_y2= "";
        }
    });
  
    
    
  }
  
  
  
})();

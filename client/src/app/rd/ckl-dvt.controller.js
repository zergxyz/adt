(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('DVTModalCtrl', DVTModalCtrl);

  /** @ngInject */
function DVTModalCtrl($scope, $uibModalInstance,RDService) {
    $scope.rd = RDService.detail;
    

    $scope.ok = function(e) {
      
        //update pain: 
        RDService.rdData.dvt      = RDService.detail.hem_dvt_y1+
                                    RDService.detail.hem_dvt_y2+
                                    RDService.detail.hem_dvt_y3+
                                    RDService.detail.hem_dvt_y4+
                                    RDService.detail.hem_dvt_n1+
                                    RDService.detail.hem_dvt_n2+
                                    RDService.detail.hem_dvt_n3;
                                  
                                    
        $uibModalInstance.close();
        e.stopPropagation();
    };
    // $scope.cancel = function(e) {
    //   $uibModalInstance.dismiss();
    //   e.stopPropagation();
    // };
    
    $scope.$watch('rd.hem_dvt_y1',  function () {
        if(RDService.detail.hem_dvt_y1) {
            $scope.rd.hem_dvt_n1= "";
            $scope.rd.hem_dvt_n2= "";
            $scope.rd.hem_dvt_n3= "";
        }
    });
    $scope.$watch('rd.hem_dvt_y2',  function () {
        if(RDService.detail.hem_dvt_y2) {
            $scope.rd.hem_dvt_n1= "";
            $scope.rd.hem_dvt_n2= "";
            $scope.rd.hem_dvt_n3= "";
        }
    });
    $scope.$watch('rd.hem_dvt_y3',  function () {
        if(RDService.detail.hem_dvt_y3) {
            $scope.rd.hem_dvt_n1= "";
            $scope.rd.hem_dvt_n2= "";
            $scope.rd.hem_dvt_n3= "";
        }
    });
    $scope.$watch('rd.hem_dvt_y4',  function () {
        if(RDService.detail.hem_dvt_y4) {
            $scope.rd.hem_dvt_n1= "";
            $scope.rd.hem_dvt_n2= "";
            $scope.rd.hem_dvt_n3= "";
        }
    });
  
 
    $scope.$watch('rd.hem_dvt_n1',  function () {
        if(RDService.detail.hem_dvt_n1) {
            $scope.rd.hem_dvt_y1= "";
            $scope.rd.hem_dvt_y2= "";
            $scope.rd.hem_dvt_y3= "";
            $scope.rd.hem_dvt_y4= "";
        }
    });
    $scope.$watch('rd.hem_dvt_n2',  function () {
        if(RDService.detail.hem_dvt_n2) {
            $scope.rd.hem_dvt_y1= "";
            $scope.rd.hem_dvt_y2= "";
            $scope.rd.hem_dvt_y3= "";
            $scope.rd.hem_dvt_y4= "";
        }
    });
    $scope.$watch('rd.hem_dvt_n3',  function () {
        if(RDService.detail.hem_dvt_n3) {
            $scope.rd.hem_dvt_y1= "";
            $scope.rd.hem_dvt_y2= "";
            $scope.rd.hem_dvt_y3= "";
            $scope.rd.hem_dvt_y4= "";
        }
    });
    
    
  }
  
  
  
})();

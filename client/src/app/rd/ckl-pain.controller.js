(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('PainModalCtrl', PainModalCtrl);

  /** @ngInject */
function PainModalCtrl($scope, $uibModalInstance,RDService) {
    $scope.rd = RDService.detail;
    

    $scope.ok = function(e) {
      
      //update pain: 
       RDService.rdData.pain          = RDService.detail.cns_p_y1+
                                        RDService.detail.cns_p_y2+
                                        RDService.detail.cns_p_y3+
                                        RDService.detail.cns_p_y4+
                                        RDService.detail.cns_p_n1+
                                        RDService.detail.cns_p_n2+
                                        RDService.detail.cns_p_n3+
                                        RDService.detail.cns_p_n4;
                                      
                                        
      $uibModalInstance.close();
      e.stopPropagation();
    };
    // $scope.cancel = function(e) {
    //   $uibModalInstance.dismiss();
    //   e.stopPropagation();
    // };
    
    $scope.$watch('rd.cns_p_y1',  function () {
        if(RDService.detail.cns_p_y1) {
            $scope.rd.cns_p_n1= "";
            $scope.rd.cns_p_n2= "";
            $scope.rd.cns_p_n3= "";
            $scope.rd.cns_p_n4= "";
        }
    });
    $scope.$watch('rd.cns_p_y2',  function () {
        if(RDService.detail.cns_p_y2) {
            $scope.rd.cns_p_n1= "";
            $scope.rd.cns_p_n2= "";
            $scope.rd.cns_p_n3= "";
            $scope.rd.cns_p_n4= "";
        }
    });
    $scope.$watch('rd.cns_p_y3',  function () {
        if(RDService.detail.cns_p_y3) {
            $scope.rd.cns_p_n1= "";
            $scope.rd.cns_p_n2= "";
            $scope.rd.cns_p_n3= "";
            $scope.rd.cns_p_n4= "";
        }
    });
    $scope.$watch('rd.cns_p_y4',  function () {
        if(RDService.detail.cns_p_y4) {
            $scope.rd.cns_p_n1= "";
            $scope.rd.cns_p_n2= "";
            $scope.rd.cns_p_n3= "";
            $scope.rd.cns_p_n4= "";
        }
    });
    
    $scope.$watch('rd.cns_p_n1',  function () {
        if(RDService.detail.cns_p_n1) {
            $scope.rd.cns_p_y1= "";
            $scope.rd.cns_p_y2= "";
            $scope.rd.cns_p_y3= "";
            $scope.rd.cns_p_y4= "";
        }
    });
    $scope.$watch('rd.cns_p_n2',  function () {
        if(RDService.detail.cns_p_n2) {
            $scope.rd.cns_p_y1= "";
            $scope.rd.cns_p_y2= "";
            $scope.rd.cns_p_y3= "";
            $scope.rd.cns_p_y4= "";
        }
    });
    $scope.$watch('rd.cns_p_n3',  function () {
        if(RDService.detail.cns_p_n3) {
            $scope.rd.cns_p_y1= "";
            $scope.rd.cns_p_y2= "";
            $scope.rd.cns_p_y3= "";
            $scope.rd.cns_p_y4= "";
        }
    });
    $scope.$watch('rd.cns_p_n4',  function () {
        if(RDService.detail.cns_p_n4) {
            $scope.rd.cns_p_y1= "";
            $scope.rd.cns_p_y2= "";
            $scope.rd.cns_p_y3= "";
            $scope.rd.cns_p_y4= "";
        }
    });
  
    
   
    
    
  }
  
  
  
})();

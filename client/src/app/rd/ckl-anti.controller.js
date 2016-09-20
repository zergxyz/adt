(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('AntiModalCtrl', AntiModalCtrl);

  /** @ngInject */
function AntiModalCtrl($scope, $uibModalInstance,RDService) {
    $scope.rd = RDService.detail;
    

    $scope.ok = function(e) {
      
      //update delirium: 
       RDService.rdData.antibio       = RDService.detail.id_a_y1+
                                        RDService.detail.id_a_y2+
                                        RDService.detail.id_a_y3+
                                        RDService.detail.id_a_y4+
                                        RDService.detail.id_a_y5+
                                        RDService.detail.id_a_y6+
                                        RDService.detail.id_a_n1+
                                        RDService.detail.id_a_n2;
                                      
                                        
      $uibModalInstance.close();
      e.stopPropagation();
    };
    // $scope.cancel = function(e) {
    //   $uibModalInstance.dismiss();
    //   e.stopPropagation();
    // };
    
    $scope.$watch('rd.id_a_y1',  function () {
        if(RDService.detail.id_a_y1) {
            $scope.rd.id_a_n1= "";
            $scope.rd.id_a_n2= "";
        }
    });
    $scope.$watch('rd.id_a_y2',  function () {
        if(RDService.detail.id_a_y2) {
            $scope.rd.id_a_n1= "";
            $scope.rd.id_a_n2= "";
        }
    });
    $scope.$watch('rd.id_a_y3',  function () {
        if(RDService.detail.id_a_y3) {
            $scope.rd.id_a_n1= "";
            $scope.rd.id_a_n2= "";
        }
    });
    $scope.$watch('rd.id_a_y4',  function () {
        if(RDService.detail.id_a_y4) {
            $scope.rd.id_a_n1= "";
            $scope.rd.id_a_n2= "";
        }
    });
    $scope.$watch('rd.id_a_y5',  function () {
        if(RDService.detail.id_a_y5) {
            $scope.rd.id_a_n1= "";
            $scope.rd.id_a_n2= "";
        }
    });
    $scope.$watch('rd.id_a_y6',  function () {
        if(RDService.detail.id_a_y6) {
            $scope.rd.id_a_n1= "";
            $scope.rd.id_a_n2= "";
        }
    });
  
    
  
    
    $scope.$watch('rd.id_a_n1',  function () {
        if(RDService.detail.id_a_n1) {
            $scope.rd.id_a_y1= "";
            $scope.rd.id_a_y2= "";
            $scope.rd.id_a_y3= "";
            $scope.rd.id_a_y4= "";
            $scope.rd.id_a_y5= "";
            $scope.rd.id_a_y6= "";
        }
    });
    $scope.$watch('rd.id_a_n2',  function () {
        if(RDService.detail.id_a_n2) {
            $scope.rd.id_a_y1= "";
            $scope.rd.id_a_y2= "";
            $scope.rd.id_a_y3= "";
            $scope.rd.id_a_y4= "";
            $scope.rd.id_a_y5= "";
            $scope.rd.id_a_y6= "";
        }
    });
    

    
    
  }
  
  
  
})();

(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('NutritionModalCtrl', NutritionModalCtrl);

  /** @ngInject */
function NutritionModalCtrl($scope, $uibModalInstance,RDService) {
    $scope.rd = RDService.detail;
    

    $scope.ok = function(e) {
      
      //update nutrition: 
       RDService.rdData.nutrition     = RDService.detail.gi_n_y1+
                                        RDService.detail.gi_n_y2+
                                        RDService.detail.gi_n_y3+
                                        RDService.detail.gi_n_n1+
                                        RDService.detail.gi_n_n2+
                                        RDService.detail.gi_n_n3+
                                        RDService.detail.gi_n_n4;
                                      
                                        
      $uibModalInstance.close();
      e.stopPropagation();
    };
    // $scope.cancel = function(e) {
    //   $uibModalInstance.dismiss();
    //   e.stopPropagation();
    // };
    
    $scope.$watch('rd.gi_n_y1',  function () {
        if(RDService.detail.gi_n_y1) {
            $scope.rd.gi_n_n1= "";
            $scope.rd.gi_n_n2= "";
            $scope.rd.gi_n_n3= "";
            $scope.rd.gi_n_n4= "";
        }
    });
    $scope.$watch('rd.gi_n_y2',  function () {
        if(RDService.detail.gi_n_y2) {
            $scope.rd.gi_n_n1= "";
            $scope.rd.gi_n_n2= "";
            $scope.rd.gi_n_n3= "";
            $scope.rd.gi_n_n4= "";
        }
    });
    $scope.$watch('rd.gi_n_y3',  function () {
        if(RDService.detail.gi_n_y3) {
            $scope.rd.gi_n_n1= "";
            $scope.rd.gi_n_n2= "";
            $scope.rd.gi_n_n3= "";
            $scope.rd.gi_n_n4= "";
        }
    });
    
    $scope.$watch('rd.gi_n_n1',  function () {
        if(RDService.detail.gi_n_n1) {
            $scope.rd.gi_n_y1= "";
            $scope.rd.gi_n_y2= "";
            $scope.rd.gi_n_y3= "";
        }
    });
    $scope.$watch('rd.gi_n_n2',  function () {
        if(RDService.detail.gi_n_n2) {
            $scope.rd.gi_n_y1= "";
            $scope.rd.gi_n_y2= "";
            $scope.rd.gi_n_y3= "";
        }
    });
    $scope.$watch('rd.gi_n_n3',  function () {
        if(RDService.detail.gi_n_n3) {
            $scope.rd.gi_n_y1= "";
            $scope.rd.gi_n_y2= "";
            $scope.rd.gi_n_y3= "";
        }
    });
    $scope.$watch('rd.gi_n_n4',  function () {
        if(RDService.detail.gi_n_n4) {
            $scope.rd.gi_n_y1= "";
            $scope.rd.gi_n_y2= "";
            $scope.rd.gi_n_y3= "";
        }
    });
    
    
  
    
   
    
    
  }
  
  
  
})();

(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('GoalModalCtrl', GoalModalCtrl);

  /** @ngInject */
function GoalModalCtrl($scope, $uibModalInstance,RDService) {
    $scope.rd = RDService.detail;
    

    $scope.ok = function(e) {
      
        //update pain: 
        RDService.rdData.goal     = RDService.detail.goal_s_y1+
                                    RDService.detail.goal_s_y2+
                                    RDService.detail.goal_s_y3+
                                    RDService.detail.goal_s_y4+
                                    RDService.detail.goal_s_y5+
                                    RDService.detail.goal_s_y6+
                                    RDService.detail.goal_s_y7+
                                    RDService.detail.goal_s_y8+
                                    RDService.detail.goal_s_n1;
                                  
                                    
        $uibModalInstance.close();
        e.stopPropagation();
    };
    // $scope.cancel = function(e) {
    //   $uibModalInstance.dismiss();
    //   e.stopPropagation();
    // };
    
    $scope.$watch('rd.goal_s_y1',  function () {
        if(RDService.detail.goal_s_y1) {
            $scope.rd.goal_s_n1= "";
        }
    });
    $scope.$watch('rd.goal_s_y2',  function () {
        if(RDService.detail.goal_s_y2) {
            $scope.rd.goal_s_n1= "";
        }
    });
    $scope.$watch('rd.goal_s_y3',  function () {
        if(RDService.detail.goal_s_y3) {
            $scope.rd.goal_s_n1= "";
        }
    });
    $scope.$watch('rd.goal_s_y4',  function () {
        if(RDService.detail.goal_s_y4) {
            $scope.rd.goal_s_n1= "";
        }
    });
    $scope.$watch('rd.goal_s_y5',  function () {
        if(RDService.detail.goal_s_y5) {
            $scope.rd.goal_s_n1= "";
        }
    });
    $scope.$watch('rd.goal_s_y6',  function () {
        if(RDService.detail.goal_s_y6) {
            $scope.rd.goal_s_n1= "";
        }
    });
    $scope.$watch('rd.goal_s_y7',  function () {
        if(RDService.detail.goal_s_y7) {
            $scope.rd.goal_s_n1= "";
        }
    });
    $scope.$watch('rd.goal_s_y8',  function () {
        if(RDService.detail.goal_s_y8) {
            $scope.rd.goal_s_n1= "";
        }
    });
 
    $scope.$watch('rd.goal_s_n1',  function () {
        if(RDService.detail.goal_s_n1) {
            $scope.rd.goal_s_y1= "";
            $scope.rd.goal_s_y2= "";
            $scope.rd.goal_s_y3= "";
            $scope.rd.goal_s_y4= "";
            $scope.rd.goal_s_y5= "";
            $scope.rd.goal_s_y6= "";
            $scope.rd.goal_s_y7= "";
            $scope.rd.goal_s_y8= "";
        }
    });
    
    
  }
  
  
  
})();

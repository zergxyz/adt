(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('CVMedsModalCtrl', CVMedsModalCtrl);

  /** @ngInject */
function CVMedsModalCtrl($scope, $uibModalInstance,RDService) {
    $scope.rd = RDService.detail;
    

    $scope.ok = function(e) {
      
      //update pain: 
       RDService.rdData.cvMeds        = RDService.detail.cvs_m_y1+
                                        RDService.detail.cvs_m_y2+
                                        RDService.detail.cvs_m_y3+
                                        RDService.detail.cvs_m_y4+
                                        RDService.detail.cvs_m_n1+
                                        RDService.detail.cvs_m_n2+
                                        RDService.detail.cvs_m_n3+
                                        RDService.detail.cvs_m_n4+
                                        RDService.detail.cvs_m_n5;
                                      
                                        
      $uibModalInstance.close();
      e.stopPropagation();
    };
    // $scope.cancel = function(e) {
    //   $uibModalInstance.dismiss();
    //   e.stopPropagation();
    // };
    
    $scope.$watch('rd.cvs_m_y1',  function () {
        if(RDService.detail.cvs_m_y1) {
            $scope.rd.cvs_m_n1= "";
            $scope.rd.cvs_m_n2= "";
            $scope.rd.cvs_m_n3= "";
            $scope.rd.cvs_m_n4= "";
            $scope.rd.cvs_m_n5= "";
        }
    });
    $scope.$watch('rd.cvs_m_y2',  function () {
        if(RDService.detail.cvs_m_y2) {
            $scope.rd.cvs_m_n1= "";
            $scope.rd.cvs_m_n2= "";
            $scope.rd.cvs_m_n3= "";
            $scope.rd.cvs_m_n4= "";
            $scope.rd.cvs_m_n5= "";
        }
    });
    $scope.$watch('rd.cvs_m_y3',  function () {
        if(RDService.detail.cvs_m_y3) {
            $scope.rd.cvs_m_n1= "";
            $scope.rd.cvs_m_n2= "";
            $scope.rd.cvs_m_n3= "";
            $scope.rd.cvs_m_n4= "";
            $scope.rd.cvs_m_n5= "";
        }
    });
    $scope.$watch('rd.cvs_m_y4',  function () {
        if(RDService.detail.cvs_m_y4) {
            $scope.rd.cvs_m_n1= "";
            $scope.rd.cvs_m_n2= "";
            $scope.rd.cvs_m_n3= "";
            $scope.rd.cvs_m_n4= "";
            $scope.rd.cvs_m_n5= "";
        }
    });
    
    
    $scope.$watch('rd.cvs_m_n1',  function () {
        if(RDService.detail.cvs_m_n1) {
            $scope.rd.cvs_m_y1= "";
            $scope.rd.cvs_m_y2= "";
            $scope.rd.cvs_m_y3= "";
            $scope.rd.cvs_m_y4= "";
        }
    });
    $scope.$watch('rd.cvs_m_n2',  function () {
        if(RDService.detail.cvs_m_n2) {
            $scope.rd.cvs_m_y1= "";
            $scope.rd.cvs_m_y2= "";
            $scope.rd.cvs_m_y3= "";
            $scope.rd.cvs_m_y4= "";
        }
    });
    $scope.$watch('rd.cvs_m_n3',  function () {
        if(RDService.detail.cvs_m_n3) {
            $scope.rd.cvs_m_y1= "";
            $scope.rd.cvs_m_y2= "";
            $scope.rd.cvs_m_y3= "";
            $scope.rd.cvs_m_y4= "";
        }
    });
    $scope.$watch('rd.cvs_m_n4',  function () {
        if(RDService.detail.cvs_m_n4) {
            $scope.rd.cvs_m_y1= "";
            $scope.rd.cvs_m_y2= "";
            $scope.rd.cvs_m_y3= "";
            $scope.rd.cvs_m_y4= "";
        }
    });
    $scope.$watch('rd.cvs_m_n5',  function () {
        if(RDService.detail.cvs_m_n5) {
            $scope.rd.cvs_m_y1= "";
            $scope.rd.cvs_m_y2= "";
            $scope.rd.cvs_m_y3= "";
            $scope.rd.cvs_m_y4= "";
        }
    });
  
  
    
   
    
    
  }
  
  
  
})();

(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('MedsModalCtrl', MedsModalCtrl);

  /** @ngInject */
function MedsModalCtrl($scope, $uibModalInstance,RDService) {
    $scope.rd = RDService.detail;
    

    $scope.ok = function(e) {
      
      //update delirium: 
       RDService.rdData.meds          = RDService.detail.med_m_y1+
                                        RDService.detail.med_m_y2+
                                        RDService.detail.med_m_n1;
                                      
                                        
      $uibModalInstance.close();
      e.stopPropagation();
    };
    // $scope.cancel = function(e) {
    //   $uibModalInstance.dismiss();
    //   e.stopPropagation();
    // };
    
    $scope.$watch('rd.med_m_y1',  function () {
        if(RDService.detail.med_m_y1) {
            $scope.rd.med_m_n1= "";
        }
    });
    $scope.$watch('rd.med_m_y2',  function () {
        if(RDService.detail.med_m_y2) {
            $scope.rd.med_m_n1= "";
        }
    });
  
    
     $scope.$watch('rd.med_m_n1',  function () {
        if(RDService.detail.med_m_n1) {
            $scope.rd.med_m_y1= "";
            $scope.rd.med_m_y2= "";
        }
    });
  
    

    
    
  }
  
  
  
})();

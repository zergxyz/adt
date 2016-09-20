(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('SBModalCtrl', SBModalCtrl);

  /** @ngInject */
function SBModalCtrl($scope, $uibModalInstance,RDService) {
    $scope.rd = RDService.detail;
    

    $scope.ok = function(e) {
      
      //update sedation break: 
       RDService.rdData.sedationBreak = RDService.detail.cns_sb_y1+
                                        RDService.detail.cns_sb_y2+
                                        RDService.detail.cns_sb_y3+
                                        RDService.detail.cns_sb_n1+
                                        RDService.detail.cns_sb_n2+
                                        RDService.detail.cns_sb_n3+
                                        RDService.detail.cns_sb_n4+
                                        RDService.detail.cns_sb_n5+
                                        RDService.detail.cns_sb_n6+
                                        RDService.detail.cns_sb_n7;
                                        
        
        RDService.saveRounding(RDService.rdData).then(
            function(response) {
                $uibModalInstance.close();
                e.stopPropagation();
            }
        );
        
        
    };
    // $scope.cancel = function(e) {
    //   $uibModalInstance.dismiss();
    //   e.stopPropagation();
    // };
    
    $scope.$watch('rd.cns_sb_y1',  function () {
        if(RDService.detail.cns_sb_y1) {
            $scope.rd.cns_sb_n1= "";
            $scope.rd.cns_sb_n2= "";
            $scope.rd.cns_sb_n3= "";
            $scope.rd.cns_sb_n4= "";
            $scope.rd.cns_sb_n5= "";
            $scope.rd.cns_sb_n6= "";
            $scope.rd.cns_sb_n7= "";
        }
    });
    
    $scope.$watch('rd.cns_sb_y2',  function () {
        if(RDService.detail.cns_sb_y2) {
            $scope.rd.cns_sb_n1= "";
            $scope.rd.cns_sb_n2= "";
            $scope.rd.cns_sb_n3= "";
            $scope.rd.cns_sb_n4= "";
            $scope.rd.cns_sb_n5= "";
            $scope.rd.cns_sb_n6= "";
            $scope.rd.cns_sb_n7= "";
        }
    });
    
    $scope.$watch('rd.cns_sb_y3',  function () {
        if(RDService.detail.cns_sb_y3) {
            $scope.rd.cns_sb_n1= "";
            $scope.rd.cns_sb_n2= "";
            $scope.rd.cns_sb_n3= "";
            $scope.rd.cns_sb_n4= "";
            $scope.rd.cns_sb_n5= "";
            $scope.rd.cns_sb_n6= "";
            $scope.rd.cns_sb_n7= "";
        }
    });
    
    $scope.$watch('rd.cns_sb_n1',  function () {
        if(RDService.detail.cns_sb_n1) {
            $scope.rd.cns_sb_y1= "";
            $scope.rd.cns_sb_y2= "";
            $scope.rd.cns_sb_y3= "";
        }
    });
    
    $scope.$watch('rd.cns_sb_n2',  function () {
        if(RDService.detail.cns_sb_n2) {
            $scope.rd.cns_sb_y1= "";
            $scope.rd.cns_sb_y2= "";
            $scope.rd.cns_sb_y3= "";
        }
    });
    
    $scope.$watch('rd.cns_sb_n3',  function () {
        if(RDService.detail.cns_sb_n3) {
            $scope.rd.cns_sb_y1= "";
            $scope.rd.cns_sb_y2= "";
            $scope.rd.cns_sb_y3= "";
        }
    });
    
    $scope.$watch('rd.cns_sb_n4',  function () {
        if(RDService.detail.cns_sb_n4) {
            $scope.rd.cns_sb_y1= "";
            $scope.rd.cns_sb_y2= "";
            $scope.rd.cns_sb_y3= "";
        }
    });
    
    $scope.$watch('rd.cns_sb_n5',  function () {
        if(RDService.detail.cns_sb_n5) {
            $scope.rd.cns_sb_y1= "";
            $scope.rd.cns_sb_y2= "";
            $scope.rd.cns_sb_y3= "";
        }
    });
    
    $scope.$watch('rd.cns_sb_n6',  function () {
        if(RDService.detail.cns_sb_n6) {
            $scope.rd.cns_sb_y1= "";
            $scope.rd.cns_sb_y2= "";
            $scope.rd.cns_sb_y3= "";
        }
    });
    
    $scope.$watch('rd.cns_sb_n7',  function () {
        if(RDService.detail.cns_sb_n7) {
            $scope.rd.cns_sb_y1= "";
            $scope.rd.cns_sb_y2= "";
            $scope.rd.cns_sb_y3= "";
        }
    });
    
    
  }
  
  
  
})();

(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('PTViewModalCtrl', PTViewModalCtrl);

  /** @ngInject */
function PTViewModalCtrl($scope, $uibModalInstance, $state, CurPTService, RDService) {
   
    
    $scope.dashboard = function () {
      $state.go('dashboard');
      $uibModalInstance.close();
    }
    
    $scope.rd = function () {
      //check the rounding service here
      var d = new Date(),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
      if (month.length < 2) month = '0' + month;
      if (day.length < 2) day = '0' + day;
      var today=[year, month, day].join('-');
      RDService.checkRounding(CurPTService.adm.ctnID, 
                today, CurPTService.adm.center.id).then(
                  function (response) {
                    RDService.rdData =response.data;
                    RDService.detail = response.data.rdetail;
                    $state.go('checklist');
                    $uibModalInstance.close();
      });
     
    }

    // $scope.ok = function(e) {
    //   $uibModalInstance.close();
    //   e.stopPropagation();
    // };
    // $scope.cancel = function(e) {
    //   $uibModalInstance.dismiss();
    //   e.stopPropagation();
    // };
    
     //Sedation break 
    // $scope.$watch('rd.cns_sb_y1',  function () {
    //     if(RDService.detail.cns_sb_y1) {
    //       alert( $scope.rd.cns_sb_y1);
    //     }
    // });
    
    
  }
  
  
  
})();

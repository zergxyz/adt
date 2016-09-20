(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('SyndromeModalInstanceCtrl', SyndromeModalInstanceCtrl);

  /** @ngInject */
function SyndromeModalInstanceCtrl($scope, $uibModalInstance, $state, 
                      CurPTService, SMIRuleEngine) {
          
          $scope.meds = SMIRuleEngine.getMeds(SMIRuleEngine.synName);
          $scope.ints = SMIRuleEngine.getInts(SMIRuleEngine.synName);
          
          $scope.cardName = SMIRuleEngine.synName;
          
          //cms service call to get all the contnets here: 
          $scope.ic = "helloword, this is my contents";
          
          
          $scope.ok = function() {
            $uibModalInstance.close();
             $state.go('dashboard');
 
          };
          $scope.cancel = function() {
            $uibModalInstance.dismiss();
             $state.go('dashboard');
          };
          
          $scope.addMeds = function(med) {
            med.isActive = !med.isActive;
            if (med.isActive) { 
              if (!CurPTService.checkDuplicate(med, CurPTService.currentPT.medlist)) {
                CurPTService.currentPT.medlist.push(med);
              }
             
            }
            // else {
            //     if (CurPTService.checkDuplicate(syndrome, CurPTService.currentPT.synlist)) {
            //             CurPTService.currentPT.synlist =CurPTService.currentPT.synlist.filter(
            //                 function(s){
            //                   return s.name !== syndrome.name;
            //             });
            // }
                 
            // }
          }  
          
          $scope.addInts = function(int) {
            int.isActive = !int.isActive;
            if (int.isActive) { 
              if (!CurPTService.checkDuplicate(int, CurPTService.currentPT.intelist)) {
                CurPTService.currentPT.intelist.push(int);
              }
             
            }
          }
  
          $scope.sgmi = {
            autoHideScrollbar: false,
            theme: 'dark',
            advanced:{
              updateOnContentResize: true
            },
              setHeight: 400,
              scrollInertia: 0
          }

          
  }
  
  
  
})();

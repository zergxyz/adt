(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('SOBController', SOBController);

  /** @ngInject */
function SOBController($state, SOBService, FSRuleEngine, CurPTService,
Notification) {
     var vm = this;
     vm.sob = SOBService.sob;
     vm.sobSynds = function() {
        FSRuleEngine.sob_synds().then (
            function () {
                $state.go("bg.sob.syndrome");
            }
        );
        
         
        //  if (vm.sob.f1) {
        //       var syn = {
        //           "name": "Tension Pneumothorax",
        //           "isActive":false
        //       };
              
        //       SOBService.sob.sob_syndromes.push(syn);
             
        //  }
        //  if (vm.sob.f2) {
        //      var syn2 = {
        //           "name": "Airway Obstruction",
        //           "isActive":false
        //       };
        //       var checker = false;
        //       for (var s in SOBService.sob.sob_syndromes) {
        //           if (s.name ==syn2.name) {
        //               checker = true;
        //               break;
        //           }
        //       }
        //       if (!checker) {
        //           SOBService.sob.sob_syndromes.push(syn2);
        //       }
              
             
        //  }
          
        //  else {
        //       $state.go("bg.sob.action");
        //  }
     }
     
     vm.sobActs = function() {
        FSRuleEngine.sob_actions().then (
            function () {
                $state.go("bg.sob.action");
            }
        );
     }
     

     vm.addS = function(syndrome) {
     syndrome.isActive = !syndrome.isActive;
     if (syndrome.isActive) { 
         //$state.go("ic");
         Notification(syndrome.name+' added.');
         if (!CurPTService.checkDuplicate(syndrome, CurPTService.currentPT.synlist)) {
            CurPTService.currentPT.synlist.push(syndrome);
         }
         
     }
     else {
        if (CurPTService.checkDuplicate(syndrome, CurPTService.currentPT.synlist)) {
                CurPTService.currentPT.synlist =CurPTService.currentPT.synlist.filter(
                     function(s){
                       return s.name !== syndrome.name;
                });
        }
         
     }
     
     //back-up version
    //  if (syndrome.isActive) {
    //     var modalInstance = $uibModal.open({
    //         animation: true,
    //         size:"lg",
    //         templateUrl: 'app/adm/syndrome-modal.html',
    //         controller: 'SyndromeModalInstanceCtrl'
    //     });
    //  }
    
     
  }  
  
  
  
    vm.addIM = function(act) {
     act.isActive = !act.isActive;
     if (act.isActive) { 
         Notification(act.name+' added.');
         if (act.type =="intervention") {
            if (!CurPTService.checkDuplicate(act, CurPTService.currentPT.intelist)) {
                CurPTService.currentPT.intelist.push(act);
            }
         }
         else if (act.type =="medication") {
            if (!CurPTService.checkDuplicate(act, CurPTService.currentPT.medlist)) {
                CurPTService.currentPT.medlist.push(act);
            }
         }
         
         
     }
     else {
        if (act.type =="intervention") { 
            if (CurPTService.checkDuplicate(act, CurPTService.currentPT.intelist)) {
                CurPTService.currentPT.intelist =CurPTService.currentPT.intelist.filter(
                     function(s){
                       return s.name !== act.name;
                });
            }
        }
        else if (act.type =="medication") { 
            if (CurPTService.checkDuplicate(act, CurPTService.currentPT.medlist)) {
                CurPTService.currentPT.medlist =CurPTService.currentPT.medlist.filter(
                     function(s){
                       return s.name !== act.name;
                });
            }
        }
        
         
     }
    
     
  }  
     
    vm.findings = {
        autoHideScrollbar: false,
        theme: 'dark',
        advanced:{
            updateOnContentResize: true
        },
        setHeight: 300,
        scrollInertia: 0
    }
     
         
  }
  
  
  
})();

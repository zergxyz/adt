(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('BGController', BGController);

  /** @ngInject */
function BGController($state, ADMService) {
     var vm = this;
     vm.data= ADMService.data;
     
     vm.rfaChanged = function () {
         if(vm.data.rfa=='Shortness of Breath') {
             $state.go("bg.sob.finding");
         }
        //  else {
        //      $state.go("bg.profile");
        //  }
     }
     
    //  vm.sobSynds = function() {
    //      if (vm.sob.f1) {
    //          alert(ADMService.sob.f1);
    //           $state.go("bg.sob.interests");
    //      }
    //      else {
    //           alert(ADMService.sob.f1);
    //           $state.go("bg.sob.payment");
    //      }
    //  }
     
         
  }
  
  
  
})();

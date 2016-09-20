(function() {
  'use strict';

  angular
    .module('ctnv2')
    .directive('dropdown', Dropdown);

  /** @ngInject */
  function Dropdown (CurPTService) {
       return {
      restrict: 'E',
      require: '^ngModel',
      scope: {
        ngModel: '=', // selection
        items: '=',   // items to select from
        callback: '&' // callback
      },
      link: function(scope, element, attrs) {
        element.on('click', function(event) {
          event.preventDefault();
        });
        
        scope.default = 'Select options';
        scope.isButton = 'isButton' in attrs;
  
        // selection changed handler
        scope.select = function(item) {
          scope.ngModel = item;
          if ( item.name=="Sinus" || item.name=="A.fib" || item.name=="SVT" || 
              item.name =="PVCs" || item.name=="VT" || item.name=="AV block" ||
              item.name=="ST changes" ) {
            CurPTService.currentPT.section_c = item;
          }
          else if ( item.name=="Awake" || item.name=="Verbal responsive" || item.name=="Pain responsive" || 
              item.name =="Unresponsive" || item.name=="Delirium" ) {
            CurPTService.currentPT.section_d = item;
          }
           else if ( item.name=="Rash" || item.name=="Wound" || item.name=="Jaundice" || 
              item.name =="Subcut. emphysema" || item.name=="Edema" ) {
            CurPTService.currentPT.section_e = item;
          }
       
          if (scope.callback) {
            scope.callback({ item: item });
          }
          
        };
      },
      templateUrl: 'app/adm/dropdown-template.html'
    };
  }

})();

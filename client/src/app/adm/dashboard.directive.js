(function() {
  'use strict';

  angular
    .module('ctnv2')
    .directive('orderlist', orderlist);

  /** @ngInject */
  function orderlist() {
    
   return {
      restrict: "E",
      template: "<div>Howdy there! You look splendid.</div>"
    }
  }

})();

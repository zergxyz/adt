(function() {
  'use strict';

  angular
    .module('ctnv2')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();



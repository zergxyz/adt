(function() {
  'use strict';

  angular
    .module('ctnv2', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 
    'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr',
    'ngAside', 'ngScrollbars', 'LocalStorageModule', 'ui-notification',
    "chart.js"]);
    
    Number.prototype.padLeft = function(base,chr){
    var  len = (String(base || 10).length - String(this).length)+1;
    return len > 0? new Array(len).join(chr || '0')+this : this; }

})();

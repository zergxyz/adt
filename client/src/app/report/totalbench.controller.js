(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('BenchtotalController', BenchtotalController);

  /** @ngInject */
  function BenchtotalController($scope) {

  $scope.admlabels = ["SJH", "SDUMFH", "AUH", "SKB", "HSCS", "UHBL",
  "CEDIMAT", "IPDV", "CSUH"];
  var data = [17,15,8,7,5,5,4,3,2];
  $scope.admdata = [ data ];
  $scope.admseries = ['new admissions'];
  
  
  // $scope.aculabels = ["CEDIMAT", "HSCS", "Anhui PH", "IPDV", "SDUMFH", "CSUH", "UHBL", 
  // "SKB", "SJH", "AUH"];
  // $scope.acusers = [ [1,1,1,1,1,1,2,1,19,2]];
  // $scope.userseries = ['Active users'];
  
  
  $scope.rdlabels = ["SJH", "AUH", "SKB", "UHBL", "SDUMFH", "IPDV", "CEDIMAT", 
  "HSCS", "CSUH", "SGHUMC"];
  $scope.rddata = [ [71,57,33,22,19,10,8,7,2,1] ];
  $scope.rdmseries = ['roundings'];
    
  }
  
})();
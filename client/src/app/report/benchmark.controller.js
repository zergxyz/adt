(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('BenchmarkController', BenchmarkController);

  /** @ngInject */
  function BenchmarkController($scope) {

$scope.labels = ["w1", "w2", "w3", "w4", "w5", "w6", "w7"];
  $scope.series = ['Mayo', 'Total'];
  $scope.data = [
    [12,15,20,18,30,39,45],
    [28, 48, 40, 59, 86, 53, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  
  
  $scope.aculabels = ["Mayo", "Total"];
  $scope.acusers = [15, 40];
    
  }
})();
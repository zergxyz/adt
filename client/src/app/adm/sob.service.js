(function() {
  'use strict';

  angular
    .module('ctnv2')
    .factory('SOBService', SOBService);

  /** @ngInject */
  function SOBService() {
    
    var sob = {
      f1: '',
      f2:'',
      f3: '',
      f4:'',
      f5: '',
      f6:'',
      f7: '',
      f8:'',
      f9: '',
      f10:'',
      f11: '',
      f12:'',
      f13: '',
      f14:'',
      f15: '',
      f16:'',
      f17: '',
      f18:'',
      f19: '',
      f20:'',
      f21: '',
      f22:'',
      f23: '',
      f24:'',
      f25: '',
      f26:'',
      f27: '',
      f28:'', 
      sob_syndromes: [],
      sob_actions: []
      
      
    }
    
    return   {
      sob:sob
    }
    
  }
})();
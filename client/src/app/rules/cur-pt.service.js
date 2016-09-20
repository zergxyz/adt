(function() {
  'use strict';

  angular
    .module('ctnv2')
    .factory('CurPTService', CurPTService);

  /** @ngInject */
  function CurPTService() {
      

    var currentPT = {
        synlist: [],
        medlist: [],
        intelist:[],
        orders:[],
        cplist:[],
        symptomlist: [],
        section_c:null,
        section_d:null,
        section_e:null
    }
    
    var adm = {};
    
    var checkDuplicate = function (synd, list) {
        for (var s in list) {
          if (list[s].name ==synd.name) {
              return true;
          }
        }
        return false;
     }
    
    return   {
      currentPT:currentPT,
      checkDuplicate:checkDuplicate,
      adm: adm
    }
    
  }
})();
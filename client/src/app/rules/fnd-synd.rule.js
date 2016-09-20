(function() {
  'use strict';

  angular
    .module('ctnv2')
    .factory('FSRuleEngine', FSRuleEngine);

  /** @ngInject */
  function FSRuleEngine(SOBService, $q) {
      
     function checkDuplicateSynds (synd, list) {
        for (var s in list) {
          if (list[s].name ==synd.name) {
              return true;
          }
        }
        return false;
     }
    
     var sob_synds= function() {
        //clear the syndromes 
        SOBService.sob.sob_syndromes = [];
        var q = $q.defer();
        if (SOBService.sob.f2||
            SOBService.sob.f3||
            SOBService.sob.f4) {
            var syn1 = {
              "name": "Tension Pneumothorax",
              "isActive":false
            };
            if (!checkDuplicateSynds(syn1, SOBService.sob.sob_syndromes )) {
                SOBService.sob.sob_syndromes.push(syn1);
            }
            
            
        }
        
        if (SOBService.sob.f5||
            SOBService.sob.f6||
            SOBService.sob.f7) {
            var syn2 = {
              "name": "Airway obstruction",
              "isActive":false
            }
            var syn3 = {
              "name": "Anaphylaxis",
              "isActive":false
            }
            
            if (!checkDuplicateSynds(syn2, SOBService.sob.sob_syndromes )) {
                SOBService.sob.sob_syndromes.push(syn2);
            }
            if (!checkDuplicateSynds(syn3, SOBService.sob.sob_syndromes )) {
                SOBService.sob.sob_syndromes.push(syn3);
            }
        }
        q.resolve();
        return q.promise;
        
        
    }
    
    var sob_actions = function () {
      SOBService.sob.sob_actions = [];
      var q = $q.defer();
      for (var s in SOBService.sob.sob_syndromes) {
        if (SOBService.sob.sob_syndromes[s].isActive) {
           if (SOBService.sob.sob_syndromes[s].name =="Tension Pneumothorax") {
             var item1 = {
               "name": "Chest X-Ray",
               "type": "intervention",
               "isActive":false
             }
             
             var item2 = {
               "name": "Chest tube",
               "type": "intervention",
               "isActive":false
             }
             
              if (!checkDuplicateSynds(item1, SOBService.sob.sob_actions )) {
                SOBService.sob.sob_actions.push(item1);
              }
              if (!checkDuplicateSynds(item2, SOBService.sob.sob_actions )) {
                SOBService.sob.sob_actions.push(item2);
              }
           }
           
           else if (SOBService.sob.sob_syndromes[s].name =="Anaphylaxis") {
             var item3 = {
               "name": "Epinephrine",
               "type": "medication",
               "isActive":false
             }
             
             
              if (!checkDuplicateSynds(item3, SOBService.sob.sob_actions )) {
                SOBService.sob.sob_actions.push(item3);
              }
           }
           
        }
      }
      q.resolve();
      return q.promise;
    }
    
    return   {
      sob_synds:sob_synds,
      sob_actions:sob_actions
    }
    
  }
})();
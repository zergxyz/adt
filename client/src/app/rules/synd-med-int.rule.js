(function() {
  'use strict';

  angular
    .module('ctnv2')
    .factory('SMIRuleEngine', SMIRuleEngine);

  /** @ngInject */
  function SMIRuleEngine(CurPTService) {
      
    var synName = "";
      
    function checkDuplicateMI(name, list) {
        for (var s in list) {
              if (list[s].name ==name) {
                  return true;
              }
            }
        return false;
    }
    

    var getMeds = function (syn_name) {
        var meds = [];
        if (syn_name =='Tension Pneumothorax') {
            var med1 = {
                "name": "Antibiotic",
                "isActive":false
            };
            if (CurPTService.checkDuplicate(med1, CurPTService.currentPT.medlist)) {
              med1.isActive=true;
            }
            if (!checkDuplicateMI(med1.name, meds)) {
             meds.push(med1);
            }
        }
        
        else if (syn_name =='Anaphylaxis') {
            var med2 = {
                "name": "Epinephrine",
                "isActive":false
            };
            if (CurPTService.checkDuplicate(med2, CurPTService.currentPT.medlist)) {
              med2.isActive=true;
            }
            if (!checkDuplicateMI(med2.name, meds)) {
             meds.push(med2);
            }
            
            var med3 = {
                "name": "Steroid",
                "isActive":false
            };
            if (CurPTService.checkDuplicate(med3, CurPTService.currentPT.medlist)) {
              med3.isActive=true;
            }
            if (!checkDuplicateMI(med3.name, meds)) {
             meds.push(med3);
            }
            
            var med4 = {
                "name": "Antihistaminic",
                "isActive":false
            };
            if (CurPTService.checkDuplicate(med4, CurPTService.currentPT.medlist)) {
              med4.isActive=true;
            }
            if (!checkDuplicateMI(med4.name, meds)) {
             meds.push(med4);
            }
            
            
            var med5 = {
                "name": "H2 blocker",
                "isActive":false
            };
            if (CurPTService.checkDuplicate(med5, CurPTService.currentPT.medlist)) {
              med5.isActive=true;
            }
            if (!checkDuplicateMI(med5.name, meds)) {
             meds.push(med5);
            }
            
        } 
        return meds;
    };


    var getInts = function (syn_name) {
        var ints = [];
        if (syn_name =='Tension Pneumothorax') {
            var int1 = {
                "name": "Ultrasound",
                "isActive":false
            };
            if (CurPTService.checkDuplicate(int1, CurPTService.currentPT.intelist)) {
              int1.isActive=true;
            }
            if (!checkDuplicateMI(int1.name, ints)) {
             ints.push(int1);
            }
            
            var int2 = {
                "name": "Chest tube",
                "isActive":false
            };
            if (CurPTService.checkDuplicate(int2, CurPTService.currentPT.intelist)) {
              int2.isActive=true;
            }
            if (!checkDuplicateMI(int2.name, ints)) {
             ints.push(int2);
            }
            
            var int3 = {
                "name": "X-Ray/CT",
                "isActive":false
            };
            if (CurPTService.checkDuplicate(int3, CurPTService.currentPT.intelist)) {
              int3.isActive=true;
            }
            if (!checkDuplicateMI(int3.name, ints)) {
             ints.push(int3);
            }
            
            var int4 = {
                "name": "NIMV",
                "isActive":false
            };
            if (CurPTService.checkDuplicate(int4, CurPTService.currentPT.intelist)) {
              int4.isActive=true;
            }
            if (!checkDuplicateMI(int4.name, ints)) {
             ints.push(int4);
            }
            
            var int5 = {
                "name": "Intubation",
                "isActive":false
            };
            if (CurPTService.checkDuplicate(int5, CurPTService.currentPT.intelist)) {
              int5.isActive=true;
            }
            if (!checkDuplicateMI(int5.name, ints)) {
             ints.push(int5);
            }
            
            var int6 = {
                "name": "Consult",
                "isActive":false
            };
            if (CurPTService.checkDuplicate(int6, CurPTService.currentPT.intelist)) {
              int6.isActive=true;
            }
            if (!checkDuplicateMI(int6.name, ints)) {
             ints.push(int6);
            }
        }
        
        else if (syn_name =='Anaphylaxis') {
            
            var int7 = {
                "name": "Laboratory",
                "isActive":false
            };
            if (CurPTService.checkDuplicate(int7, CurPTService.currentPT.intelist)) {
              int7.isActive=true;
            }
            if (!checkDuplicateMI(int7.name, ints)) {
             ints.push(int7);
            }
            
            var int8 = {
                "name": "Ultrasound",
                "isActive":false
            };
            if (CurPTService.checkDuplicate(int8, CurPTService.currentPT.intelist)) {
              int8.isActive=true;
            }
            if (!checkDuplicateMI(int8.name, ints)) {
             ints.push(int8);
            }
            
            var int9 = {
                "name": "Consult",
                "isActive":false
            };
            if (CurPTService.checkDuplicate(int9, CurPTService.currentPT.intelist)) {
              int9.isActive=true;
            }
            if (!checkDuplicateMI(int9.name, ints)) {
             ints.push(int9);
            }
        } 
        return ints;
    };
    
    
    return   {
      getMeds:getMeds,
      getInts:getInts,
      synName:synName
    }
    
  }
})();
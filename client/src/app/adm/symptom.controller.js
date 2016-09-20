(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('SymptomController', SymptomController);

  /** @ngInject */
function SymptomController($state, CurPTService) {
    var vm = this;
    
    
    //Section A
    vm.a1={
        name: "Airway compromise",
        isActive: false,
        section: "A"
    }
    vm.a2={
        name: "Stridor",
        isActive: false,
        section: "A"
    }
    vm.a3={
        name: "Wheezing",
        isActive: false,
        section: "A"
    }
    
    
    //Section B
    vm.b1={
        name: "Poor air entry",
        isActive: false,
        section: "B"
    }
    vm.b2={
        name: "Crackles",
        isActive: false,
        section: "B"
    }
    vm.b3={
        name: "Work of breathing",
        isActive: false,
        section: "B"
    }
    
    //Section C
    vm.cs = [{
        id: "c11",
        name: "Sinus",
        isActive: false,
        section: "C"
      },{
        id: "c12",
        name: "A.fib",
        isActive: false,
        section: "C"
      },{
        id: "c13",
        name: "SVT",
        isActive: false,
        section: "C"
      }, {
        id: "c14",
        name: "PVCs",
        isActive: false,
        section: "C"
      }, {
        id: "c15",
        name: "VT",
        isActive: false,
        section: "C"
      }, 
      {
        id: "c16",
        name: "AV block",
        isActive: false,
        section: "C"
      }, 
      {
        id: "c17",
        name: "ST changes",
        isActive: false,
        section: "C"
      },
      {
        id: "c18",
        name: "Other",
        isActive: false,
        section: "C"
      }
      ];
    vm.c2={
        name: "Weak pulse",
        isActive: false,
        section: "C"
    }
    vm.c3={
        name: "Mottling",
        isActive: false,
        section: "C"
    }
    
    
    // current item
    vm.c = CurPTService.currentPT.section_c; // vm.items[1];
    
    
    //Section D
    vm.ds = [{
        id: "d11",
        name: "Awake",
        isActive: false,
        section: "D"
      },{
        id: "d12",
        name: "Verbal responsive",
        isActive: false,
        section: "D"
      },{
        id: "d13",
        name: "Pain responsive",
        isActive: false,
        section: "D"
      }, {
        id: "d14",
        name: "Unresponsive",
        isActive: false,
        section: "D"
      }, {
        id: "c15",
        name: "Delirium",
        isActive: false,
        section: "D"
      },
      {
        id: "d16",
        name: "Other",
        isActive: false,
        section: "D"
      }
      ];
      
    vm.d2={
        name: "Seizure",
        isActive: false,
        section: "D"
    }
    vm.d3={
        name: "Focal deficit",
        isActive: false,
        section: "D"
    }
    
    vm.d = CurPTService.currentPT.section_d; 
    
    
    //Section E
    vm.e1={
        name: "Abd. distension",
        isActive: false,
        section: "D"
    }
    vm.e2={
        name: "Bleeding",
        isActive: false,
        section: "D"
    }
    
    vm.es = [{
        id: "e31",
        name: "Rash",
        isActive: false,
        section: "E"
      },{
        id: "e32",
        name: "Wound",
        isActive: false,
        section: "E"
      },{
        id: "e33",
        name: "Jaundice",
        isActive: false,
        section: "E"
      }, {
        id: "e34",
        name: "Subcut. emphysema",
        isActive: false,
        section: "E"
      }, {
        id: "e35",
        name: "Edema",
        isActive: false,
        section: "E"
      },
      {
        id: "e36",
        name: "Other",
        isActive: false,
        section: "E"
      }
      ];
    
    vm.e = CurPTService.currentPT.section_e; 
    
    
    // directive callback function    
    vm.callback = function(c) {
        // if (c.name =="Other") {
        //     var item = {
        //         id: "c19",
        //         name: vm.Cother,
        //         isActive: false,
        //         section: "C"
        //     }
        //     CurPTService.currentPT.section_c = item;
        // }
    };
    
    
    
    
    //get updated status for each symptom:
    for (var s in CurPTService.currentPT.symptomlist) {
        
      //A
      if (CurPTService.currentPT.symptomlist[s].name ==vm.a1.name) {
           vm.a1.isActive = true;
      }
      else if (CurPTService.currentPT.symptomlist[s].name ==vm.a2.name) {
           vm.a2.isActive = true;
      }
      else if (CurPTService.currentPT.symptomlist[s].name ==vm.a3.name) {
           vm.a3.isActive = true;
      }
      
      //B
      else if (CurPTService.currentPT.symptomlist[s].name ==vm.b1.name) {
           vm.b1.isActive = true;
      }
      else if (CurPTService.currentPT.symptomlist[s].name ==vm.b2.name) {
           vm.b2.isActive = true;
      }
       else if (CurPTService.currentPT.symptomlist[s].name ==vm.b3.name) {
           vm.b3.isActive = true;
      }
      
      //C
      else if (CurPTService.currentPT.symptomlist[s].name ==vm.c2.name) {
           vm.c2.isActive = true;
      }
      else if (CurPTService.currentPT.symptomlist[s].name ==vm.c3.name) {
           vm.c3.isActive = true;
      }
      
      //D
      else if (CurPTService.currentPT.symptomlist[s].name ==vm.d2.name) {
           vm.d2.isActive = true;
      }
      else if (CurPTService.currentPT.symptomlist[s].name ==vm.d3.name) {
           vm.d3.isActive = true;
      }
      
       //E
      else if (CurPTService.currentPT.symptomlist[s].name ==vm.e1.name) {
           vm.e1.isActive = true;
      }
      else if (CurPTService.currentPT.symptomlist[s].name ==vm.e2.name) {
           vm.e2.isActive = true;
      }
      
    }
    
    vm.activate = function(symptom) {
        
        symptom.isActive = !symptom.isActive;
         
        if (symptom.isActive) { 
             
             //check and add it into current patient status
            if (!CurPTService.checkDuplicate(symptom, CurPTService.currentPT.symptomlist)) {
                CurPTService.currentPT.symptomlist.push(symptom);
            }
             
        }
        else {
            
            //delete the sympton from current patient status
            if (CurPTService.checkDuplicate(symptom, CurPTService.currentPT.symptomlist)) {
                CurPTService.currentPT.symptomlist =CurPTService.currentPT.symptomlist.filter(
                     function(s){
                       return s.name !== symptom.name;
                });
            }
        
        }
    }  
  
     
         
  }
  

  
  
})();

(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('NewAdmController', NewAdmController);

  /** @ngInject */
  function NewAdmController( Auth, $state, $uibModal, localStorageService, 
                          ADMService, CurPTService) {
    
    Number.prototype.padLeft = function(base,chr){
    var  len = (String(base || 10).length - String(this).length)+1;
    return len > 0? new Array(len).join(chr || '0')+this : this; };
    
    
    var vm = this;
    //generate the randome clinic number here: 
    var ctnID = Math.floor(10000000 + Math.random() * 90000000).toString();
    vm.readmission = false;
	
	var d = new Date();
    var icuAdmDT = [
        d.getFullYear(),
        (d.getMonth()+1).padLeft(),
        d.getDate().padLeft()
    ].join('-')+' ' +
    [   d.getHours().padLeft(),
        d.getMinutes().padLeft(),
        d.getSeconds().padLeft()
    ].join(':');
    
    vm.adm = {
        "ctnID": ctnID,
        "firstName":"Test",
        "middleName":"",
        "lastName":"P.T",
        "icuAdmDT":icuAdmDT,
        "age":"",
        "gender":"Male",
        "bloodType":"B",
        "height":"",
        "weight":"",
        "userAdmit":localStorageService.get("user").username,
        "codeStatus":"A",
        "center": {
          "id": localStorageService.get("user").center.id
        }
    }
    
    vm.saveNewAdm = function (adm) {
      ADMService.saveAdmission(adm).then(function (response) {
        if(response.data.ctnID=="current in admission") {
          alert("duplicated clinic numbers");
        }
        else if (response.data.icuDisDT) {
          alert('clinic number existed, you need to re-admit this patient');
          vm.adm.firstName = response.data.firstName;
          vm.adm.middleName =response.data.middleName;
          vm.adm.lastName = response.data.lastName;
          vm.adm.age = response.data.age;
          vm.adm.gender = response.data.gender;
          vm.adm.bloodType = response.data.bloodType;
          vm.adm.height = response.data.height;
          vm.adm.weight = response.data.weight;
          vm.adm.codeStatus = response.data.codeStatus;
          vm.readmission =true;
         }
        else {
         $state.go("demo");
       }
      })
    }
    
    vm.reAdmit = function (adm) {
      //call re-admission service here
      ADMService.reAdmit(adm).then(function (response) {
        $state.go("demo");
      });
    }
   
   
   

    // vm.ptView = function(adm){
    //   CurPTService.adm = adm;
    //   var modalInstance = $uibModal.open( {
    //     animation: true,
    //     ariaLabelledBy: 'modal-title',
    //     ariaDescribedBy: 'modal-body',
    //     templateUrl: 'app/adm/ptview.html',
    //     controller: 'PTViewModalCtrl',
    //     resolve: {
    //     }
    //   });
    //   modalInstance.result.then();
    // };
    
    
    

  }
})();

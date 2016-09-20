(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('ChecklistController', ChecklistController);

  /** @ngInject */
  function ChecklistController($state, RDService, $uibModal) {
    var vm = this;
    vm.rdData = RDService.rdData;
    
    vm.printRD = function() {
      window.print();
    }
    
    vm.finishRD = function(size) {
      var modalInstance = $uibModal.open( {
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/rd/finishRD.html',
        controller: 'finishRDModalCtrl',
        backdrop: 'static',
        size: size,
        resolve: {
          
        }
      });
      modalInstance.result.then(
      );
      
    }
    //sedation break 
    vm.openSB = function(size){ 
      var modalInstance = $uibModal.open( {
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/rd/ckl-sb.html',
        controller: 'SBModalCtrl',
        size: size,
        resolve: {
        }
      });
      modalInstance.result.then();
    };
    //delirium
    vm.openDrm = function(size){ 
      var modalInstance = $uibModal.open( {
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/rd/ckl-drm.html',
        controller: 'DrmModalCtrl',
        size: size,
        resolve: {
        }
      });
      modalInstance.result.then();
    };
    //pain
    vm.openPain = function(size){ 
      var modalInstance = $uibModal.open( {
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/rd/ckl-pain.html',
        controller: 'PainModalCtrl',
        size: size,
        resolve: {
        }
      });
      modalInstance.result.then();
    };
    //cv medications
    vm.openCVMeds = function(size){ 
      var modalInstance = $uibModal.open( {
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/rd/ckl-cvmeds.html',
        controller: 'CVMedsModalCtrl',
        size: size,
        resolve: {
        }
      });
      modalInstance.result.then();
    };
    //LPV
    vm.openLPV = function(size){ 
      var modalInstance = $uibModal.open( {
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/rd/ckl-lpv.html',
        controller: 'LPVModalCtrl',
        size: size,
        resolve: {
        }
      });
      modalInstance.result.then();
    };
    //openSPB
    vm.openSPB = function(size){ 
      var modalInstance = $uibModal.open( {
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/rd/ckl-spb.html',
        controller: 'SPBModalCtrl',
        size: size,
        resolve: {
        }
      });
      modalInstance.result.then();
    };
    //openHOB
    vm.openHOB = function(size){ 
      var modalInstance = $uibModal.open( {
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/rd/ckl-hob.html',
        controller: 'HOBModalCtrl',
        size: size,
        resolve: {
        }
      });
      modalInstance.result.then();
    };
    //openFluid
    vm.openFluid = function(size){ 
      var modalInstance = $uibModal.open( {
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/rd/ckl-fluid.html',
        controller: 'FluidModalCtrl',
        size: size,
        resolve: {
        }
      });
      modalInstance.result.then();
    };
    //openElectrolyte
    vm.openElectrolyte = function(size){ 
      var modalInstance = $uibModal.open( {
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/rd/ckl-electro.html',
        controller: 'ElcModalCtrl',
        size: size,
        resolve: {
        }
      });
      modalInstance.result.then();
    };
    //openGlu
    vm.openGlu = function(size){ 
      var modalInstance = $uibModal.open( {
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/rd/ckl-glu.html',
        controller: 'GluModalCtrl',
        size: size,
        resolve: {
        }
      });
      modalInstance.result.then();
    };
    //openSup
    vm.openSup = function(size){ 
      var modalInstance = $uibModal.open( {
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/rd/ckl-sup.html',
        controller: 'SupModalCtrl',
        size: size,
        resolve: {
        }
      });
      modalInstance.result.then();
    };
    //openNutrition
    vm.openNutrition = function(size){ 
      var modalInstance = $uibModal.open( {
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/rd/ckl-nutrition.html',
        controller: 'NutritionModalCtrl',
        size: size,
        resolve: {
        }
      });
      modalInstance.result.then();
    };
    //DVT
    vm.openDVT = function(size){ 
      var modalInstance = $uibModal.open( {
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/rd/ckl-dvt.html',
        controller: 'DVTModalCtrl',
        size: size,
        resolve: {
        }
      });
      modalInstance.result.then();
    };
    //openAnti
    vm.openAnti = function(size){ 
      var modalInstance = $uibModal.open( {
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/rd/ckl-anti.html',
        controller: 'AntiModalCtrl',
        size: size,
        resolve: {
        }
      });
      modalInstance.result.then();
    };
    //openSkin
    vm.openSkin = function(size){ 
      var modalInstance = $uibModal.open( {
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/rd/ckl-skin.html',
        controller: 'SkinModalCtrl',
        size: size,
        resolve: {
        }
      });
      modalInstance.result.then();
    };
    //meds
    vm.openMeds = function(size){ 
      var modalInstance = $uibModal.open( {
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/rd/ckl-meds.html',
        controller: 'MedsModalCtrl',
        size: size,
        resolve: {
        }
      });
      modalInstance.result.then();
    };
    //openDvc
    vm.openDvc = function(size){ 
      var modalInstance = $uibModal.open( {
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/rd/ckl-dvc.html',
        controller: 'DvcModalCtrl',
        size: size,
        resolve: {
        }
      });
      modalInstance.result.then();
    };
    //openPT
    vm.openPT = function(size){ 
      var modalInstance = $uibModal.open( {
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/rd/ckl-pt.html',
        controller: 'PTModalCtrl',
        size: size,
        resolve: {
        }
      });
      modalInstance.result.then();
    };
     //goal
    vm.openGoal = function(size){ 
      var modalInstance = $uibModal.open( {
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/rd/ckl-goal.html',
        controller: 'GoalModalCtrl',
        size: size,
        resolve: {
        }
      });
      modalInstance.result.then();
    };
     //opendischarge
    vm.openDischarge = function(size){ 
      var modalInstance = $uibModal.open( {
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'app/rd/ckl-icuDischarge.html',
        controller: 'icuDischargeModalCtrl',
        size: size,
        resolve: {
        }
      });
      modalInstance.result.then();
    };
    
    
    
    

  }
})();

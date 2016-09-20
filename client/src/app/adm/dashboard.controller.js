(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($scope, $aside, $uibModal, 
  CurPTService, $state, SMIRuleEngine, ADMService) {
    
    $scope.currentPT =CurPTService.currentPT;
    // if (CurPTService.currentPT.medlist.length>0) {
    //   alert(CurPTService.currentPT.medlist[0].name);
    // }
    // else {
    //   alert("empty meds");
    // }
    $scope.bg = ADMService.data;
    
    $scope.symptom = "";
    for (var s in CurPTService.currentPT.symptomlist) {
      $scope.symptom += CurPTService.currentPT.symptomlist[s].name+",";
    }
    if(CurPTService.currentPT.section_c) {
      $scope.symptom+=CurPTService.currentPT.section_c.name+", ";
    }
    if(CurPTService.currentPT.section_d) {
      $scope.symptom+=CurPTService.currentPT.section_d.name+", ";
    }
    if(CurPTService.currentPT.section_e) {
      $scope.symptom+=CurPTService.currentPT.section_e.name+", ";
    }
    
    
    
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes()),
            s = checkTime(today.getSeconds());
        document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
        var t = setTimeout(function () {
            startTime()
        }, 500);
    }
    startTime();
    
    
    $scope.asideState = {
      open: false
    };
    
    $scope.smif = {
    autoHideScrollbar: false,
    theme: 'minimal-dark',
    advanced:{
        updateOnContentResize: true
    },
        setHeight: 200,
        scrollInertia: 0
    }
    
    $scope.bsvl = {
    autoHideScrollbar: true,
    theme: 'minimal-dark',
    axis: 'y',
    advanced:{
        updateOnContentResize: true
    },
        setHeight: 100,
        scrollInertia: 0
    }
    
    $scope.orderconfig = {
      autoHideScrollbar:true,
      theme: 'dark',
      advanced:{
        updateOnContentResize:true
      },
      setHeight: 370,
      scrollInertia: 0
    }

    
    $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'aside.html',
      size: size
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
    });
  };
  
  
  
  $scope.synDetail = function (synName) {
    SMIRuleEngine.synName = synName;
    $state.go("ic");
  };
  

  
    $scope.alert = function (synName) {
    alert("delete this item.");
  };
  
  $scope.orderMeds = function (medname) {
    var d = new Date();
    var today = [
        d.getFullYear(),
        (d.getMonth()+1).padLeft(),
        d.getDate().padLeft()
    ].join('-')+' ' +
    [   d.getHours().padLeft(),
        d.getMinutes().padLeft(),
        d.getSeconds().padLeft()
    ].join(':');
    
    var med = {
      "name": medname,
      "orderTime": today,
      "user": "Lei",
      "type":"medication"
    }
    
    CurPTService.currentPT.orders.push(med);
  };
  
    $scope.orderInts = function (intname) {
    var d = new Date();
    var today = [
        d.getFullYear(),
        (d.getMonth()+1).padLeft(),
        d.getDate().padLeft()
    ].join('-')+' ' +
    [   d.getHours().padLeft(),
        d.getMinutes().padLeft(),
        d.getSeconds().padLeft()
    ].join(':');
    
    var int = {
      "name": intname,
      "orderTime": today,
      "user": "Lei",
      "type":"intervention"
    };
    
    CurPTService.currentPT.orders.push(int);
  };
  
  
  $scope.completeOrder  = function (od) {
    
    for (var o in CurPTService.currentPT.orders) {
      if (od.name ==CurPTService.currentPT.orders[o].name &&
          od.orderTime ==CurPTService.currentPT.orders[o].orderTime) {
          
          CurPTService.currentPT.orders.splice(o,1);     
      }
    }
    
    var d = new Date();
    var today = [
        d.getFullYear(),
        (d.getMonth()+1).padLeft(),
        d.getDate().padLeft()
    ].join('-')+' ' +
    [   d.getHours().padLeft(),
        d.getMinutes().padLeft(),
        d.getSeconds().padLeft()
    ].join(':');
    var cp = {
      "name": od.name,
      "cpTime": today,
      "user": "Lei",
      "type": od.type
    }
    CurPTService.currentPT.cplist.push(cp);
    
  };


    $scope.openAside = function(position, backdrop) {
      $scope.asideState = {
        open: true,
        position: position
      };
      
      function postClose() {
        $scope.asideState.open = false;
      }
      
      $aside.open({
        templateUrl: 'app/adm/aside.html',
        placement: position,
        size: 'sm',
        backdrop: backdrop,
        controller: 'AsideController',
      }).result.then(postClose, postClose);
    }
    
    
  }
  
  
  
})();

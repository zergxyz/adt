(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('SignupController', SignupController);

  /** @ngInject */
  function SignupController($scope, $state, Auth, localStorageService){

    var vm = this;
    vm.user={};
    vm.user.center = Auth.center;

    vm.user.middleName = "";
    vm.user.jobTitle = "pysician";

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

    vm.user.joinedDate = today;

    //check valid token here:
    if( vm.user.center.id ==null) {
        $state.go("token");
    }

    vm.register = function (user) {
      Auth.userRegister(user).then(
        function (response) {
            //user existence checking
            if(response.data.id==null) {
                alert("user existed, please change your username");
            }
            else {
                localStorageService.set('user', response.data);
                $state.go("demo");
            }
        });
    }

  }
})();

(function() {
  'use strict';

  angular
    .module('ctnv2')
    .controller('SigninController', SigninController);

  /** @ngInject */
  function SigninController($scope, $state, Auth, localStorageService){
    
    // checkAuthentication();
    
    // function checkAuthentication () {
    //   var token = localStorageService.get('token'); 
    //   //we have a valid token
    //   if (token && token.expires_at && token.expires_at > new Date().getTime()) {
    //       //get user info from accout api and go to home page
    //       if(Principal._authenticated) {
    //         $state.go("demo");
    //       }
    //       else {
    //         Account.get().$promise
    //         .then(function (account) {
    //             Principal._identity = account;
    //             Principal._authenticated = true;
    //             $state.go("demo");
    //         })
    //         .catch(function() {
    //             Principal._identity = null;
    //             Principal._authenticated = false;
    //         });
    //       }
          
           
    //   }
    // }
    

    var vm = this;

    // vm.awesomeThings = [];
    // vm.classAnimation = '';
    // vm.creationDate = 1459707224958;
    vm.login = login;
    vm.claim = claim;
    // localStorageService.set('greetings', "Lei");
    // vm.hello = localStorageService.get('greetings');

    // activate();
    vm.user = {};

    function login() {
      vm.user.username = vm.username;
      vm.user.password = vm.password;
      Auth.authenticate(vm.user).then(
        function (response) {
          localStorageService.set('user', response.data);
          $state.go("demo");
        },
        function errorCallback(response) {
          alert("Invalid credentials, please try again");
          vm.username="";
          vm.password="";
        });
    }
    
     function claim() {
        $state.go("claim");
    }
    

    // function showToastr() {
    //   toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
    //   vm.classAnimation = '';
    // }

    // function getWebDevTec() {
    //   vm.awesomeThings = webDevTec.getTec();

    //   angular.forEach(vm.awesomeThings, function(awesomeThing) {
    //     awesomeThing.rank = Math.random();
    //   });
    // }
  }
})();

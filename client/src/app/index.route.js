(function() {
  'use strict';

  angular
    .module('ctnv2')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('signup', {
        url: '/signup',
        templateUrl: 'app/auth/signup.html',
        controller: 'SignupController',
        controllerAs: 'signup'
      })
      .state('claim', {
        url: '/claim',
        templateUrl: 'app/auth/claim.html',
        controller: 'ClaimController',
        controllerAs: 'claim'
      })
      // .state('token', {
      //   url: '/token',
      //   templateUrl: 'app/auth/token.html',
      //   controller: 'TokenController',
      //   controllerAs: 'token'
      // })
      .state('signin', {
        url: '/signin',
        templateUrl: 'app/auth/signin.html',
        controller: 'SigninController',
        controllerAs: 'signin'
      })
      .state('demo', {
        url: '/demo',
        templateUrl: 'app/adm/demo.html',
        controller: 'DemoController',
        controllerAs: 'demo'
      })
      .state('newadm', {
        url: '/demoadm',
        templateUrl: 'app/adm/demo-newadm.html',
        controller: 'NewAdmController',
        controllerAs: 'na'
      })
      .state('dashboard', {
        url: '/dashboard',
        templateUrl: 'app/adm/dashboard.html',
        controller: 'DashboardController'
      })
       .state('bg', {
        url: '/bg',
        templateUrl: 'app/adm/bg.html',
        controller: 'BGController',
        controllerAs:'bg'
      })
       .state('bg.sob', {
        url: '/sob',
        templateUrl: 'app/adm/bg-sob.html',
        controller: 'SOBController',
        controllerAs:'sob'
      })
      // nested states 
        // each of these sections will have their own view
        // url will be nested (/form/profile)
        .state('bg.sob.finding', {
            url: '/finding',
            templateUrl: 'app/adm/sob-finding.html',
             controller: 'SOBController',
             controllerAs:'sc'
        })
        
        // url will be /form/interests
        .state('bg.sob.syndrome', {
            url: '/syndrome',
            templateUrl: 'app/adm/sob-syndrome.html',
            controller: 'SOBController',
            controllerAs:'sc'
        })
        .state('bg.sob.action', {
            url: '/action',
            templateUrl: 'app/adm/sob-action.html',
            controller: 'SOBController',
            controllerAs:'sc'
        })
        .state('synmodal', {
        abstract: true,
        parent: 'dashboard',
        url: '/modal',
        onEnter: ['$uibModal','$state', function($uibModal, $state) {
            $uibModal.open({
            animation: true,
            size:"lg",
            templateUrl: 'app/cms/syndrome-modal.html',
            controller: 'SyndromeModalInstanceCtrl'
            }).result.finally(function() {
             
          });
        }]
      })
      .state('ic', {
        url: '/ic',
        parent: 'synmodal',
        views: {
          'synmodal@': {
            templateUrl: 'app/cms/ic.html'
            }
          }
      })
      .state('mas', {
        url: '/mas',
        parent: 'synmodal',
        views: {
          'synmodal@': {
            templateUrl: 'app/cms/mas.html'
            }
          }
      })
       .state('cau', {
        url: '/cau',
        parent: 'synmodal',
        views: {
          'synmodal@': {
            templateUrl: 'app/cms/cau.html'
            }
          }
      })
      .state('algo', {
        url: '/algo',
        parent: 'synmodal',
        views: {
          'synmodal@': {
            templateUrl: 'app/cms/algo.html'
            }
          }
      })
      .state('ref', {
        url: '/ref',
        parent: 'synmodal',
        views: {
          'synmodal@': {
            templateUrl: 'app/cms/ref.html'
            }
          }
      })  

      .state('syndromes', {
        url: '/syndromes',
        templateUrl: 'app/cms/syndromes.html',
        controller: 'CMSController'
      })
      
       .state('syndromes.syncard', {
        url: '/syncard',
        templateUrl: 'app/cms/syncard.html'
      })

      .state('syndromes.syncard.cardic', {
          url: '/cardic',
          templateUrl: 'app/cms/cardic.html'
      })
      .state('syndromes.syncard.cardmas', {
          url: '/cardmas',
          templateUrl: 'app/cms/cardmas.html'
      })

      
       .state('symptom', {
        url: '/symptom',
        templateUrl: 'app/adm/symptom.html',
        controller: 'SymptomController',
        controllerAs:'abcde'

      })
      
      .state('vital', {
        url: '/vital',
        templateUrl: 'app/adm/vitals.html'

      })
      
      
      
      
      .state('checklist', {
        url: '/checklist',
        templateUrl: 'app/rd/checklist.html',
        controller: 'ChecklistController',
        controllerAs:'rd'

      })
       .state('checklist.sb', {
        url: '/sb',
        templateUrl: 'app/rd/ckl-sb.html',
         controller: 'ChecklistController',
        controllerAs:'rd'
      })
      .state('checklist.drm', {
        url: '/drm',
        templateUrl: 'app/rd/ckl-drm.html',
         controller: 'ChecklistController',
        controllerAs:'rd'
      })
      
      .state('benchmark', {
        url: '/benchmark',
        templateUrl: 'app/report/benchmark.html',
        controller: 'BenchmarkController'

      })
      .state('benchtotal', {
        url: '/benchtotal',
        templateUrl: 'app/report/totalbench.html',
        controller: 'BenchtotalController'

      })
        
      ;


    $urlRouterProvider.otherwise('/signin');
  }

})();

(function() {
  'use strict';

  angular
    .module('ctnv2')
    .config(config)
    .factory(authInterceptor);
    
    

  /** @ngInject */
  function config($logProvider, toastrConfig, $httpProvider) {
    
   
    
    
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
    $httpProvider.interceptors.push(authInterceptor);
    
  }
  
  /** @ngInject */
  function authInterceptor($rootScope, $q, $location, localStorageService) {
    return {
        // Add authorization token to headers
        request: function (config) {
            config.headers = config.headers || {};
            var token = localStorageService.get('token');
            
            if (token && token.expires_at && token.expires_at > new Date().getTime()) {
                config.headers.Authorization = 'Bearer ' + token.data.access_token;
            }
            //alert(config.headers.Authorization);
            return config;
        }
    };
  }
  
  
  
  
  

})();

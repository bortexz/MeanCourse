/**
 * Created by alberto on 8/7/15.
 */
angular.module('services').factory('authInterceptor', function ($q, $window, $injector) {
  return {
    request: function (config) {
      config.headers = config.headers || {};
      if ($window.sessionStorage.token) {
        config.headers.Authorization = 'Bearer ' + $window.sessionStorage.token;
      }
      return config;
    },
    response: function (response) {
      if (response.status === 401) {
        $injector.get('$state').transitionTo('login');
      }
      return response || $q.when(response);
    }
  };
});

angular.module('services').config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
});
/*angular.module('events', [])
.controller('showEvents', function($http){
var self = this;
$http.get('/events/').then(function(response){

self.events = response.data;

})
 })*/

angular.module('events', [ 'ngRoute' ])
  .config(function($routeProvider, $httpProvider) {

    $routeProvider.when('/', {
      templateUrl : 'home.html',
      controller : 'showEvents',
      controllerAs: 'controller'
    }).when('/login', {
      templateUrl : 'login.html',
      controller : 'navigation',
      controllerAs: 'controller'
    }).otherwise('/');

    $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';

  })
  .controller('showEvents', function($http) {
    var self = this;
    $http.get('/events/').then(function(response) {
      self.events = response.data;
    })
  })
  .controller('navigation', function($rootScope, $http, $location) {

                              var self = this

                              var authenticate = function(credentials, callback) {

                                var headers = credentials ? {authorization : "Basic "
                                    + btoa(credentials.username + ":" + credentials.password)
                                } : {};

                                $http.get('user', {headers : headers}).then(function(response) {
                                  if (response.data.name) {
                                    $rootScope.authenticated = true;
                                  } else {
                                    $rootScope.authenticated = false;
                                  }
                                  callback && callback();
                                }, function() {
                                  $rootScope.authenticated = false;
                                  callback && callback();
                                });

                              }

                              self.logout = function() {
                                $http.post('logout', {}).finally(function() {
                                  $rootScope.authenticated = false;
                                  $location.path("/");
                                });
                              }


                              authenticate();
                                self.credentials = {};
                                self.login = function() {
                                    authenticate(self.credentials, function() {
                                      if ($rootScope.authenticated) {
                                        $location.path("/");
                                        self.error = false;
                                      } else {
                                        $location.path("/login");
                                        self.error = true;
                                      }
                                    });
                                };
                              });





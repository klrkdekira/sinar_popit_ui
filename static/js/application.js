var popitui = (function() {
  "use strict";

  //
  // AngularJS application module
  //
  var app = angular.module('popitui', [
    'ngRoute',
    'datatables',
    'popitui.service',
    'popitui.controller'
  ]);

  app.config([
    '$routeProvider',
    '$httpProvider',
    function($routeProvider, $httpProvider) {
      //
      // application routing
      //
      $routeProvider.
        when('/people', {
          templateUrl: 'static/partials/people.html'
        }).
        when('/organization', {
          templateUrl: 'static/partials/organization.html'
        }).
        when('/membership', {
          templateUrl: 'static/partials/membership.html'
        }).
        when('/post', {
          templateUrl: 'static/partials/post.html'
        }).
        otherwise({
          redirectTo: '/people'
        });
      }
  ]);

  // export our application
  return app;
}());

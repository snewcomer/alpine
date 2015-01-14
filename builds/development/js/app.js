var myApp = angular.module('myApp', ['ngRoute', 'appControllers']);

var appControllers = angular.module('appControllers', function($scope, $location, $anchorScroll) {
  $scope.scrollTo = function(id) {
    var old = $location.hash();
    $location.hash(id);
    $anchorScroll();
    //reset to old to keep any additional routing logic from kicking in
    $location.hash(old);
  }
});

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/aboutUs', {
      templateUrl:'views/aboutUs.html'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);

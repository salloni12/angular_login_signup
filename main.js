
var app = angular.module("routesApp", ['ngRoute']);
app.config(['$routeProvider',
function ($routeProvider) {
$routeProvider.when('/routeurl1', {
templateUrl: './singup.html',
controller: 'sample1Controller'
}).
when('/routeurl2', {
templateUrl: './signin.html',
controller: 'sample2Controller'

})
}
]);

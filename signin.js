
var app = angular.module("module");

app.controller('sample2Controller', function ($scope, $rootScope, $location, $http) {
    $rootScope.ishome = true;
    $scope.sendfile = function (email, password) {

        $http.post('/api/login', { email: email, password: password }).then(function (data) {

            console.log(data);
            if (data.data.success) {
                $location.path('/');
                $rootScope.ishome = true;

            }
            else {
                alert("Register please!!!!")
            }

        })

    }
});

app.controller('main', function ($scope, $rootScope) {
    $rootScope.ishome = true;
});





var app = angular.module("module", ['routesApp']);
        app.controller('sample1Controller', function ($scope,$location,$http,$rootScope,$window) {
            //$rootScope.ishome=false
             //inside the function-- $rootScope.ishome=true;
            
            $scope.sendfile=function(name,email,password)
            {
                if($scope.Validate()){
                    $http.post('/api/signup',{name:name,email:email,password:password}).then(function(data){
                        
                         console.log(data);
                         if(data.data.success){
                            alert("succssfully register");
                             $location.path('/routeurl2');
                             $rootScope.ishome=true;
                           
                             //$location.path('/');
                           
                         }
                         else{
                            alert("existing user");
                            //$location.path('/routeurl1');
                            $window.location.reload()
                            
                         }
         
                     })
                    
                   }
                    else{
                        $location.path('/routeurl1');
                    }
                   
                   
               /* $http.post('/api/user',{name:name,email:email,password:password}).then(function(data){
                                   
                                    console.log(data);
                                    if(data.data.success){
                                        $location.path('/routeurl2');
                                        $rootScope.ishome=true;
                                      
                                    }
                                    else{
                                     alert("somthing wrong!!!!")
                                    }
                    
                                })*/
                           
                                
              
            }
          
            $scope.Validate= function () {
                var password = document.getElementById("password").value;
                var confirmPassword = document.getElementById("cpassword").value;
                if (password != confirmPassword) {
                    alert("Passwords do not match.");
                    return false;
                }
                return true;
            }


            });
            

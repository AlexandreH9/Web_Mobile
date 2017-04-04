/**
 * Created by pierr on 04/04/2017.
 */
angular.module('user')
  .controller('RegisterController', function($scope, $http){
    $scope.title = "Register";

    $scope.users = [];

    $scope.register = function() {
      /*$scope.users.push($scope.user);
       $scope.user = {};*/

      $http({
        method: 'POST',
        url: '/api/user/register',
        data: $scope.user
      }).then(function(response) {
        $scope.user = {}
      });
    }

    $scope.refresh = function() {
      $http.get('/api/user/register').then(function(response) {
        $scope.users = response.data;
      });
    }

  })
  .controller('LoginController', function($scope) {
    $scope.title = "Login";
  });

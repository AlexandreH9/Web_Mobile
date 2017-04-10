/**
 * Created by pierr on 10/04/2017.
 */
angular.module('starter')
  .controller('RegisterTeam', function($scope, $http){
    $scope.title = "Register";

    $scope.team = [];

    $scope.register = function() {

      $http({
        method: 'POST',
        url: '/api/team/register',
        data: $scope.team
      }).then(function(response) {
        $scope.team = {}
      });
    }

    $scope.refresh = function() {
      $http.get('/api/team/register').then(function(response) {
        $scope.teams = response.data;
      });
    }

  })
  .controller('LoginController', function($scope) {
    $scope.title = "Login";
  })
  .controller('TeamController', function ($scope, $http) {

    $http({
      url : "/api/team/register",
      method: "GET",
    }).then(function (response) {
      $scope.teams = response.data;
    })

  });

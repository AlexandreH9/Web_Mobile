/**
 * Created by pierr on 04/04/2017.
 */
angular.module('starter')
  .controller('RegisterUser', function($scope, $http){
    //$scope.title = "Register";

    //$scope.users = [];

    $scope.register = function() {

      $http({
        method: 'POST',
        url: '/api/auth/registerUser',
        data: $scope.user
      }).then(function(response) {
        $scope.user = {};
      });

    };



    // $scope.refresh = function() {
    //   $http.get('/api/user/register').then(function(response) {
    //     $scope.users = response.data;
    //   });
    // }

  })
  .controller('loginUser', function($scope, $http, $state) {


    $scope.login = function () {
      $http({
        method: 'POST',
        url: '/api/auth/authUser',
        data: $scope
      }).then(function (response) {
        console.log(response.message);
        if (response.message === 'Yep') {
          localStorage.setItem('token', response.token);

          //$state.go("pHome");
        }
        else {
          console.log("Authentification Failed");
        }
      });
    };
  })












  .controller('UserController', function ($scope, $http) {

    $http({
      url : "/api/user/register",
      method: "GET",
    }).then(function (response) {
      $scope.users = response.data;
    });

  })
//team
  .controller('RegisterTeam', function($scope, $http){
    $scope.title = "Register";

    $scope.team = [];

    $scope.register = function() {

      $http({
        method: 'POST',
        url: '/api/auth/registerTeam',
        data: $scope.team
      }).then(function(response) {
        $scope.team = {};
      });
    };

  })
  .controller('TeamController', function ($scope, $http) {

    $http({
      url : "/api/team/register",
      method: "GET",
    }).then(function (response) {
      $scope.teams = response.data;
    });

  })
;

/**
 * Created by pierr on 04/04/2017.
 */
angular.module('starter')
  .controller('RegisterUser', function($scope, $http){

    $scope.register = function() {

      $http({
        method: 'POST',
        url: '/api/auth/registerUser',
        data: $scope.user
      }).then(function(response) {
        //$scope.user = {};

      });

    };

  })
  .controller('loginUser', function($scope, $http, $state) {
    $scope.login = function () {
      $http({
        method: 'POST',
        url: '/api/auth/authUser',
        data: $scope.user
      }).then(function (response) {

        console.log(response.data.token);
        if (response.data.message === 'Yep') {
          localStorage.setItem('token','JWT ' + response.data.token);

          $state.go("step1");
        }
        else {
          console.log("Authentification Failed");
        }
      });
    };
  })
  //change data
  .controller('IdSteam', function($scope, $http, $state) {
    $scope.addId = function () {
      console.log("Debut");
      $http({
        method: 'POST',
        url: '/api/user/change/idSteam',
        data: $scope.user,
        headers : {
          Authorization: localStorage.getItem('token')
        }
      }).then(function(response) {
        console.log("ok");
        $scope.message = response.data.message ;

      });
    };
  })
  .controller('username', function($scope, $http, $state) {
    $scope.changeUser = function () {
      $http({
        method: 'POST',
        url: '/api/user/change/username',
        data: $scope.user,
        headers : {
          Authorization: localStorage.getItem('token')
        }
      }).then(function(response) {
        $scope.message = response.data.message ;
      });
    };
  })
  .controller('password', function($scope, $http, $state) {
    $scope.changePassword = function () {
      $http({
        method: 'POST',
        url: '/api/user/change/password',
        data: $scope.user,
        headers : {
          Authorization: localStorage.getItem('token')
        }
      }).then(function(response) {
        $scope.message = response.data.message ;

      });
    };
  })
  .controller('email', function($scope, $http, $state) {
    $scope.changeEmail = function () {
      $http({
        method: 'POST',
        url: '/api/user/change/email',
        data: $scope.user,
        headers : {
          Authorization: localStorage.getItem('token')
        }
      }).then(function(response) {
        $scope.message = response.data.message ;

      });
    };
  })




  .controller('UserController', function ($scope, $http) {

    $http({
      url : "/api/auth/registerUser",
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

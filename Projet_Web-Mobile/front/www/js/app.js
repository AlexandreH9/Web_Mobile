// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])//, 'ngStorage'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('begin' ,{
        url: '/templates/begin',
        templateUrl: 'templates/begin.html'
      })

      //Path for player pages
      .state('pHome' ,{
        url: '/Player/home',
        templateUrl: 'templates/Player/home.html'
      })
      .state('pSearch', {
        url: '/Player/search',
        templateUrl:'templates/Player/search.html'
      })
      .state('pSettings', {
        url: '/Player/settings',
        templateUrl:'templates/Player/settings.html'
      })
      .state('player' ,{
        url: '/player',
        templateUrl: 'templates/Player/connexionPlayer.html'
      })

      .state('step1' ,{
        url: '/Player/step1',
        templateUrl: 'templates/Player/inscription/step1.html'
      })
      .state('step2' ,{
        url: '/Player/step2',
        templateUrl: 'templates/Player/inscription/step2.html'
      })
      .state('step3' ,{
        url: '/Player/step3',
        templateUrl: 'templates/Player/inscription/step3.html'
      })

      //Path for team pages
      .state('team' ,{
        url: '/team',
        templateUrl: 'templates/Team/connexionTeam.html'
      })
      .state('tHome' ,{
        url: '/Team/home',
        templateUrl: 'templates/Team/home.html'
      })
      .state('tSearch', {
        url: '/Team/search',
        templateUrl:'templates/Team/search.html'
      })
      .state('tSettings', {
        url: '/Team/settings',
        templateUrl:'templates/Team/settings.html'
      })



      .state('otherwise', {
        url: '/',
        templateUrl: 'templates/begin.html'
      })
  })

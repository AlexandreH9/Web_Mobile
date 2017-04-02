angular.module('app')
    .config(function($routeProvider) {
        $routeProvider
            .when("/", {
                // permet d'associer la vue et le controller
                // à l'url /
                templateUrl: 'app/user/views/register.html',
                controller: 'RegisterController'
            })
            .when("/login", {
                templateUrl: 'app/user/views/login.html',
                controller: 'LoginController'
            })
            .otherwise({
                // si aucune route n'est match, redirect sur /
                redirect: '/'
            })
    })

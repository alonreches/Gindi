angular.module('Artify', ['ngAnimate', 'ngMaterial', 'ngRoute', 'ngCookies'])

    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('grey', {
                'default': '900'
            })
            .accentPalette('pink', {
                'default': '500'
            })
    })

    .run(['$rootScope', '$location','$http',
        function ($rootScope, $location, $http) {
            console.log("Hey!");
        }]);

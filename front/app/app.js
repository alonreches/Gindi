angular.module('Artify', ['ngAnimate', 'ngMaterial', 'ngRoute', 'ngCookies'])

    .config(function ($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('indigo', {
                'default': 'A700'
            })
            .accentPalette('pink', {
                'default': '500'
            })
    })

    .run(['$rootScope', '$location','$http',
        function ($rootScope, $location, $http) {
            console.log("Hey!");
        }]);

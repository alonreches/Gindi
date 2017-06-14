angular.module('Artify')
    .directive('home', ['$location', '$rootScope',
    function ($location, $rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'app/components/views/home.view.html'
        };
    }])
    .directive('navbar', ['$location', '$rootScope',
        function ($location, $rootScope) {
            return {
                restrict: 'E',
                templateUrl: 'app/components/views/navbar.view.html'
            };
        }])
;



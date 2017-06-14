angular.module('Artify')

    .controller('NavbarController', ['$scope', '$rootScope', '$location', '$timeout', '$routeParams', '$mdMedia', '$mdMenu', '$mdDialog',
        function ($scope, $rootScope, $location, $timeout, $routeParams, $mdMedia, $mdMenu, $mdDialog) {

            $scope.customFullscreen = false;

        }]);
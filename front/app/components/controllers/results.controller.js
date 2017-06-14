angular.module('Artify')

    .controller('ResultsController', ['$scope', '$rootScope', '$location', '$mdMedia', '$mdMenu', 'WebService',
        function ($scope, $rootScope, $location, $mdMedia, $mdMenu, WebService) {

            $scope.results = WebService.results;

        }]);
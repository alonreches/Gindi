angular.module('Artify')

    .controller('ResultsController', ['$scope', '$rootScope', '$location', '$mdMedia', '$mdMenu', 'WebService',
        function ($scope, $rootScope, $location, $mdMedia, $mdMenu, WebService) {

            $scope.results = WebService.results;
            $scope.artFile = WebService.file;
            $scope.artImage = WebService.artImage;

            $scope.$watch('artImage', function () {
                console.log("Image loaded!");
            });
        }]);
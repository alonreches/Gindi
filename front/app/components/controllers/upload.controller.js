angular.module('Artify')

    .controller('UploadController', ['$scope', '$rootScope', '$location', '$mdMedia', '$mdMenu', 'WebService', '$mdDialog',
        function ($scope, $rootScope, $location, $mdMedia, $mdMenu, WebService, $mdDialog) {

            // $scope.userInput = "";

            $rootScope.showNavLogo = false;
            $scope.file = {};
            $scope.fileUploaded = false;

            $scope.$watch('fileUploaded', function () {
                if ($scope.fileUploaded) {
                    if ($scope.file != null) {
                        WebService.analyze($scope.file);
                    }
                }
            });
        }]);
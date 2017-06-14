angular.module('Artify')

    .controller('HomeController', ['$scope', '$rootScope', '$location', '$mdMedia', '$mdMenu',
        function ($scope, $rootScope, $location, $mdMedia, $mdMenu) {

            $scope.signIn = function() {
                console.log("Yeah!");
            }
        }]);
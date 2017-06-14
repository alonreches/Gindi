angular.module('Artify')

    .controller('DialogController', ['$scope', '$rootScope', '$location', '$mdMedia', '$mdMenu', 'WebService', '$mdDialog',
        function ($scope, $rootScope, $location, $mdMedia, $mdMenu, WebService, $mdDialog) {

            $scope.userInput = "";

            $rootScope.showNavLogo = false;


            $scope.firstQuestion = function(ev) {
                if ($scope.userInput.length > 0) {
                    WebService.postFirstQuestion($scope.userQuestion)
                        .then(function (response) {
                            var dataObj = response.data;
                            WebService.answer.knownData = dataObj.data;
                            WebService.answer.type = dataObj.type;
                            WebService.answer.next = dataObj.next;

                            if (WebService.answer.type == 'mail' && WebService.answer.next == 'subject') {
                                $location.path('/mail/content');
                            } else if (WebService.answer.type == 'mail' && WebService.answer.next == 'persons') {
                                $location.path('/mail/people')
                            } else if (WebService.answer.next == null) {
                                $location.path('/finish')
                            }

                        }, function () {
                            $mdDialog.show(
                                $mdDialog.alert()
                                    .parent(angular.element(document.body))
                                    .clickOutsideToClose(true)
                                    .title("Failure...")
                                    .textContent(":(")
                                    .ok("Got it")
                            );
                        })
                }
            }
        }]);
/**
 * Created by gullumbroso on 22/08/2016.
 */

angular.module('Artify')
    .factory('WebService', ['$http', '$rootScope', '$location',
        function WebServiceFactory($http, $rootScope, $location) {

            var service = {};
            var BASE_URL = "";

            service.results = {
                album_cover: 'assets/images/album_cover_example.jpg',
                title: 'Because',
                artist: 'Beatles',
                album: 'Abby Road',
                mainGenre: 'Rock'
            };

            service.analyze = analyze;

            return service;

            function analyze() {
                $http.post(BASE_URL, fd, {
                    // this cancels AngularJS normal serialization of request
                    transformRequest: angular.identity,
                    // this lets browser set `Content-Type: multipart/form-data`
                    // header and proper data boundary
                    headers: {'Content-Type': undefined}
                })
                    .success(function () {

                        $location.path('/results');
                    })

                    .error(function () {
                        console.log("Something wrong :(");
                    });
            }

        }]);
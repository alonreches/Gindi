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

            service.file = {};
            service.artImage = {};

            service.analyze = analyze;

            return service;

            function analyze(file) {
                service.file = file;
                var fd = new FormData();
                if (file != null) {
                    convertFileToImage();
                    fd.append('myFile', file);
                } else {
                    console.error("Problem in the analyze function!");
                    return;
                }
                console.log("Starting upload!");
                $location.path('/results');
                // $http.post(BASE_URL, fd, {
                //     // this cancels AngularJS normal serialization of request
                //     transformRequest: angular.identity,
                //     // this lets browser set `Content-Type: multipart/form-data`
                //     // header and proper data boundary
                //     headers: {'Content-Type': undefined}
                // })
                //     .success(function () {
                //
                //         $location.path('/results');
                //     })
                //
                //     .error(function () {
                //         console.log("Something wrong :(");
                //     });
            }

            function convertFileToImage() {
                var reader = new FileReader();

                reader.addEventListener("load", function () {
                    service.artImage = reader.result;
                }, false);

                if (file) {
                    reader.readAsDataURL(file);
                }
            }

        }]);
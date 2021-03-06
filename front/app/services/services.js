/**
 * Created by gullumbroso on 22/08/2016.
 */

angular.module('Artify')
    .factory('WebService', ['$http', '$rootScope', '$location',
        function WebServiceFactory($http, $rootScope, $location) {

            var service = {};
            var BASE_URL = "http://127.0.0.1:8000/gindi/labels";

            service.results = {
                artwork: 'assets/images/album_cover_example.jpg',
                title: 'Because',
                artist: 'Beatles',
                album: 'Abby Road',
                color: 'Red',
                words: ['Psychadelic', 'Cool', 'Kids']
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
                $location.path('/processing');
                $http.post(BASE_URL, fd, {
                    // this cancels AngularJS normal serialization of request
                    transformRequest: angular.identity,
                    // this lets browser set `Content-Type: multipart/form-data`
                    // header and proper data boundary
                    headers: {'Content-Type': undefined}
                })
                    .success(function (result) {
                        var data = result;
                        service.results = {
                            album_cover: 'assets/images/album_cover_example.jpg',
                            title: data.name,
                            artist: data.artist,
                            album: data.album,
                            artwork: data.cover,
                            words: data.words
                        };
                        $location.path('/results');
                    })

                    .error(function () {
                        // console.log("Something wrong :(");
                        $location.path('/results');
                    });
            }

            function convertFileToImage() {
                var reader = new FileReader();

                reader.addEventListener("load", function () {
                    service.artImage = reader.result;
                }, false);

                if (service.file) {
                    reader.readAsDataURL(service.file);
                }
            }

        }]);
/**
 * Created by gullumbroso on 22/08/2016.
 */

angular.module('Artify')
    .factory('WebService', ['$http', '$rootScope',
        function WebServiceFactory($http, $rootScope) {

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
                return $http.get(FIRST_ANSWER_URL, {params: {'firstQuestion': firstQuestion}});
            }

        }]);
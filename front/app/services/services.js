/**
 * Created by gullumbroso on 22/08/2016.
 */

angular.module('Artify')
    .factory('WebService', ['$http', '$rootScope',
        function WebServiceFactory($http, $rootScope) {

            var FIRST_ANSWER_URL = 'http://127.0.0.1:8000/first_answer/';
            var MORE_QUESTIONS_URL = 'http://127.0.0.1:8000/update_data/';

            var service = {};

            service.postFirstQuestion = postFirstQuestion;
            service.postMoreQuestions = postMoreQuestions;

            service.answer = [];

            return service;


            function postFirstQuestion(firstQuestion) {
                return $http.get(FIRST_ANSWER_URL, {params: {'firstQuestion': firstQuestion}})
            }

            function postMoreQuestions(type, answerObj) {
                return $http.get(MORE_QUESTIONS_URL, {params: {'type': type, 'answer': answerObj}})
            }
        }]);
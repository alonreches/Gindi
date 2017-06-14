angular.module('Artify')
    .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'app/components/views/home.view.html',
                controller: 'HomeController'
            })
            .when('/home', {
                templateUrl: 'app/components/views/home.view.html',
                controller: 'ConversationController'
            })
            .when('/results', {
                templateUrl: 'app/components/views/results.view.html',
                controller: 'ResultsController'
            })
            .otherwise({redirectTo: '/'});
    }]);

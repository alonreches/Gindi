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
            .when('/mail/content', {
                templateUrl: 'app/components/views/mail-content.view.html',
                controller: 'MailContentController'
            })
            .when('/mail/people', {
                templateUrl: 'app/components/views/mail-people.view.html',
                controller: 'MailPeopleController'
            })
            .when('/finish', {
                templateUrl: 'app/components/views/finish.view.html',
                controller: 'FinishController'
            })
            .otherwise({redirectTo: '/'});
    }]);

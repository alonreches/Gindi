angular.module('Artify')
    .directive('navbar', ['$location', '$rootScope', function ($location, $rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'app/components/views/navbar.view.html',
            controller: 'NavbarController'
        };
    }])
    .directive('home', ['$location', '$rootScope',
    function ($location, $rootScope) {
        return {
            restrict: 'E',
            templateUrl: 'app/components/views/home.view.html'
        };
    }])
    .directive('uploadFormat', ['$location', '$rootScope',
        function ($location, $rootScope) {
            return {
                restrict: 'E',
                templateUrl: 'app/components/views/uploadFormat.view.html',
                controller: 'UploadController'
            };
        }])
    .directive('apsUploadFile', apsUploadFile)
    .directive('takePicture', takePicture)
;

function apsUploadFile() {
    var directive = {
        restrict: 'E',
        templateUrl: 'app/components/views/upload.file.template.html',
        link: apsUploadFileLink
    };
    return directive;
}

function apsUploadFileLink(scope, element, attrs) {
    var input = $(element[0].querySelector('#fileInput'));
    var button = $(element[0].querySelector('#uploadButton'));
    var textInput = $(element[0].querySelector('#textInput'));

    if (input.length && button.length) {
        button.click(function (e) {
            input.click();
        });
        textInput.click(function (e) {
            input.click();
        });
    }

    input.on('change', function (e) {
        var files = e.target.files;
        if (files[0]) {
            scope.fileName = files[0].name;
        } else {
            scope.fileName = null;
        }
        scope.$apply();
    });
}

function takePicture(){
    var directive = {
        restrict: 'E',
        templateUrl: 'app/components/views/takePicture.template.html',
        link: takePictureLink
    };
    return directive;
}

function takePictureLink(scope, element, attrs) {
    var input = $(element[0].querySelector('#fileInput'));
    var button = $(element[0].querySelector('#cameraButton'));
    if (input.length && button.length) {
        button.click(function (e) {
            input.click();
        });
    }

}



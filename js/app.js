angular.module('edgewater', ['ngRoute'])

    .config(function ($routeProvider) {
        $routeProvider
            .when('/jobs', {
                templateUrl: 'jobs.html'
            })
            .when('/contact', {
                templateUrl: 'contact.html',
                controller: 'newContactCtrl as newContact'
            })
            .when('/contractors', {
                templateUrl: 'contractors.html'
            })
            .when('/', {
                templateUrl: 'home.html'
            })
            .otherwise({
                redirectTo: '/'
            });

    })
    .controller('headerCtrl', function ($scope, $location) {
        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    })
    .controller('newContactCtrl', function ($location) {
        var newContact = this;
        // var woId = $routeParams.woId;
        //qcCheckpoint.items = [];

        newContact.save = function () {

        };
    });


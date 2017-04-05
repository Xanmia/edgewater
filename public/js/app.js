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
    .controller('headerCtrl', function ($location) {
        this.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };
    })
    .controller('newContactCtrl', function () {
        //placeholder for new contact

        this.save = function () {
            alert('yes');
        };
    });


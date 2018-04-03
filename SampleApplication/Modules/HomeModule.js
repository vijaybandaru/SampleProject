var app = angular
            .module("Demo", ["ngRoute"])
            .config(['$routeProvider',function ($routeProvider) {
                $routeProvider
                    .when("/home", {
                        //template:"<div>as</div>"
                        templateUrl: "./Templates/home.html",
                        controller: "homeController"
                    })
                    .when("/courses", {
                        templateUrl: "./Templates/courses.html",
                        controller: "coursesController"
                    })
                    .when("/students", {
                        templateUrl: "./Templates/students.html",
                        controller: "studentsController"
                    })
            }])
            .controller("homeController", function ($scope) {
                $scope.message = "Home Page";
            })
            .controller("coursesController", function ($scope) {
                $scope.courses = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
            })
             .controller("studentsController", function ($scope) {
                 $scope.students = ["C#", "VB.NET", "ASP.NET", "SQL Server"];
             })

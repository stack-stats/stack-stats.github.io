(function (angular) {
    'use strict';

    var languageChartController = function ($scope) {
        $scope.labels = ["C#", "C++", "C", "PHP", "Ruby", "Java", "Python","Objective-C", "JavaScript", "Perl", "Scala", "R"];
        $scope.series = ['Series A', 'Series B'];
        $scope.data = [
          [1144, 447, 224, 350, 176, 665, 336, 34, 415, 81, 2, 2]];
        $scope.colours = ['#72C02C', '#3498DB', '#717984', '#F1C40F'];
    };

    languageChartController.$inject = ['$scope'];

    angular.module('myapp').controller('LanguageChartController', languageChartController);

})(angular);
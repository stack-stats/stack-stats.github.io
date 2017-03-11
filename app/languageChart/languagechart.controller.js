(function (angular) {
  'use strict';

  var languageChartController = function ($scope, $http) {

    $http.get('JSON/limited_tags.json')
    .then(function(res){
      $scope.tags = res.data;
      manageJson();
      manageData();
    });

    $scope.$watch('selectedYear', function(newVal, oldVal){
      if ($scope.tags){
        manageData();
      }
    });

    $scope.years = [];
    $scope.labels = [];
    $scope.data = [];
    $scope.selectedYear = {id: "2011", name: "2011"};

    // $scope.labels = ["C#", "C++", "C", "PHP", "Ruby", "Java", "Python","Objective-C", "JavaScript", "Perl", "Scala", "R"];
    $scope.series = ['Series A', 'Series B'];
    // $scope.data = [
    // [1144, 447, 224, 350, 176, 665, 336, 34, 415, 81, 2, 2]];
    $scope.colours = ['#72C02C', '#3498DB', '#717984', '#F1C40F'];


  var manageData = function(){
    $scope.labels = [];
    $scope.data = [];

    for (var tag in $scope.tags[$scope.selectedYear.id]) {
      $scope.labels.push(tag);
      $scope.data.push($scope.tags[$scope.selectedYear.id][tag]);
    }
  }

  var manageJson = function() {
    var count = 0;
    for (var year in $scope.tags) {
      var object = {};
      object.id = year;
      object.name = year
      $scope.years.push(object);
    }
  };

  var initialize = function() {
  };

  initialize();

};

  languageChartController.$inject = ['$scope', '$http'];

  angular.module('myapp').controller('LanguageChartController', languageChartController);

})(angular);
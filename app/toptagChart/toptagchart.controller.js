(function (angular) {
  'use strict';

  var toptagChartController = function ($scope, $http) {

    $http.get('JSON/tags.json')
    .then(function(res){
      $scope.tags = res.data;
      manageJson();
      manageData();
    });

    $scope.yearSelect = function(value){
      $scope.selectedYear = value;
      if ($scope.tags){
        manageData();
      }
    }

    $scope.years = [];
    $scope.labels = [];
    $scope.data = [];
    $scope.selectedYear = {id: "2016", name: "2016"};

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

  };

  toptagChartController.$inject = ['$scope', '$http'];

  angular.module('myapp').controller('ToptagChartController', toptagChartController);

})(angular);
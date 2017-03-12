(function (angular) {
  'use strict';

  var monthlyChartController = function ($scope, $http) {

    $http.get('JSON/monthly.json')
    .then(function(res){
      $scope.months = res.data;
      manageJson();
      manageData();
    });

    $scope.$watch('selectedYear', function(newVal, oldVal){
      if ($scope.months){
        manageData();
      }
    });

    $scope.years = [];
    $scope.labels = [];
    $scope.data = [];
    $scope.selectedYear = {id: "2016", name: "2016"};

    $scope.colours = ['#72C02C', '#3498DB', '#717984', '#F1C40F'];


    var manageData = function(){
      $scope.labels = [];
      $scope.data = [];

      for (var month in $scope.months[$scope.selectedYear.id]) {
        $scope.labels.push(month);
        $scope.data.push($scope.months[$scope.selectedYear.id][month]);
      }
      var lastLabels = $scope.labels.slice(0,3);
      $scope.labels = $scope.labels.slice(3, 12);
      $scope.labels = $scope.labels.concat(lastLabels);

      var lastData = $scope.data.slice(0,3);
      $scope.data = $scope.data.slice(3, 12);
      $scope.data = $scope.data.concat(lastData);
    }

    var manageJson = function() {
      var count = 0;
      for (var year in $scope.months) {
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

  monthlyChartController.$inject = ['$scope', '$http'];

  angular.module('myapp').controller('MonthlyChartController', monthlyChartController);

})(angular);
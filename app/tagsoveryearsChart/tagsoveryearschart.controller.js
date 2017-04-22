(function (angular) {
  'use strict';

  var tagsoveryearsChartController = function ($scope, $http) {

    $http.get('JSON/tags_over_years.json')
    .then(function(res){
      $scope.tags = res.data;
      manageJson();
      manageData();
    });

    $scope.yearSelect = function(value){
      $scope.selectedTag = value;
      if ($scope.tags){
        manageData();
      }
    }

    $scope.tagList = [];
    $scope.labels = [];
    $scope.data = [];
    $scope.selectedTag = {id: "javascript", name: "javascript"};

    $scope.colours = ['#72C02C', '#3498DB', '#717984', '#F1C40F'];


    var manageData = function(){
      $scope.labels = [];
      $scope.data = [];

      for (var year in $scope.tags[$scope.selectedTag.id]) {
        $scope.labels.push(year);
        $scope.data.push($scope.tags[$scope.selectedTag.id][year]);
      }
    }

    var manageJson = function() {
      var count = 0;
      for (var tag in $scope.tags) {
        var object = {};
        object.id = tag;
        object.name = tag
        $scope.tagList.push(object);
      }
    };

  };

  tagsoveryearsChartController.$inject = ['$scope', '$http'];

  angular.module('myapp').controller('TagsoveryearsChartController', tagsoveryearsChartController);

})(angular);
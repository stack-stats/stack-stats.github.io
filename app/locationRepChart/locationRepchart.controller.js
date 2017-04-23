(function (angular) {
  'use strict';

  var locationRepChartController = function ($scope, $http) {

    $http.get('JSON/location_reputation.json')
    .then(function(res){
      $scope.tags = res.data;
      manageJson();
      manageData();
    });

    $scope.select = function(value){
      $scope.selectedSlot = value;
      if ($scope.tags){
        manageData();
      }
    }

    $scope.slotList = [];
    $scope.labels = [];
    $scope.data = [];
    $scope.selectedSlot = {id: "1 to 20", name: "1 to 20"};

    $scope.colours = ['#72C02C', '#3498DB', '#717984', '#F1C40F'];


    var manageData = function(){
      $scope.labels = [];
      $scope.data = [];

      for (var data in $scope.tags[$scope.selectedSlot.id]) {
        var length = 12;
        var trimmedString = data.length > length ? 
                    data.substring(0, length - 3) + "..." : 
                    data;
        $scope.labels.push(trimmedString);
        $scope.data.push($scope.tags[$scope.selectedSlot.id][data]);
      }
    }

    var manageJson = function() {
      var count = 0;
      for (var slot in $scope.tags) {
        var object = {};
        object.id = slot;
        object.name = slot;
        $scope.slotList.push(object);
      }
    };

  };

  locationRepChartController.$inject = ['$scope', '$http'];

  angular.module('myapp').controller('LocationRepChartController', locationRepChartController);

})(angular);
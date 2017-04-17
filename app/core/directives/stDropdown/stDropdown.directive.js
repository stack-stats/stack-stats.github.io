(function (angular) {
  'use strict';

  var stDropdown = function ($window) {
    var directive = {
      scope: {
        model: '=',
        datasource: '=',
        selectcallback: '&'
      },
      templateUrl: 'app/core/directives/stDropdown/stDropdown.html',
      restrict: 'E',
      link: {
        post: function (scope, element) {

          scope.dropdownSelect = function(value){
            scope.selectcallback({value: value});
          }

        }
      }
    };
    return directive;
  };
  angular.module('myapp').directive('stDropdown', stDropdown);

}(angular));
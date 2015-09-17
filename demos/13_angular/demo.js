/*
 * demo.js
 * Distributed under terms of the MIT license.
 */

/*global angular*/

var myapp = angular.module('app', []);

myapp.controller('mainCtrl', MainController);


MainController.$inject = ['$scope'];
function MainController($scope) {
  var vm = this;

  vm.clicks  = 0;
  vm.name    = "Ynon";
  vm.email   = "ynon@ynonperek.com";
  vm.website = 'https://www.tocode.co.il';
  vm.bravo   = false;
  vm.seconds = 0;

  setInterval(function() {
    vm.seconds++;
    // Hey Angular! something's changed
    // please re-calculate ALL THE THINGS
    $scope.$apply();
  }, 1000);

  vm.clicked = function() {
    vm.clicks++;
    vm.bravo = (vm.clicks >= 10); 
  };

  vm.cps = function() {
    return vm.seconds > 0 ? vm.clicks / vm.seconds : 0;
  };


}


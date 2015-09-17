/*
 * main_ctrl.js
 * Copyright (C) 2015 ynonperek <ynonperek@localhost>
 *
 * Distributed under terms of the MIT license.
 */

(function() {

  var app = angular.module('app');
  app.controller('mainCtrl', MainCtrl);

  MainCtrl.$inject = ['$scope', 'emailChecker'];
  function MainCtrl($scope, emailChecker) {
    var vm = this;
    vm.result = false;
    vm.email = "";
    vm.history = [];

    vm.click = function() {
      emailChecker.check_email(vm.email, function(result) {
        vm.history.push(vm.email);
        vm.result = result;
        $scope.$apply();
      });
    };

  }

}());

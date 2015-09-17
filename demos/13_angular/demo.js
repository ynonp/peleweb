/*
 * demo.js
 * Distributed under terms of the MIT license.
 */

/*global angular*/

var myapp = angular.module('app', []);

myapp.controller('mainCtrl', MainController);


function MainController() {
  var vm = this;

  vm.clicks  = 0;
  vm.name    = "Ynon";
  vm.email   = "ynon@ynonperek.com";
  vm.website = 'https://www.tocode.co.il';

  vm.clicked = function() {
    vm.clicks++;
  };
}


/*
 * properties.js
 * Copyright (C) 2015 ynonperek <ynonperek@localhost>
 *
 * Distributed under terms of the MIT license.
 */

var app = angular.module('app', []);

app.controller('mainCtrl', MainCtrl);

function MainCtrl() {
  var vm = this;

  Object.defineProperty(vm, 'one', {
    get: function() {
      return vm.val;
    },
    set: function(val) {
      vm.val = val;
    }
  });
  
  Object.defineProperty(vm, 'two', {
    get: function() {
      return vm.val * 2;
    },
    set: function(val) {
      vm.val = val / 2;
    }
  });
}

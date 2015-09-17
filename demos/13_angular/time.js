/*
 * time.js
 * Copyright (C) 2015 ynonperek <ynonperek@localhost>
 *
 * Distributed under terms of the MIT license.
 */

var app = angular.module('app', []);

app.controller('mainCtrl', MainCtrl);

function MainCtrl() {
  var vm = this;

  Object.defineProperty(vm, 'hours', {
    get: function() {
      return vm.val * 3600;
    },
    set: function(val) {
      vm.val = val / 3600;
    }
  });
  
  Object.defineProperty(vm, 'seconds', {
    get: function() {
      return vm.val;
    },
    set: function(val) {
      vm.val = val;
    }
  });

  Object.defineProperty(vm, 'minutes', {
    get: function() {
      return vm.val * 60;
    },
    set: function(val) {
      vm.val = val / 60;
    }
  });
}

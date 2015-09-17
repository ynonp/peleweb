/*
 * side_ctrl.js
 * Copyright (C) 2015 ynonperek <ynonperek@localhost>
 *
 * Distributed under terms of the MIT license.
 */

(function() {
  angular.module('app').controller('sideCtrl', SideCtrl);

  SideCtrl.$inject = ['counter'];
  function SideCtrl(theCounter) {
    var vm = this;
    vm.name = "Sidebar"
    vm.clicks = 0;
    vm.clicked = function() {
      theCounter.click(vm, 'clicks');
    };  
  }

}());

/*
 * counter.js
 * Copyright (C) 2015 ynonperek <ynonperek@localhost>
 *
 * Distributed under terms of the MIT license.
 */

(function() {

  angular.module("app").factory('counter', Counter);

  function Counter() {
    return {
      click: function(data, field) {
        data[field]+=3;
      }
    };
  }
}());

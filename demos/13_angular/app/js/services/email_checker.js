/*
 * email_checker.js
 * Copyright (C) 2015 ynonperek <ynonperek@localhost>
 *
 * Distributed under terms of the MIT license.
 */

(function() {
  angular.module('app').factory('emailChecker', EmailChecker);

  function EmailChecker() {
    return {
      check_email: check
    };

    function url(email) {
      return 'haveibeenpwned.com/api/v2/pasteaccount/' + email;
    }

    function check(email, cb) {
      var xhr = new XMLHttpRequest();
      xhr.open("get", url(email));
      xhr.addEventListener('load', function() {
        if ( xhr.responseText.length > 0 ) {
          cb(true);
        } else {
          cb(false);
        }
      });

      xhr.send();
    }



  }

}());


/**
 * Created by Max on 01.10.2015.
 */
angular.module('ionic.utils', [])

  .factory('$localstorage', ['$window', function($window) {
    return {
      set: function(key, value) {
        $window.localStorage[key] = value;
      },
      get: function(key, defaultValue) {
        return $window.localStorage[key] || defaultValue;
      },
      setObject: function(key, value) {
        $window.localStorage[key] = JSON.stringify(value);
      },
      getObject: function(key) {
        return JSON.parse($window.localStorage[key] || '{}');
      },
      add: function(key, value) {
        var jsonObject = JSON.parse($window.localStorage[key] || '{}');
        var count = 0;
        for(var key in jsonObject) {
          if(jsonObject.hasOwnProperty(key)) {
            count++;
          }
        }
        var subkey = Object.keys(jsonObject)[0].substr(0,Object.keys(jsonObject)[0].length-1));
        //jsonObject.push(
      }
        
    }
  }]);

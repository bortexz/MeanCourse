angular.module('filters').filter('unique', function() {

  return function(input, name) {

    var results = [];
    var keys = {};
    for (var i = 0; i < input.length; i++) {
      var val = input[i][name];
      if (keys[val] === undefined) {
        keys[val] = true;
        results.push(val);
      }
    }
    return results;

  }

});
// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //if obj type equals boolean, number, or null
  if (typeof obj === 'boolean' || typeof obj === 'number' || obj === null) {
    //return as a string
    return '' + obj;
  }


  //if obj type is string
  if (typeof obj === 'string') {
    //return as a string with double quotes
    return '"' + obj + '"';
  }


  //if obj type equals function or undefined
  if (typeof obj === 'function' || obj === undefined) {
    //return undefined
    return undefined;
  }

  if (Array.isArray(obj)) {
    var array = [];
    _.each(obj, function (item) {
      array.push(stringifyJSON(item));
    });
    return '[' + array.join(',') + ']';
  } else if (obj !== null && typeof(obj) === 'object') {
    var keysList = Object.keys(obj);
    var arr = [];

    for (var i = 0; i < keysList.length; i++) {
      var key = keysList[i];
      var value = obj[key];
      if (typeof(value) === 'function' || value === undefined) {
        continue;
      } else {
        arr.push(stringifyJSON(key) + ':' + stringifyJSON(value));
      }
    }

    return '{' + arr.join(',') + '}';
  }

};
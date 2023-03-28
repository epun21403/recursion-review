// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//create array/result variable
//create variable for document.body
//make helper function
//takes one input
//if it has a class name and class name included in classList
//push to the result variable
//if it has children
//iterate though children
//run getElementsByClassName
//return array/result
var getElementsByClassName = function(className) {
  var result = [];
  var body = document.body;

  var helper = function (element) {
    if (element.classList && element.classList.contains(className)) {
      result.push(element);
    }

    if (element.childNodes) {
      for (var i = 0; i < element.childNodes.length; i++) {
        helper(element.childNodes[i]);
      }
    }

  };
  helper(body);

  console.log(result);
  return result;
};
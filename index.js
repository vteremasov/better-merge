module.exports = extend;

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
  var target = {};

  for (var i = 0; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (hasOwnProperty.call(source, key)) {
        if(hasOwnProperty.call(target, key) && typeof source[key] === 'object' && typeof target[key] === 'object') {
          target[key] = extend(target[key], source[key])
        } else {
          target[key] = source[key]
        }
      }
    }
  }

  return target
}

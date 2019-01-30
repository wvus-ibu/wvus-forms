(function(global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.queryStringParser = mod.exports;
  }
})(this, function(exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function(querystring) {
    if (querystring.length < 1) return {};

    // If querystring length is greater than zero, make querystring an object.
    if (querystring.slice(0, 1) === "&") {
      querystring = querystring.substr(1);
    }

    var qs = querystring.replace("?", "");
    qs = qs.split("&");

    var obj = {};
    qs.forEach(function(property) {
      var t = property.split("=");
      obj[t[0]] = t[1];
    });

    return obj;
  };
});

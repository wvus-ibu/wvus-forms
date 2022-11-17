(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "core-js/modules/esnext.async-iterator.for-each.js", "core-js/modules/esnext.iterator.constructor.js", "core-js/modules/esnext.iterator.for-each.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("core-js/modules/esnext.async-iterator.for-each.js"), require("core-js/modules/esnext.iterator.constructor.js"), require("core-js/modules/esnext.iterator.for-each.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.esnextAsyncIteratorForEach, global.esnextIteratorConstructor, global.esnextIteratorForEach);
    global.queryStringParser = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _esnextAsyncIteratorForEach, _esnextIteratorConstructor, _esnextIteratorForEach) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = querystring => {
    if (querystring.length < 1) return {};

    // If querystring length is greater than zero, make querystring an object.
    if (querystring.slice(0, 1) === "&") {
      querystring = querystring.substr(1);
    }
    let qs = querystring.replace("?", "");
    qs = qs.split("&");
    let obj = {};
    qs.forEach(function (property) {
      let t = property.split("=");
      obj[t[0]] = t[1];
    });
    return obj;
  };
  _exports.default = _default;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.message = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _react = _interopRequireDefault(_react);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  const Message = _ref => {
    let {
      showError,
      showSuccess,
      message,
      hideMessage,
      successIcon = /*#__PURE__*/_react.default.createElement("i", {
        className: "fa fa-check-circle"
      }),
      errorIcon = /*#__PURE__*/_react.default.createElement("i", {
        className: "fa fa-exclamation-circle"
      })
    } = _ref;
    const icon = showError ? errorIcon : showSuccess ? successIcon : null;
    return /*#__PURE__*/_react.default.createElement("span", null, icon, !hideMessage && /*#__PURE__*/_react.default.createElement("span", {
      className: "message",
      "data-field-validation-message": true
    }, message));
  };
  var _default = Message;
  _exports.default = _default;
});
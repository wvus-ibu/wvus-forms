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
})(this, function (exports, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Message = function Message(_ref) {
    var showError = _ref.showError,
        showSuccess = _ref.showSuccess,
        message = _ref.message;

    var icon = showError ? _react2.default.createElement("i", { className: "fa fa-exclamation-circle" }) : showSuccess ? _react2.default.createElement("i", { className: "fa fa-check-circle" }) : null;
    return _react2.default.createElement(
      "span",
      null,
      icon,
      _react2.default.createElement(
        "span",
        { className: "message", "data-field-validation-message": true },
        message
      )
    );
  };

  exports.default = Message;
});
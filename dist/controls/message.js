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
        message = _ref.message,
        hideMessage = _ref.hideMessage,
        _ref$successIcon = _ref.successIcon,
        successIcon = _ref$successIcon === undefined ? _react2.default.createElement("i", { className: "fa fa-check-circle" }) : _ref$successIcon,
        _ref$errorIcon = _ref.errorIcon,
        errorIcon = _ref$errorIcon === undefined ? _react2.default.createElement("i", { className: "fa fa-exclamation-circle" }) : _ref$errorIcon;

    var icon = showError ? errorIcon : showSuccess ? successIcon : null;
    return _react2.default.createElement(
      "span",
      null,
      icon,
      !hideMessage && _react2.default.createElement(
        "span",
        { className: "message", "data-field-validation-message": true },
        message
      )
    );
  };

  exports.default = Message;
});
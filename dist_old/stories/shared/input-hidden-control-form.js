(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.index);
    global.inputHiddenControlForm = mod.exports;
  }
})(this, function (exports, _react, _index) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SimpleInputHiddenForm = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var SimpleInputHiddenForm = function SimpleInputHiddenForm(props) {
    return _react2.default.createElement(
      "form",
      null,
      _react2.default.createElement(_index.InputHiddenControl, {
        fieldName: "campaign",
        fieldValue: 1234567,
        fieldClasses: "test-hidden-field",
        formMethods: props.formMethods
      }),
      _react2.default.createElement(
        "p",
        null,
        "Hidden Field Value:",
        " ",
        props.formMethods.getFieldState("campaign").value ? props.formMethods.getFieldState("campaign").value : ""
      )
    );
  };

  exports.SimpleInputHiddenForm = SimpleInputHiddenForm;
});
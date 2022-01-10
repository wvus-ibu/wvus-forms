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
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.SimpleInputHiddenForm = void 0;
  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  const SimpleInputHiddenForm = props => {
    return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_index.InputHiddenControl, {
      fieldName: "campaign",
      fieldValue: 1234567,
      fieldClasses: "test-hidden-field",
      formMethods: props.formMethods
    }), /*#__PURE__*/_react.default.createElement("p", null, "Hidden Field Value:", " ", props.formMethods.getFieldState("campaign").value ? props.formMethods.getFieldState("campaign").value : ""));
  };

  _exports.SimpleInputHiddenForm = SimpleInputHiddenForm;
});
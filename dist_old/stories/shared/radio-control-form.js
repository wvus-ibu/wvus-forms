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
    global.radioControlForm = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.RadioForm = void 0;
  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  const RadioForm = props => {
    return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_index.RadioControl, {
      fieldId: "payment_method_new_cc",
      fieldName: "payment_method",
      fieldTitle: "New Credit Card",
      labelClasses: "payment-method-new-cc-label",
      inputClasses: "payment-method-new-cc-input",
      formMethods: props.formMethods,
      fieldCheckedDefault: true
    }), /*#__PURE__*/_react.default.createElement(_index.RadioControl, {
      fieldId: "payment_method_existing_cc",
      fieldName: "payment_method",
      fieldTitle: "Existing Credit Card",
      formMethods: props.formMethods
    }), /*#__PURE__*/_react.default.createElement(_index.RadioControl, {
      fieldId: "payment_method_paypal",
      fieldName: "payment_method",
      fieldTitle: "Paypal",
      formMethods: props.formMethods
    }));
  };

  _exports.RadioForm = RadioForm;
});
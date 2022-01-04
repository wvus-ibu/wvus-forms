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
})(this, function (exports, _react, _index) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.RadioForm = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var RadioForm = function RadioForm(props) {
    return _react2.default.createElement(
      "form",
      null,
      _react2.default.createElement(_index.RadioControl, {
        fieldId: "payment_method_new_cc",
        fieldName: "payment_method",
        fieldTitle: "New Credit Card",
        labelClasses: "payment-method-new-cc-label",
        inputClasses: "payment-method-new-cc-input",
        formMethods: props.formMethods,
        fieldCheckedDefault: true
      }),
      _react2.default.createElement(_index.RadioControl, {
        fieldId: "payment_method_existing_cc",
        fieldName: "payment_method",
        fieldTitle: "Existing Credit Card",
        formMethods: props.formMethods
      }),
      _react2.default.createElement(_index.RadioControl, {
        fieldId: "payment_method_paypal",
        fieldName: "payment_method",
        fieldTitle: "Paypal",
        formMethods: props.formMethods
      })
    );
  };

  exports.RadioForm = RadioForm;
});
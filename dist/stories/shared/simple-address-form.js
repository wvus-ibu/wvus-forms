(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../index", "../../misc/us-states"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../index"), require("../../misc/us-states"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.index, global.usStates);
    global.simpleAddressForm = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _index, _usStates) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.SimpleAddressForm = void 0;
  _react = _interopRequireDefault(_react);
  _usStates = _interopRequireDefault(_usStates);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  const SimpleAddressForm = props => {
    return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("h2", null, "Simple Address Form"), /*#__PURE__*/_react.default.createElement(_index.InputControl, {
      labelClasses: "first-name-label",
      inputClasses: "first-name-input",
      fieldName: "fname",
      fieldTitle: "First Name",
      fieldClasses: "wvus-field-50",
      formMethods: props.formMethods,
      validators: [_index.validateRequired]
    }), /*#__PURE__*/_react.default.createElement(_index.InputControl, {
      fieldName: "lname",
      fieldTitle: "Last Name",
      fieldClasses: "wvus-field- wvus-field--end",
      formMethods: props.formMethods,
      validators: [_index.validateRequired]
    }), /*#__PURE__*/_react.default.createElement(_index.InputControl, {
      fieldName: "address1",
      fieldTitle: "Mailing Address",
      formMethods: props.formMethods,
      validators: [_index.validateRequired]
    }), /*#__PURE__*/_react.default.createElement(_index.InputControl, {
      fieldName: "city",
      fieldTitle: "City",
      fieldClasses: "wvus-field-33",
      formMethods: props.formMethods,
      validators: [_index.validateRequired]
    }), /*#__PURE__*/_react.default.createElement(_index.SelectControl, {
      fieldName: "state",
      fieldOptions: _usStates.default,
      fieldTitle: "State",
      fieldClasses: "wvus-field-33",
      formMethods: props.formMethods,
      validators: [_index.validateRequired, (0, _index.validateMin)(2)]
    }), /*#__PURE__*/_react.default.createElement(_index.InputControl, {
      fieldName: "zip",
      fieldTitle: "Zip",
      fieldClasses: "wvus-field-33 wvus-field--end",
      formMethods: props.formMethods,
      validators: [_index.validateRequired, _index.validateZip]
    }));
  };

  _exports.SimpleAddressForm = SimpleAddressForm;
});
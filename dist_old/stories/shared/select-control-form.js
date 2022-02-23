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
    global.selectControlForm = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _index, _usStates) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.SelectFormPreselected = _exports.SelectFormNoConfig = _exports.SelectForm = void 0;
  _react = _interopRequireDefault(_react);
  _usStates = _interopRequireDefault(_usStates);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // import { formMethodsChecked, formMethodsUnChecked } from "./props-mocks";
  const SelectForm = props => {
    return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_index.SelectControl, {
      fieldName: "state",
      fieldOptions: _usStates.default,
      fieldTitle: "State",
      labelClasses: "state-label",
      inputClasses: "state-input",
      fieldClasses: "wvus-field-33",
      formMethods: props.formMethods,
      validators: [_index.validateRequired]
    }));
  };

  _exports.SelectForm = SelectForm;

  const SelectFormPreselected = props => {
    return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_index.SelectControl, {
      fieldName: "state",
      fieldValue: "WA",
      fieldOptions: _usStates.default,
      fieldTitle: "State",
      isValid: true,
      fieldClasses: "wvus-field-33",
      formMethods: props.formMethods,
      validators: [_index.validateRequired]
    }));
  };

  _exports.SelectFormPreselected = SelectFormPreselected;

  const SelectFormNoConfig = props => {
    return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_index.SelectControl, {
      fieldName: "state",
      fieldOptions: props.fieldOptions,
      fieldTitle: "State",
      fieldClasses: "wvus-field-33",
      formMethods: props.formMethods,
      validators: [_index.validateRequired]
    }));
  };

  _exports.SelectFormNoConfig = SelectFormNoConfig;
});
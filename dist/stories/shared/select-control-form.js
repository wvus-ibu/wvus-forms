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
})(this, function (exports, _react, _index, _usStates) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.SelectFormNoConfig = exports.SelectFormPreselected = exports.SelectForm = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _usStates2 = _interopRequireDefault(_usStates);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var SelectForm = function SelectForm(props) {
    return _react2.default.createElement(
      "form",
      null,
      _react2.default.createElement(_index.SelectControl, {
        fieldName: "state",
        fieldOptions: _usStates2.default,
        fieldTitle: "State",
        labelClasses: "state-label",
        inputClasses: "state-input",
        fieldClasses: "wvus-field-33",
        formMethods: props.formMethods,
        validators: [_index.validateRequired]
      })
    );
  };
  // import { formMethodsChecked, formMethodsUnChecked } from "./props-mocks";


  var SelectFormPreselected = function SelectFormPreselected(props) {
    return _react2.default.createElement(
      "form",
      null,
      _react2.default.createElement(_index.SelectControl, {
        fieldName: "state",
        fieldValue: "WA",
        fieldOptions: _usStates2.default,
        fieldTitle: "State",
        isValid: true,
        fieldClasses: "wvus-field-33",
        formMethods: props.formMethods,
        validators: [_index.validateRequired]
      })
    );
  };

  var SelectFormNoConfig = function SelectFormNoConfig(props) {
    return _react2.default.createElement(
      "form",
      null,
      _react2.default.createElement(_index.SelectControl, {
        fieldName: "state",
        fieldOptions: props.fieldOptions,
        fieldTitle: "State",
        fieldClasses: "wvus-field-33",
        formMethods: props.formMethods,
        validators: [_index.validateRequired]
      })
    );
  };

  exports.SelectForm = SelectForm;
  exports.SelectFormPreselected = SelectFormPreselected;
  exports.SelectFormNoConfig = SelectFormNoConfig;
});
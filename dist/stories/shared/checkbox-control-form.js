(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../index", "./props-mocks"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../index"), require("./props-mocks"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.index, global.propsMocks);
    global.checkboxControlForm = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _index, _propsMocks) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.propsUnchecked = _exports.propsDisabled = _exports.propsChecked = _exports.SimpleCheckboxForm = _exports.DisabledCheckboxForm = void 0;
  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  const propsChecked = {
    formMethods: _propsMocks.formMethodsChecked
  };
  _exports.propsChecked = propsChecked;
  const propsUnchecked = {
    formMethods: _propsMocks.formMethodsUnChecked
  };
  _exports.propsUnchecked = propsUnchecked;
  const propsDisabled = {
    formMethods: _propsMocks.formMethodsChecked,
    attributes: {
      disabled: true
    }
  };
  _exports.propsDisabled = propsDisabled;

  const SimpleCheckboxForm = props => {
    return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_index.CheckboxControl, {
      labelClasses: "opt-in-label",
      inputClasses: "opt-in-input",
      fieldName: "optIn",
      fieldValue: true,
      fieldTitle: "Yes, I would like to receive the email newsletter.",
      fieldClasses: "wvus-field-newletter-optin",
      formMethods: props.formMethods
    }));
  };

  _exports.SimpleCheckboxForm = SimpleCheckboxForm;

  const DisabledCheckboxForm = props => {
    return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("fieldset", {
      disabled: true
    }, /*#__PURE__*/_react.default.createElement(_index.CheckboxControl, {
      fieldName: "optIn",
      fieldValue: true,
      fieldTitle: "Yes, I would like to receive the email newsletter.",
      fieldClasses: "wvus-field-newletter-optin",
      formMethods: props.formMethods
    })));
  };

  _exports.DisabledCheckboxForm = DisabledCheckboxForm;
});
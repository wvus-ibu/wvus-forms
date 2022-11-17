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
    global.inputControlForm = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _index, _propsMocks) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.propsWithSuccess = _exports.propsWithError = _exports.propsUntouched = _exports.propsOptional = _exports.propsAttrReadonlyNotDisabled = _exports.propsAttrReadonlyDisabled = _exports.propsAttrDisabledNotReadonly = _exports.SimpleInputStates = _exports.SimpleInputPrefixNeo = _exports.SimpleInputNoLabelNeo = _exports.SimpleInputNeo = _exports.SimpleInputFormRequired = _exports.SimpleInputFormHiddenMessage = _exports.SimpleInputFormClasses = _exports.SimpleInputFormAttr = _exports.SimpleInputForm = void 0;
  _react = _interopRequireDefault(_react);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  const propsUntouched = {
    formMethods: _propsMocks.formMethodsUnTouched
  };
  _exports.propsUntouched = propsUntouched;
  const propsWithSuccess = {
    formMethods: _propsMocks.formMethodsWithSuccess
  };
  _exports.propsWithSuccess = propsWithSuccess;
  const propsWithError = {
    formMethods: _propsMocks.formMethodsWithError
  };
  _exports.propsWithError = propsWithError;
  const propsOptional = {
    formMethods: _propsMocks.formMethodsOptional
  };
  _exports.propsOptional = propsOptional;
  const propsAttrReadonlyDisabled = {
    formMethods: _propsMocks.formMethodsUnTouched,
    attributes: {
      readOnly: true,
      disabled: true
    }
  };
  _exports.propsAttrReadonlyDisabled = propsAttrReadonlyDisabled;
  const propsAttrReadonlyNotDisabled = {
    formMethods: _propsMocks.formMethodsUnTouched,
    attributes: {
      readOnly: true,
      disabled: false
    }
  };
  _exports.propsAttrReadonlyNotDisabled = propsAttrReadonlyNotDisabled;
  const propsAttrDisabledNotReadonly = {
    formMethods: _propsMocks.formMethodsUnTouched,
    attributes: {
      readOnly: false,
      disabled: true
    }
  };
  _exports.propsAttrDisabledNotReadonly = propsAttrDisabledNotReadonly;
  const SimpleInputForm = props => {
    return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_index.InputControl, {
      inputClasses: "first-name-input",
      labelClasses: "first-name-label",
      fieldPlaceholder: "Tim Stehlin",
      fieldName: "fname",
      fieldTitle: "First Name",
      fieldClasses: "custom-class-field-input",
      formMethods: props.formMethods
    }));
  };
  _exports.SimpleInputForm = SimpleInputForm;
  const SimpleInputFormHiddenMessage = props => {
    return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_index.InputControl, {
      inputClasses: "first-name-input",
      labelClasses: "first-name-label",
      fieldPlaceholder: "Tim Stehlin",
      fieldName: "fname",
      fieldTitle: "First Name",
      fieldClasses: "custom-class-field-input",
      formMethods: props.formMethods,
      hideMessage: true
    }));
  };
  _exports.SimpleInputFormHiddenMessage = SimpleInputFormHiddenMessage;
  const SimpleInputFormRequired = props => {
    return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_index.InputControl, {
      fieldPlaceholder: "Tim Stehlin",
      fieldName: "fname",
      fieldTitle: "First Name",
      fieldClasses: "custom-class-field-input",
      formMethods: props.formMethods,
      validators: [_index.validateRequired]
    }));
  };
  _exports.SimpleInputFormRequired = SimpleInputFormRequired;
  const SimpleInputStates = props => {
    return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_index.InputControl, {
      fieldPlaceholder: "Tim Stehlin",
      fieldName: "fname",
      fieldTitle: "First Name",
      fieldClasses: "custom-class-field-input",
      formMethods: props.formMethods
    }));
  };
  _exports.SimpleInputStates = SimpleInputStates;
  const SimpleInputFormAttr = props => {
    return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_index.InputControl, {
      fieldPlaceholder: "Tim Stehlin",
      fieldName: "fname",
      fieldTitle: "First Name",
      fieldClasses: "custom-class-field-input",
      formMethods: props.formMethods,
      attributes: props.attributes
    }));
  };
  _exports.SimpleInputFormAttr = SimpleInputFormAttr;
  const SimpleInputFormClasses = props => {
    return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_index.InputControl, {
      inputClasses: "first-name-input",
      labelClasses: "first-name-label",
      fieldPlaceholder: "Tim Stehlin",
      fieldName: "fname",
      fieldTitle: "First Name",
      fieldClasses: "custom-class-field-input",
      formMethods: props.formMethods,
      attributes: props.attributes
    }));
  };
  _exports.SimpleInputFormClasses = SimpleInputFormClasses;
  const SimpleInputNeo = props => {
    return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_index.InputControl, {
      inputClasses: "first-name-input",
      labelClasses: "first-name-label",
      inputWrapperClasses: "input-group input-group--neo",
      fieldPlaceholder: "Tim Stehlin",
      fieldName: "fname",
      fieldTitle: "First Name",
      fieldClasses: "custom-class-field-input form-group form-group--neo",
      formMethods: props.formMethods,
      attributes: props.attributes,
      hideMessage: true
    }));
  };
  _exports.SimpleInputNeo = SimpleInputNeo;
  const SimpleInputPrefixNeo = props => {
    return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_index.InputControl, {
      inputClasses: "first-name-input giving-form__form-control widget-price",
      labelClasses: "first-name-label",
      inputWrapperClasses: "input-group input-group--neo",
      fieldPlaceholder: "55",
      fieldName: "fname",
      fieldTitle: "Price",
      fieldClasses: "custom-class-field-input form-group form-group--neo",
      formMethods: props.formMethods,
      attributes: props.attributes,
      renderFieldPrefix: /*#__PURE__*/_react.default.createElement("span", {
        class: "giving-form__currency"
      }, "$"),
      hideMessage: true
    }));
  };
  _exports.SimpleInputPrefixNeo = SimpleInputPrefixNeo;
  const SimpleInputNoLabelNeo = props => {
    return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_index.InputControl, {
      inputClasses: "first-name-input giving-form__form-control widget-price",
      labelClasses: "first-name-label",
      inputWrapperClasses: "input-group input-group--neo",
      fieldPlaceholder: "Enter a value",
      fieldName: "fname",
      fieldTitle: "Price",
      fieldClasses: "custom-class-field-input",
      formMethods: props.formMethods,
      attributes: props.attributes,
      renderFieldPrefix: /*#__PURE__*/_react.default.createElement("span", {
        class: "giving-form__currency"
      }, "$"),
      hideLabel: true,
      hideMessage: true
    }));
  };
  _exports.SimpleInputNoLabelNeo = SimpleInputNoLabelNeo;
});
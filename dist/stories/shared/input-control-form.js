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
})(this, function (exports, _react, _index, _propsMocks) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.propsAttrDisabledNotReadonly = exports.propsAttrReadonlyNotDisabled = exports.propsAttrReadonlyDisabled = exports.propsOptional = exports.propsWithSuccess = exports.propsWithError = exports.propsUntouched = exports.SimpleInputFormClasses = exports.SimpleInputFormAttr = exports.SimpleInputFormRequired = exports.SimpleInputFormHiddenMessage = exports.SimpleInputStates = exports.SimpleInputForm = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var propsUntouched = {
    formMethods: _propsMocks.formMethodsUnTouched
  };

  var propsWithSuccess = {
    formMethods: _propsMocks.formMethodsWithSuccess
  };

  var propsWithError = {
    formMethods: _propsMocks.formMethodsWithError
  };

  var propsOptional = {
    formMethods: _propsMocks.formMethodsOptional
  };

  var propsAttrReadonlyDisabled = {
    formMethods: _propsMocks.formMethodsUnTouched,
    attributes: {
      readOnly: true,
      disabled: true
    }
  };

  var propsAttrReadonlyNotDisabled = {
    formMethods: _propsMocks.formMethodsUnTouched,
    attributes: {
      readOnly: true,
      disabled: false
    }
  };
  var propsAttrDisabledNotReadonly = {
    formMethods: _propsMocks.formMethodsUnTouched,
    attributes: {
      readOnly: false,
      disabled: true
    }
  };

  var SimpleInputForm = function SimpleInputForm(props) {
    return _react2.default.createElement(
      "form",
      null,
      _react2.default.createElement(_index.InputControl, {
        inputClasses: "first-name-input",
        labelClasses: "first-name-label",
        fieldPlaceholder: "Tim Stehlin",
        fieldName: "fname",
        fieldTitle: "First Name",
        fieldClasses: "custom-class-field-input",
        formMethods: props.formMethods
      })
    );
  };
  var SimpleInputFormHiddenMessage = function SimpleInputFormHiddenMessage(props) {
    return _react2.default.createElement(
      "form",
      null,
      _react2.default.createElement(_index.InputControl, {
        inputClasses: "first-name-input",
        labelClasses: "first-name-label",
        fieldPlaceholder: "Tim Stehlin",
        fieldName: "fname",
        fieldTitle: "First Name",
        fieldClasses: "custom-class-field-input",
        formMethods: props.formMethods,
        hideMessage: true
      })
    );
  };
  var SimpleInputFormRequired = function SimpleInputFormRequired(props) {
    return _react2.default.createElement(
      "form",
      null,
      _react2.default.createElement(_index.InputControl, {
        fieldPlaceholder: "Tim Stehlin",
        fieldName: "fname",
        fieldTitle: "First Name",
        fieldClasses: "custom-class-field-input",
        formMethods: props.formMethods,
        validators: [_index.validateRequired]
      })
    );
  };

  var SimpleInputStates = function SimpleInputStates(props) {
    return _react2.default.createElement(
      "form",
      null,
      _react2.default.createElement(_index.InputControl, {
        fieldPlaceholder: "Tim Stehlin",
        fieldName: "fname",
        fieldTitle: "First Name",
        fieldClasses: "custom-class-field-input",
        formMethods: props.formMethods
      })
    );
  };

  var SimpleInputFormAttr = function SimpleInputFormAttr(props) {
    return _react2.default.createElement(
      "form",
      null,
      _react2.default.createElement(_index.InputControl, {
        fieldPlaceholder: "Tim Stehlin",
        fieldName: "fname",
        fieldTitle: "First Name",
        fieldClasses: "custom-class-field-input",
        formMethods: props.formMethods,
        attributes: props.attributes
      })
    );
  };
  var SimpleInputFormClasses = function SimpleInputFormClasses(props) {
    return _react2.default.createElement(
      "form",
      null,
      _react2.default.createElement(_index.InputControl, {
        inputClasses: "first-name-input",
        labelClasses: "first-name-label",
        fieldPlaceholder: "Tim Stehlin",
        fieldName: "fname",
        fieldTitle: "First Name",
        fieldClasses: "custom-class-field-input",
        formMethods: props.formMethods,
        attributes: props.attributes
      })
    );
  };

  exports.SimpleInputForm = SimpleInputForm;
  exports.SimpleInputStates = SimpleInputStates;
  exports.SimpleInputFormHiddenMessage = SimpleInputFormHiddenMessage;
  exports.SimpleInputFormRequired = SimpleInputFormRequired;
  exports.SimpleInputFormAttr = SimpleInputFormAttr;
  exports.SimpleInputFormClasses = SimpleInputFormClasses;
  exports.propsUntouched = propsUntouched;
  exports.propsWithError = propsWithError;
  exports.propsWithSuccess = propsWithSuccess;
  exports.propsOptional = propsOptional;
  exports.propsAttrReadonlyDisabled = propsAttrReadonlyDisabled;
  exports.propsAttrReadonlyNotDisabled = propsAttrReadonlyNotDisabled;
  exports.propsAttrDisabledNotReadonly = propsAttrDisabledNotReadonly;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@storybook/addon-actions"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@storybook/addon-actions"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.addonActions);
    global.propsMocks = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _addonActions) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.formMethodsWithSuccess = _exports.formMethodsWithError = _exports.formMethodsUnTouched = _exports.formMethodsUnChecked = _exports.formMethodsOptional = _exports.formMethodsChecked = void 0;
  const formMethodsUnTouched = {
    addFieldToState: () => {},
    getFieldState: () => {
      return {
        value: "",
        secondInteraction: false,
        isValid: true,
        optional: false,
        errorMessage: "Error message displays here"
      };
    },
    handleBlur: (0, _addonActions.action)("handleblur"),
    handleValueChange: (0, _addonActions.action)("handleValueChange"),
    showUIError: () => false,
    showUISuccess: () => false
  };
  _exports.formMethodsUnTouched = formMethodsUnTouched;
  const formMethodsWithSuccess = {
    addFieldToState: () => {},
    getFieldState: () => {
      return {
        value: "Scott Rees",
        secondInteraction: true,
        isValid: true,
        optional: false,
        errorMessage: "Error message displays here"
      };
    },
    handleBlur: (0, _addonActions.action)("handleblur"),
    handleValueChange: (0, _addonActions.action)("handleValueChange"),
    showUIError: () => false,
    showUISuccess: () => true
  };
  _exports.formMethodsWithSuccess = formMethodsWithSuccess;
  const formMethodsWithError = {
    addFieldToState: () => {},
    getFieldState: () => {
      return {
        value: "",
        secondInteraction: true,
        isValid: false,
        optional: false,
        errorMessage: "Error message displays here"
      };
    },
    handleBlur: (0, _addonActions.action)("handleblur"),
    handleValueChange: (0, _addonActions.action)("handleValueChange"),
    showUIError: () => true,
    showUISuccess: () => false
  };
  /**
   * Optional fields should have these defaults:
   * isValid: true // allows form to be submitted without a value (since field is optional)
   * optional: true // ensures success state is not shown if field is empty and interacted with (see showUiSuccess function)
   */

  _exports.formMethodsWithError = formMethodsWithError;
  const formMethodsOptional = {
    addFieldToState: () => {},
    getFieldState: () => {
      return {
        value: "",
        secondInteraction: true,
        isValid: true,
        optional: true,
        errorMessage: "Error message displays here"
      };
    },
    handleBlur: (0, _addonActions.action)("handleblur"),
    handleValueChange: (0, _addonActions.action)("handleValueChange"),
    showUIError: () => false,
    showUISuccess: () => false
  };
  /**
   * Checkbox props
   */

  _exports.formMethodsOptional = formMethodsOptional;
  const formMethodsChecked = {
    addFieldToState: () => {},
    getFieldState: () => {
      return {
        value: true,
        secondInteraction: false,
        isValid: true,
        optional: false,
        errorMessage: "Error message displays here"
      };
    },
    handleBlur: (0, _addonActions.action)("handleblur"),
    handleValueChange: (0, _addonActions.action)("handleValueChange"),
    showUIError: () => false,
    showUISuccess: () => false
  };
  _exports.formMethodsChecked = formMethodsChecked;
  const formMethodsUnChecked = {
    addFieldToState: () => {},
    getFieldState: () => {
      return {
        value: false,
        secondInteraction: false,
        isValid: true,
        optional: false,
        errorMessage: "Error message displays here"
      };
    },
    handleBlur: (0, _addonActions.action)("handleblur"),
    handleValueChange: (0, _addonActions.action)("handleValueChange"),
    showUIError: () => false,
    showUISuccess: () => false
  };
  _exports.formMethodsUnChecked = formMethodsUnChecked;
});
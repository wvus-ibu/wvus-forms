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
})(this, function (exports, _addonActions) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.formMethodsUnChecked = exports.formMethodsChecked = exports.formMethodsOptional = exports.formMethodsWithSuccess = exports.formMethodsWithError = exports.formMethodsUnTouched = undefined;


  var formMethodsUnTouched = {
    addFieldToState: function addFieldToState() {},
    getFieldState: function getFieldState() {
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
    showUIError: function showUIError() {
      return false;
    },
    showUISuccess: function showUISuccess() {
      return false;
    }
  };

  var formMethodsWithSuccess = {
    addFieldToState: function addFieldToState() {},
    getFieldState: function getFieldState() {
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
    showUIError: function showUIError() {
      return false;
    },
    showUISuccess: function showUISuccess() {
      return true;
    }
  };

  var formMethodsWithError = {
    addFieldToState: function addFieldToState() {},
    getFieldState: function getFieldState() {
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
    showUIError: function showUIError() {
      return true;
    },
    showUISuccess: function showUISuccess() {
      return false;
    }
  };

  /**
   * Optional fields should have these defaults:
   * isValid: true // allows form to be submitted without a value (since field is optional)
   * optional: true // ensures success state is not shown if field is empty and interacted with (see showUiSuccess function)
   */
  var formMethodsOptional = {
    addFieldToState: function addFieldToState() {},
    getFieldState: function getFieldState() {
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
    showUIError: function showUIError() {
      return false;
    },
    showUISuccess: function showUISuccess() {
      return false;
    }
  };

  /**
   * Checkbox props
   */

  var formMethodsChecked = {
    addFieldToState: function addFieldToState() {},
    getFieldState: function getFieldState() {
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
    showUIError: function showUIError() {
      return false;
    },
    showUISuccess: function showUISuccess() {
      return false;
    }
  };

  var formMethodsUnChecked = {
    addFieldToState: function addFieldToState() {},
    getFieldState: function getFieldState() {
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
    showUIError: function showUIError() {
      return false;
    },
    showUISuccess: function showUISuccess() {
      return false;
    }
  };

  exports.formMethodsUnTouched = formMethodsUnTouched;
  exports.formMethodsWithError = formMethodsWithError;
  exports.formMethodsWithSuccess = formMethodsWithSuccess;
  exports.formMethodsOptional = formMethodsOptional;
  exports.formMethodsChecked = formMethodsChecked;
  exports.formMethodsUnChecked = formMethodsUnChecked;
});
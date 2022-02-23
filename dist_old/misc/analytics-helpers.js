(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.analyticsHelpers = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.triggerWVUSClientMessageEvent = _exports.triggerAnalyticsEvent = _exports.checkForNewFormErrorsAndFireAnalytics = _exports.checkForNewFieldErrorAndFireAnalytics = void 0;

  // CustomEvent polyfill
  (function () {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent("CustomEvent");
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  })();

  const triggerAnalyticsEvent = function () {
    let eventName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "customEvent.wvus";
    let eventData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const event = new CustomEvent(eventName, {
      detail: eventData
    });
    document.dispatchEvent(event);
  };
  /**
   * Wrapper function which fires the wvusClientMessage event
   * @param {*} appName
   * @param {*} componentName
   * @param {*} message
   * @param {*} messageType
   */


  _exports.triggerAnalyticsEvent = triggerAnalyticsEvent;

  const triggerWVUSClientMessageEvent = function (appName, componentName, message) {
    let messageType = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "error";
    triggerAnalyticsEvent("wvusClientMessage", {
      app_name: appName,
      component_name: componentName,
      message,
      message_type: messageType
    });
  };
  /**
   * Checks whether state has new error message not shown to donor before
   * @param {Object} fieldState
   * @param {Object} prevFieldState
   */


  _exports.triggerWVUSClientMessageEvent = triggerWVUSClientMessageEvent;

  const fieldHasNewErrorMessage = (fieldState, prevFieldState) => {
    // To determine if message has been shown before,
    // check for second interaction, failed validation,
    // and either new error message text or previously wasn't shown
    // due to fact that secondinteraction hadn't occurred till now
    // (field was invalid but message not shown to user while interacting
    // with the field )
    return fieldState.secondInteraction && fieldState.isValid === false && (fieldState.errorMessage !== prevFieldState.errorMessage || !prevFieldState.secondInteraction);
  };
  /**
   * Fire analytics if new form error has occurred on any fields
   * in the form. Used in the componentDidUpdate lifecycle method of
   * form component.
   *
   * @param {Object} state
   * @param {Object} prevState
   */


  const checkForNewFormErrorsAndFireAnalytics = (appName, state, prevState) => {
    if (!state || !state.fields || !prevState || !prevState.fields) {
      return;
    }

    const prevStateFields = prevState.fields;
    const {
      fields
    } = state; // Check for error messages in all fields

    for (const fieldName in fields) {
      if (!prevStateFields[fieldName]) {
        return;
      }

      const fieldState = fields[fieldName];
      const prevFieldState = prevStateFields[fieldName];
      checkForNewFieldErrorAndFireAnalytics(appName, fieldName, fieldState, prevFieldState);
    }
  };
  /**
   * Fire analytics if new form error has occurred on specific field.
   *
   * @param {Object} state
   * @param {Object} prevState
   */


  _exports.checkForNewFormErrorsAndFireAnalytics = checkForNewFormErrorsAndFireAnalytics;

  const checkForNewFieldErrorAndFireAnalytics = (appName, fieldName, fieldState, prevFieldState) => {
    if (!appName || !fieldName || !fieldState || !prevFieldState) {
      return;
    }

    if (fieldHasNewErrorMessage(fieldState, prevFieldState)) {
      triggerAnalyticsEvent("wvusClientMessage", {
        app_name: appName,
        component_name: fieldName,
        message: fieldState.errorMessage,
        message_type: "error"
      });
    }
  };

  _exports.checkForNewFieldErrorAndFireAnalytics = checkForNewFieldErrorAndFireAnalytics;
});
(function(global, factory) {
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
})(this, function(exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  // CustomEvent polyfill
  (function() {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent("CustomEvent");
      evt.initCustomEvent(
        event,
        params.bubbles,
        params.cancelable,
        params.detail
      );
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
  })();

  var triggerAnalyticsEvent = function triggerAnalyticsEvent() {
    var eventName =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : "customEvent.wvus";
    var eventData =
      arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var event = new CustomEvent(eventName, {
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
  var triggerWVUSClientMessageEvent = function triggerWVUSClientMessageEvent(
    appName,
    componentName,
    message
  ) {
    var messageType =
      arguments.length > 3 && arguments[3] !== undefined
        ? arguments[3]
        : "error";

    triggerAnalyticsEvent("wvusClientMessage", {
      app_name: appName,
      component_name: componentName,
      message: message,
      message_type: messageType
    });
  };

  /**
   * Checks whether state has new error message not shown to donor before
   * @param {Object} fieldState
   * @param {Object} prevFieldState
   */
  var fieldHasNewErrorMessage = function fieldHasNewErrorMessage(
    fieldState,
    prevFieldState
  ) {
    // To determine if message has been shown before,
    // check for second interaction, failed validation,
    // and either new error message text or previously wasn't shown
    // due to fact that secondinteraction hadn't occurred till now
    // (field was invalid but message not shown to user while interacting
    // with the field )
    return (
      fieldState.secondInteraction &&
      fieldState.isValid === false &&
      (fieldState.errorMessage !== prevFieldState.errorMessage ||
        !prevFieldState.secondInteraction)
    );
  };

  /**
   * Fire analytics if new form error has occurred on any fields
   * in the form. Used in the componentDidUpdate lifecycle method of
   * form component.
   *
   * @param {Object} state
   * @param {Object} prevState
   */
  var checkForNewFormErrorsAndFireAnalytics = function checkForNewFormErrorsAndFireAnalytics(
    appName,
    state,
    prevState
  ) {
    if (!state || !state.fields || !prevState || !prevState.fields) {
      return;
    }

    var prevStateFields = prevState.fields;
    var fields = state.fields;

    // Check for error messages in all fields
    for (var fieldName in fields) {
      if (!prevStateFields[fieldName]) {
        return;
      }
      var fieldState = fields[fieldName];
      var prevFieldState = prevStateFields[fieldName];
      checkForNewFieldErrorAndFireAnalytics(
        appName,
        fieldName,
        fieldState,
        prevFieldState
      );
    }
  };

  /**
   * Fire analytics if new form error has occurred on specific field.
   *
   * @param {Object} state
   * @param {Object} prevState
   */
  var checkForNewFieldErrorAndFireAnalytics = function checkForNewFieldErrorAndFireAnalytics(
    appName,
    fieldName,
    fieldState,
    prevFieldState
  ) {
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

  exports.triggerAnalyticsEvent = triggerAnalyticsEvent;
  exports.triggerWVUSClientMessageEvent = triggerWVUSClientMessageEvent;
  exports.checkForNewFormErrorsAndFireAnalytics = checkForNewFormErrorsAndFireAnalytics;
  exports.checkForNewFieldErrorAndFireAnalytics = checkForNewFieldErrorAndFireAnalytics;
});

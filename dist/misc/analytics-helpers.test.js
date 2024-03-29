(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./analytics-helpers"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./analytics-helpers"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.analyticsHelpers);
    global.analyticsHelpersTest = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_analyticsHelpers) {
  "use strict";

  beforeEach(() => {
    document.dispatchEvent = jest.fn();
  });
  describe("triggerAnalyticsEvent", () => {
    it("should trigger an event on document", () => {
      document.dispatchEvent = jest.fn();
      const eventData = {
        hello: "world"
      };
      (0, _analyticsHelpers.triggerAnalyticsEvent)("testEvent", {
        hello: "world"
      });
      expect(document.dispatchEvent.mock.calls.length).toBe(1);
      expect(document.dispatchEvent.mock.calls[0][0].detail).toEqual(eventData);
    });
  });
  describe("triggerWVUSClientMessageEvent", () => {
    it("should trigger an event with detail data on document", () => {
      document.dispatchEvent = jest.fn();
      const eventData = {
        app_name: "testApp",
        component_name: "testComp",
        message: "Error message goes here.",
        message_type: "error"
      };
      (0, _analyticsHelpers.triggerWVUSClientMessageEvent)(eventData.app_name, eventData.component_name, eventData.message);
      expect(document.dispatchEvent.mock.calls.length).toBe(1);
      expect(document.dispatchEvent.mock.calls[0][0].detail).toEqual(eventData);
    });
  });
  describe("checkForNewFieldErrorAndFireAnalytics", () => {
    beforeAll(() => {
      document.dispatchEvent = jest.fn();
    });
    it("should NOT trigger an event if fieldstate is empty", () => {
      const fieldState = {};
      const prevFieldState = {};
      (0, _analyticsHelpers.checkForNewFieldErrorAndFireAnalytics)("appTest", "field", fieldState, prevFieldState);
      (0, _analyticsHelpers.checkForNewFieldErrorAndFireAnalytics)("", "field", fieldState, prevFieldState);
      (0, _analyticsHelpers.checkForNewFieldErrorAndFireAnalytics)("appTest", "", fieldState, prevFieldState);
      expect(document.dispatchEvent.mock.calls.length).toBe(0);
    });
    it("should trigger an event if error message previously hidden from user (user previously not finished with first interaction)", () => {
      const eventData = {
        app_name: "testApp",
        component_name: "testComp",
        message: "Error message goes here.",
        message_type: "error"
      };

      // Previously unseen message hidden from user due to secondInteraction being false
      const newErroredStateInteractionComplete = {
        fieldState: {
          secondInteraction: true,
          isValid: false,
          errorMessage: eventData.message
        },
        prevFieldState: {
          secondInteraction: false,
          // previously unshown error message
          isValid: false,
          errorMessage: eventData.message
        }
      };
      const {
        fieldState,
        prevFieldState
      } = newErroredStateInteractionComplete;
      (0, _analyticsHelpers.checkForNewFieldErrorAndFireAnalytics)(eventData.app_name, eventData.component_name, fieldState, prevFieldState);
      expect(document.dispatchEvent.mock.calls.length).toBe(1);
      expect(document.dispatchEvent.mock.calls[0][0].detail).toEqual(eventData);
    });
    it("should NOT trigger an event if same error message previously shown to user", () => {
      const eventData = {
        app_name: "testApp",
        component_name: "testComp",
        message: "Error message goes here.",
        message_type: "error"
      };

      //Same Error message already shown to user
      const alreadyShownErroredStateInteractionComplete = {
        fieldState: {
          secondInteraction: true,
          isValid: false,
          errorMessage: eventData.message
        },
        prevFieldState: {
          secondInteraction: true,
          // already shown error message
          isValid: false,
          errorMessage: eventData.message
        }
      };
      // test already shown fieldState doesn't trigger new event
      const {
        fieldState: alreadyShownFieldState,
        prevFieldState: alreadyShownPrevFieldState
      } = alreadyShownErroredStateInteractionComplete;
      (0, _analyticsHelpers.checkForNewFieldErrorAndFireAnalytics)(eventData.app_name, eventData.component_name, alreadyShownFieldState, alreadyShownPrevFieldState);
      expect(document.dispatchEvent.mock.calls.length).toBe(0);
    });
    it("should trigger an event when new error message never before shown to user", () => {
      const eventData = {
        app_name: "testApp",
        component_name: "testComp",
        message: "Error message goes here.",
        message_type: "error"
      };

      // New error message text
      const newMessageErroredState = {
        fieldState: {
          secondInteraction: true,
          isValid: false,
          errorMessage: eventData.message
        },
        prevFieldState: {
          secondInteraction: true,
          // previously unshown error message
          isValid: false,
          errorMessage: "Old error message"
        }
      };
      const {
        fieldState,
        prevFieldState
      } = newMessageErroredState;
      (0, _analyticsHelpers.checkForNewFieldErrorAndFireAnalytics)(eventData.app_name, eventData.component_name, fieldState, prevFieldState);
      expect(document.dispatchEvent.mock.calls.length).toBe(1);
      expect(document.dispatchEvent.mock.calls[0][0].detail).toEqual(eventData);
    });
    it("should NOT trigger an event if field is valid", () => {
      const eventData = {
        app_name: "testApp",
        component_name: "testComp",
        message: "Error message goes here.",
        message_type: "error"
      };

      //Same Error message already shown to user
      const validFieldState = {
        fieldState: {
          secondInteraction: true,
          isValid: true,
          errorMessage: eventData.message
        },
        prevFieldState: {
          secondInteraction: true,
          // already shown error message
          isValid: false,
          errorMessage: eventData.message
        }
      };
      // test already shown fieldState doesn't trigger new event
      const {
        fieldState,
        prevFieldState
      } = validFieldState;
      (0, _analyticsHelpers.checkForNewFieldErrorAndFireAnalytics)(eventData.app_name, eventData.component_name, fieldState, prevFieldState);
      expect(document.dispatchEvent.mock.calls.length).toBe(0);
    });
  });
  describe("checkForNewFormErrorsAndFireAnalytics", () => {
    beforeAll(() => {
      document.dispatchEvent = jest.fn();
    });
    it("should should NOT trigger an event if passed empty state", () => {
      const formState = {};
      const prevFormState = {};
      (0, _analyticsHelpers.checkForNewFormErrorsAndFireAnalytics)("testApp", formState, prevFormState);
      expect(document.dispatchEvent.mock.calls.length).toBe(0);
    });
    it("should should NOT trigger an event if field missing from prevState", () => {
      const formState = {
        fields: {
          billing_first: {}
        }
      };
      const prevFormState = {
        fields: {} // missing billing_first from prev state
      };

      (0, _analyticsHelpers.checkForNewFormErrorsAndFireAnalytics)("testApp", formState, prevFormState);
      expect(document.dispatchEvent.mock.calls.length).toBe(0);
    });
    it("should trigger events if any field in form has error message previously hidden from user (user previously not finished with first interaction)", () => {
      const eventDataFirst = {
        app_name: "testApp",
        component_name: "billing_first",
        message: "Error message goes here.",
        message_type: "error"
      };
      const eventDataLast = {
        app_name: "testApp",
        component_name: "billing_last",
        message: "Error message goes here.",
        message_type: "error"
      };

      // Previously unseen message hidden from user due to secondInteraction being false
      const formState = {
        fields: {
          billing_first: {
            secondInteraction: true,
            isValid: false,
            errorMessage: eventDataFirst.message
          },
          billing_last: {
            secondInteraction: true,
            isValid: false,
            errorMessage: eventDataLast.message
          }
        }
      };
      const prevFormState = {
        fields: {
          billing_first: {
            secondInteraction: false,
            // previously unshown error message
            isValid: false,
            errorMessage: eventDataFirst.message
          },
          billing_last: {
            secondInteraction: false,
            // previously unshown error message
            isValid: false,
            errorMessage: eventDataLast.message
          }
        }
      };
      (0, _analyticsHelpers.checkForNewFormErrorsAndFireAnalytics)(eventDataFirst.app_name, formState, prevFormState);
      expect(document.dispatchEvent.mock.calls.length).toBe(2);
      expect(document.dispatchEvent.mock.calls[0][0].detail).toEqual(eventDataFirst);
      expect(document.dispatchEvent.mock.calls[1][0].detail).toEqual(eventDataLast);
    });
  });
  _analyticsHelpers.checkForNewFormErrorsAndFireAnalytics;
});
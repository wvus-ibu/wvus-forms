import { action } from "@storybook/addon-actions";

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
  handleBlur: action("handleblur"),
  handleValueChange: action("handleValueChange"),
  showUIError: () => false,
  showUISuccess: () => false
};

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
  handleBlur: action("handleblur"),
  handleValueChange: action("handleValueChange"),
  showUIError: () => false,
  showUISuccess: () => true
};

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
  handleBlur: action("handleblur"),
  handleValueChange: action("handleValueChange"),
  showUIError: () => true,
  showUISuccess: () => false
};

/**
 * Optional fields should have these defaults:
 * isValid: true // allows form to be submitted without a value (since field is optional)
 * optional: true // ensures success state is not shown if field is empty and interacted with (see showUiSuccess function)
 */
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
  handleBlur: action("handleblur"),
  handleValueChange: action("handleValueChange"),
  showUIError: () => false,
  showUISuccess: () => false
};

/**
 * Checkbox props
 */

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
  handleBlur: action("handleblur"),
  handleValueChange: action("handleValueChange"),
  showUIError: () => false,
  showUISuccess: () => false
};

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
  handleBlur: action("handleblur"),
  handleValueChange: action("handleValueChange"),
  showUIError: () => false,
  showUISuccess: () => false
};

export {
  formMethodsUnTouched,
  formMethodsWithError,
  formMethodsWithSuccess,
  formMethodsOptional,
  formMethodsChecked,
  formMethodsUnChecked
};

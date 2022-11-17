(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "swing-ui/dist/css/swing.css", "@storybook/addon-info", "@storybook/react", "@storybook/addon-actions", "@storybook/addon-links", "../form-hoc.js", "../validation/validation-helpers.js", "../controls/input-control", "../controls/checkbox-control"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("swing-ui/dist/css/swing.css"), require("@storybook/addon-info"), require("@storybook/react"), require("@storybook/addon-actions"), require("@storybook/addon-links"), require("../form-hoc.js"), require("../validation/validation-helpers.js"), require("../controls/input-control"), require("../controls/checkbox-control"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.swing, global.addonInfo, global.react, global.addonActions, global.addonLinks, global.formHoc, global.validationHelpers, global.inputControl, global.checkboxControl);
    global.newsletterSignupStories = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_react, _swing, _addonInfo, _react2, _addonActions, _addonLinks, _formHoc, _validationHelpers, _inputControl, _checkboxControl) {
  "use strict";

  _react = _interopRequireDefault(_react);
  _formHoc = _interopRequireDefault(_formHoc);
  _inputControl = _interopRequireDefault(_inputControl);
  _checkboxControl = _interopRequireDefault(_checkboxControl);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  const NewsletterForm = props => {
    const submitDisabled = !props.formMethods.isFormValid();
    const handleFormSubmit = e => {
      e.preventDefault();
    };
    return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("h2", null, "Sign up for our newsletter"), /*#__PURE__*/_react.default.createElement(_inputControl.default, {
      fieldName: "email",
      fieldTitle: "Email",
      fieldType: "email",
      fieldClasses: "wvus-field-newletter-email",
      formMethods: props.formMethods,
      validators: [_validationHelpers.validateRequired, _validationHelpers.validateEmail]
    }), /*#__PURE__*/_react.default.createElement(_checkboxControl.default, {
      fieldName: "optIn",
      fieldValue: true,
      fieldTitle: "Yes, I would like to receive the email newsletter.",
      fieldClasses: "wvus-field-newletter-optin",
      formMethods: props.formMethods
    }), /*#__PURE__*/_react.default.createElement("button", {
      type: "submit",
      id: "wv-login-form-submit",
      className: "btn btn-medium btn-secondary",
      disabled: submitDisabled,
      onClick: handleFormSubmit
    }, "Sign Me Up!"));
  };
  const Form = (0, _formHoc.default)(NewsletterForm);
  (0, _react2.storiesOf)("Example Forms", module).add("Newsletter Signup Form", () => /*#__PURE__*/_react.default.createElement(Form, null));
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "swing-ui/dist/css/swing.css", "@storybook/addon-info", "@storybook/react", "@storybook/addon-actions", "@storybook/addon-links", "../index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("swing-ui/dist/css/swing.css"), require("@storybook/addon-info"), require("@storybook/react"), require("@storybook/addon-actions"), require("@storybook/addon-links"), require("../index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.swing, global.addonInfo, global.react, global.addonActions, global.addonLinks, global.index);
    global.sendMessageFormStories = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_react, _swing, _addonInfo, _react2, _addonActions, _addonLinks, _index) {
  "use strict";

  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  const MessageForm = props => {
    const {
      isFormValid,
      getFieldState
    } = props.formMethods;
    const submitDisabled = !isFormValid();

    const handleFormSubmit = e => {
      e.preventDefault();
    };

    const MAX_MESSAGE_CHAR = 255; // @TODO:

    const messageFieldLength = getFieldState("message").value && !!getFieldState("message").value.length ? getFieldState("message").value.length : 0;
    const messageCharacterCount = parseInt(MAX_MESSAGE_CHAR, 10) - parseInt(messageFieldLength, 10);
    return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("h2", null, "Send a message!"), /*#__PURE__*/_react.default.createElement(_index.InputControl, {
      fieldName: "recipient_email",
      fieldTitle: "Recipient Email",
      fieldType: "email",
      fieldClasses: "wvus-field-newletter-email",
      formMethods: props.formMethods,
      validators: [_index.validateRequired, _index.validateEmail]
    }), /*#__PURE__*/_react.default.createElement(_index.TextAreaControl, {
      fieldName: "message",
      fieldRows: 6,
      fieldPlaceholder: "Type your message here",
      fieldTitle: "Message",
      fieldClasses: "wvus-field-newletter-message",
      formMethods: props.formMethods,
      validators: [_index.validateRequired, (0, _index.validateMax)(MAX_MESSAGE_CHAR)],
      characterCount: messageCharacterCount
    }), /*#__PURE__*/_react.default.createElement(_index.CheckboxControl, {
      fieldName: "optIn",
      fieldValue: true,
      fieldTitle: "Yes, please send me a confirmation message.",
      fieldClasses: "wvus-field-newletter-optin",
      formMethods: props.formMethods
    }), /*#__PURE__*/_react.default.createElement("button", {
      type: "submit",
      id: "wv-login-form-submit",
      className: "btn btn-medium btn-secondary",
      disabled: submitDisabled,
      onClick: handleFormSubmit
    }, "Send"));
  };

  const Form = (0, _index.WVUSForm)(MessageForm);
  (0, _react2.storiesOf)("Example Forms", module).add("Send Email Form", () => /*#__PURE__*/_react.default.createElement(Form, null));
});
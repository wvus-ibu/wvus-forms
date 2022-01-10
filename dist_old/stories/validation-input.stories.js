(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "swing-ui/dist/css/swing.css", "@storybook/addon-info", "@storybook/react", "@storybook/addon-actions", "../form-hoc.js", "../controls/input-control", "../validation/validation-helpers.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("swing-ui/dist/css/swing.css"), require("@storybook/addon-info"), require("@storybook/react"), require("@storybook/addon-actions"), require("../form-hoc.js"), require("../controls/input-control"), require("../validation/validation-helpers.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.swing, global.addonInfo, global.react, global.addonActions, global.formHoc, global.inputControl, global.validationHelpers);
    global.validationInputStories = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_react, _swing, _addonInfo, _react2, _addonActions, _formHoc, _inputControl, _validationHelpers) {
  "use strict";

  _react = _interopRequireDefault(_react);
  _formHoc = _interopRequireDefault(_formHoc);
  _inputControl = _interopRequireDefault(_inputControl);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  const SimpleInputForm = props => {
    return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("h2", null, "Input Control - required field"), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("h3", null, "Type: Text with validateRequired:"), /*#__PURE__*/_react.default.createElement(_inputControl.default, {
      fieldPlaceholder: "Tim Stehlin",
      fieldName: "fname",
      fieldTitle: "First Name",
      fieldClasses: "custom-class-field-input",
      formMethods: props.formMethods,
      validators: [_validationHelpers.validateRequired]
    }), /*#__PURE__*/_react.default.createElement("h3", null, "Type: Email with validateRequired & validateEmail: "), /*#__PURE__*/_react.default.createElement(_inputControl.default, {
      fieldPlaceholder: "someone@worldvision.org",
      fieldName: "email",
      fieldTitle: "Email",
      fieldType: "email",
      fieldClasses: "custom-class-field-input",
      formMethods: props.formMethods,
      validators: [_validationHelpers.validateRequired, _validationHelpers.validateEmail]
    }));
  };

  const Form = (0, _formHoc.default)(SimpleInputForm);
  (0, _react2.storiesOf)("Form Validation", module).add("Input Field", () => /*#__PURE__*/_react.default.createElement(Form, null)); // storiesOf("WVUS Form Controls", module).add("Plain Input Field", () => (
  //   <InputControl
  //     fieldPlaceholder="Tim Stehlin"
  //     fieldName="recipient_fname"
  //     fieldTitle="First Name"
  //     fieldClasses="custom-class-field-input"
  //     formMethods={props.formMethods}
  //     validators={[validateRequired]}
  //   />
  // ));
});
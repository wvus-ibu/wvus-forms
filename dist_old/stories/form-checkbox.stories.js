(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "swing-ui/dist/css/swing.css", "@storybook/addon-info", "@storybook/react", "@storybook/addon-actions", "./shared/checkbox-control-form", "../index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("swing-ui/dist/css/swing.css"), require("@storybook/addon-info"), require("@storybook/react"), require("@storybook/addon-actions"), require("./shared/checkbox-control-form"), require("../index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.swing, global.addonInfo, global.react, global.addonActions, global.checkboxControlForm, global.index);
    global.formCheckboxStories = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_react, _swing, _addonInfo, _react2, _addonActions, _checkboxControlForm, _index) {
  "use strict";

  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  const Form = (0, _index.WVUSForm)(_checkboxControlForm.SimpleCheckboxForm);
  (0, _react2.storiesOf)("Form Components", module).add("Checkbox Field States", () => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "Checkbox Control"), /*#__PURE__*/_react.default.createElement("h2", null, "Interactive Form:"), /*#__PURE__*/_react.default.createElement(Form, null), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("h2", {
    className: "text-center"
  }, "STATES"), /*#__PURE__*/_react.default.createElement("hr", null), /*#__PURE__*/_react.default.createElement("h2", null, "Checkbox - checked"), /*#__PURE__*/_react.default.createElement(_checkboxControlForm.SimpleCheckboxForm, _checkboxControlForm.propsChecked), /*#__PURE__*/_react.default.createElement("p", null, "FieldState:", /*#__PURE__*/_react.default.createElement("br", null), window.JSON.stringify(_checkboxControlForm.propsChecked.formMethods.getFieldState())), /*#__PURE__*/_react.default.createElement("h2", null, "Checkbox - unchecked"), /*#__PURE__*/_react.default.createElement(_checkboxControlForm.SimpleCheckboxForm, _checkboxControlForm.propsUnchecked), /*#__PURE__*/_react.default.createElement("p", null, "FieldState:", /*#__PURE__*/_react.default.createElement("br", null), window.JSON.stringify(_checkboxControlForm.propsUnchecked.formMethods.getFieldState())), /*#__PURE__*/_react.default.createElement("h2", null, "Checkbox - disabled"), /*#__PURE__*/_react.default.createElement(_checkboxControlForm.DisabledCheckboxForm, _checkboxControlForm.propsDisabled), /*#__PURE__*/_react.default.createElement("p", null, "Note: Disabled styling not included in form library. Wrap form in fieldset disabled to get Bootstrap disabled styling as shown here.")));
});
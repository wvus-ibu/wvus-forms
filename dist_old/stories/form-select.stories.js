(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "swing-ui/dist/css/swing.css", "@storybook/addon-info", "@storybook/react", "@storybook/addon-actions", "./shared/select-control-form", "../index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("swing-ui/dist/css/swing.css"), require("@storybook/addon-info"), require("@storybook/react"), require("@storybook/addon-actions"), require("./shared/select-control-form"), require("../index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.swing, global.addonInfo, global.react, global.addonActions, global.selectControlForm, global.index);
    global.formSelectStories = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_react, _swing, _addonInfo, _react2, _addonActions, _selectControlForm, _index) {
  "use strict";

  _react = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  const Form = (0, _index.WVUSForm)(_selectControlForm.SelectForm);
  const FormPreselected = (0, _index.WVUSForm)(_selectControlForm.SelectFormPreselected);
  (0, _react2.storiesOf)("Form Components", module).add("Select Field States", () => /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", null, "Select Control"), /*#__PURE__*/_react.default.createElement("h2", null, "Default (no selected value):"), /*#__PURE__*/_react.default.createElement(Form, null), /*#__PURE__*/_react.default.createElement("h2", null, "Preselected:"), /*#__PURE__*/_react.default.createElement(FormPreselected, null)));
});
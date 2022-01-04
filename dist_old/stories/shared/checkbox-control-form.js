(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../index", "./props-mocks"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../index"), require("./props-mocks"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.index, global.propsMocks);
    global.checkboxControlForm = mod.exports;
  }
})(this, function (exports, _react, _index, _propsMocks) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.propsDisabled = exports.propsUnchecked = exports.propsChecked = exports.DisabledCheckboxForm = exports.SimpleCheckboxForm = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var propsChecked = {
    formMethods: _propsMocks.formMethodsChecked
  };

  var propsUnchecked = {
    formMethods: _propsMocks.formMethodsUnChecked
  };

  var propsDisabled = {
    formMethods: _propsMocks.formMethodsChecked,
    attributes: {
      disabled: true
    }
  };

  var SimpleCheckboxForm = function SimpleCheckboxForm(props) {
    return _react2.default.createElement(
      "form",
      null,
      _react2.default.createElement(_index.CheckboxControl, {
        labelClasses: "opt-in-label",
        inputClasses: "opt-in-input",
        fieldName: "optIn",
        fieldValue: true,
        fieldTitle: "Yes, I would like to receive the email newsletter.",
        fieldClasses: "wvus-field-newletter-optin",
        formMethods: props.formMethods
      })
    );
  };

  var DisabledCheckboxForm = function DisabledCheckboxForm(props) {
    return _react2.default.createElement(
      "form",
      null,
      _react2.default.createElement(
        "fieldset",
        { disabled: true },
        _react2.default.createElement(_index.CheckboxControl, {
          fieldName: "optIn",
          fieldValue: true,
          fieldTitle: "Yes, I would like to receive the email newsletter.",
          fieldClasses: "wvus-field-newletter-optin",
          formMethods: props.formMethods
        })
      )
    );
  };

  exports.SimpleCheckboxForm = SimpleCheckboxForm;
  exports.DisabledCheckboxForm = DisabledCheckboxForm;
  exports.propsChecked = propsChecked;
  exports.propsUnchecked = propsUnchecked;
  exports.propsDisabled = propsDisabled;
});
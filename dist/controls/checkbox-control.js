(function(global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "./message.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(
      exports,
      require("react"),
      require("prop-types"),
      require("./message.js")
    );
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.message);
    global.checkboxControl = mod.exports;
  }
})(this, function(exports, _react, _propTypes, _message) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _message2 = _interopRequireDefault(_message);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule
      ? obj
      : {
          default: obj
        };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    }

    return call && (typeof call === "object" || typeof call === "function")
      ? call
      : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError(
        "Super expression must either be null or a function, not " +
          typeof superClass
      );
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass);
  }

  var CheckboxControl = (function(_Component) {
    _inherits(CheckboxControl, _Component);

    function CheckboxControl(props) {
      _classCallCheck(this, CheckboxControl);

      return _possibleConstructorReturn(
        this,
        (
          CheckboxControl.__proto__ || Object.getPrototypeOf(CheckboxControl)
        ).call(this, props)
      );
    }

    _createClass(CheckboxControl, [
      {
        key: "componentWillMount",
        value: function componentWillMount() {
          var _props = this.props,
            fieldName = _props.fieldName,
            _props$fieldValue = _props.fieldValue,
            fieldValue =
              _props$fieldValue === undefined ? false : _props$fieldValue,
            _props$secondInteract = _props.secondInteraction,
            secondInteraction =
              _props$secondInteract === undefined
                ? false
                : _props$secondInteract,
            _props$isValid = _props.isValid,
            isValid = _props$isValid === undefined ? true : _props$isValid,
            _props$validators = _props.validators,
            validators =
              _props$validators === undefined ? [] : _props$validators,
            formMethods = _props.formMethods;

          formMethods.addFieldToState(
            fieldName,
            fieldValue,
            secondInteraction,
            isValid,
            validators
          );
        }
      },
      {
        key: "render",
        value: function render() {
          var _props2 = this.props,
            formMethods = _props2.formMethods,
            fieldName = _props2.fieldName,
            _props2$fieldId = _props2.fieldId,
            fieldId =
              _props2$fieldId === undefined ? fieldName : _props2$fieldId,
            _props2$fieldClasses = _props2.fieldClasses,
            fieldClasses =
              _props2$fieldClasses === undefined ? "" : _props2$fieldClasses,
            fieldTitle = _props2.fieldTitle,
            _props2$attributes = _props2.attributes,
            attributes =
              _props2$attributes === undefined ? {} : _props2$attributes,
            _props2$inputClasses = _props2.inputClasses,
            inputClasses =
              _props2$inputClasses === undefined ? "" : _props2$inputClasses,
            _props2$labelClasses = _props2.labelClasses,
            labelClasses =
              _props2$labelClasses === undefined ? "" : _props2$labelClasses,
            _props2$handleValueCh = _props2.handleValueChange,
            handleValueChange =
              _props2$handleValueCh === undefined
                ? formMethods.handleValueChange
                : _props2$handleValueCh,
            _props2$handleFocus = _props2.handleFocus,
            handleFocus =
              _props2$handleFocus === undefined
                ? function() {}
                : _props2$handleFocus,
            _props2$fieldState = _props2.fieldState,
            fieldState =
              _props2$fieldState === undefined
                ? formMethods.getFieldState(fieldName)
                : _props2$fieldState;

          var disabled = attributes.disabled ? attributes.disabled : false;
          var fieldPrimaryClass = "wvus-field-" + fieldName;
          var fieldValue = fieldState.value || "";

          return _react2.default.createElement(
            "div",
            {
              className:
                fieldPrimaryClass + " " + fieldClasses + " checkbox-group"
            },
            _react2.default.createElement(
              "label",
              { className: labelClasses + " checkbox-inline" },
              _react2.default.createElement("input", {
                id: fieldId,
                className: inputClasses,
                name: fieldName,
                onChange: handleValueChange,
                onFocus: handleFocus,
                type: "checkbox",
                checked: fieldValue,
                disabled: disabled
              }),
              fieldTitle
            )
          );
        }
      }
    ]);

    return CheckboxControl;
  })(_react.Component);

  CheckboxControl.propTypes = {
    fieldName: _propTypes2.default.string.isRequired,
    fieldValue: _propTypes2.default.bool.isRequired,
    formMethods: _propTypes2.default.shape({
      handleValueChange: _propTypes2.default.func.isRequired,
      getFieldState: _propTypes2.default.func.isRequired,
      showUIError: _propTypes2.default.func.isRequired,
      showUISuccess: _propTypes2.default.func.isRequired
    }).isRequired,
    attributes: _propTypes2.default.shape({
      disabled: _propTypes2.default.bool
    }),
    validators: _propTypes2.default.array
  };

  exports.default = CheckboxControl;
});

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "./message.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("./message.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.message);
    global.inputControl = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _message) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _message2 = _interopRequireDefault(_message);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var InputControl = function (_Component) {
    _inherits(InputControl, _Component);

    function InputControl(props) {
      _classCallCheck(this, InputControl);

      return _possibleConstructorReturn(this, (InputControl.__proto__ || Object.getPrototypeOf(InputControl)).call(this, props));
    }

    _createClass(InputControl, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        var _props = this.props,
            fieldName = _props.fieldName,
            _props$fieldValue = _props.fieldValue,
            fieldValue = _props$fieldValue === undefined ? "" : _props$fieldValue,
            _props$secondInteract = _props.secondInteraction,
            secondInteraction = _props$secondInteract === undefined ? false : _props$secondInteract,
            _props$isValid = _props.isValid,
            isValid = _props$isValid === undefined ? false : _props$isValid,
            _props$validators = _props.validators,
            validators = _props$validators === undefined ? [] : _props$validators,
            _props$optional = _props.optional,
            optional = _props$optional === undefined ? false : _props$optional,
            formMethods = _props.formMethods;


        formMethods.addFieldToState(fieldName, fieldValue, secondInteraction, isValid, validators, optional);
      }
    }, {
      key: "render",
      value: function render() {
        var _props2 = this.props,
            formMethods = _props2.formMethods,
            fieldName = _props2.fieldName,
            _props2$fieldId = _props2.fieldId,
            fieldId = _props2$fieldId === undefined ? fieldName : _props2$fieldId,
            _props2$fieldClasses = _props2.fieldClasses,
            fieldClasses = _props2$fieldClasses === undefined ? "" : _props2$fieldClasses,
            _props2$fieldType = _props2.fieldType,
            fieldType = _props2$fieldType === undefined ? "text" : _props2$fieldType,
            fieldTitle = _props2.fieldTitle,
            fieldPlaceholder = _props2.fieldPlaceholder,
            _props2$fieldState = _props2.fieldState,
            fieldState = _props2$fieldState === undefined ? formMethods.getFieldState(fieldName) : _props2$fieldState,
            characterCount = _props2.characterCount,
            _props2$attributes = _props2.attributes,
            attributes = _props2$attributes === undefined ? {} : _props2$attributes,
            _props2$inputClasses = _props2.inputClasses,
            inputClasses = _props2$inputClasses === undefined ? "" : _props2$inputClasses,
            _props2$labelClasses = _props2.labelClasses,
            labelClasses = _props2$labelClasses === undefined ? "" : _props2$labelClasses,
            _props2$handleValueCh = _props2.handleValueChange,
            handleValueChange = _props2$handleValueCh === undefined ? formMethods.handleValueChange : _props2$handleValueCh,
            _props2$handleBlur = _props2.handleBlur,
            handleBlur = _props2$handleBlur === undefined ? formMethods.handleBlur : _props2$handleBlur,
            _props2$handleFocus = _props2.handleFocus,
            handleFocus = _props2$handleFocus === undefined ? function () {} : _props2$handleFocus,
            _props2$showUISuccess = _props2.showUISuccess,
            showUISuccess = _props2$showUISuccess === undefined ? formMethods.showUISuccess(fieldState) : _props2$showUISuccess,
            _props2$showUIError = _props2.showUIError,
            showUIError = _props2$showUIError === undefined ? formMethods.showUIError(fieldState) : _props2$showUIError,
            _props2$hideMessage = _props2.hideMessage,
            hideMessage = _props2$hideMessage === undefined ? false : _props2$hideMessage;

        var readOnly = attributes.readOnly ? attributes.readOnly : false;
        var disabled = attributes.disabled ? attributes.disabled : false;

        var validityClass = showUISuccess ? "has-success " : showUIError ? "has-error " : "";
        var requiredStar = fieldState.optional == true ? "" : _react2.default.createElement(
          "sup",
          null,
          "*"
        );
        var label = !(fieldType === "hidden") ? _react2.default.createElement(
          "label",
          { htmlFor: fieldName, className: labelClasses },
          fieldTitle,
          " ",
          requiredStar
        ) : null;
        var fieldValue = fieldState.value || "";
        var fieldPrimaryClass = "wvus-field-" + fieldName;

        return _react2.default.createElement(
          "div",
          {
            className: fieldPrimaryClass + " " + fieldClasses + " form-group has-icon " + validityClass,
            "data-field-container": fieldId,
            "data-field-is-valid": fieldState.isValid
          },
          label,
          _react2.default.createElement(
            "div",
            { className: "form-control-wrapper" },
            _react2.default.createElement("input", {
              id: fieldId || fieldName,
              className: "form-control " + inputClasses,
              value: fieldValue,
              name: fieldName,
              onBlur: handleBlur,
              onChange: handleValueChange,
              onFocus: handleFocus,
              type: fieldType,
              placeholder: fieldPlaceholder,
              readOnly: readOnly,
              disabled: disabled
            }),
            typeof characterCount !== "undefined" ? _react2.default.createElement(
              "span",
              { className: "message character-count" },
              characterCount
            ) : "",
            !hideMessage && showUIError ? _react2.default.createElement(_message2.default, {
              showError: true,
              showSuccess: false,
              message: fieldState.errorMessage
            }) : "",
            !hideMessage && showUISuccess ? _react2.default.createElement(_message2.default, { showError: false, showSuccess: true }) : ""
          )
        );
      }
    }]);

    return InputControl;
  }(_react.Component);

  InputControl.propTypes = {
    fieldName: _propTypes2.default.string.isRequired,
    formMethods: _propTypes2.default.shape({
      handleBlur: _propTypes2.default.func.isRequired,
      handleValueChange: _propTypes2.default.func.isRequired,
      getFieldState: _propTypes2.default.func.isRequired,
      addFieldToState: _propTypes2.default.func.isRequired,
      showUIError: _propTypes2.default.func.isRequired,
      showUISuccess: _propTypes2.default.func.isRequired
    }).isRequired,
    attributes: _propTypes2.default.shape({
      readonly: _propTypes2.default.bool,
      disabled: _propTypes2.default.bool
    }),
    validators: _propTypes2.default.array
  };

  exports.default = InputControl;
});
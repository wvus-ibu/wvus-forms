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
    global.selectControl = mod.exports;
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

  var SelectControl = function (_React$Component) {
    _inherits(SelectControl, _React$Component);

    function SelectControl(props) {
      _classCallCheck(this, SelectControl);

      var _this = _possibleConstructorReturn(this, (SelectControl.__proto__ || Object.getPrototypeOf(SelectControl)).call(this, props));

      var _this$props = _this.props,
          fieldName = _this$props.fieldName,
          _this$props$fieldValu = _this$props.fieldValue,
          fieldValue = _this$props$fieldValu === undefined ? "" : _this$props$fieldValu,
          _this$props$secondInt = _this$props.secondInteraction,
          secondInteraction = _this$props$secondInt === undefined ? false : _this$props$secondInt,
          _this$props$isValid = _this$props.isValid,
          isValid = _this$props$isValid === undefined ? false : _this$props$isValid,
          _this$props$validator = _this$props.validators,
          validators = _this$props$validator === undefined ? [] : _this$props$validator,
          _this$props$optional = _this$props.optional,
          optional = _this$props$optional === undefined ? false : _this$props$optional,
          formMethods = _this$props.formMethods;

      formMethods.addFieldToState(fieldName, fieldValue, secondInteraction, isValid, validators, optional);
      return _this;
    }

    _createClass(SelectControl, [{
      key: "render",
      value: function render() {
        var _props = this.props,
            formMethods = _props.formMethods,
            fieldOptions = _props.fieldOptions,
            fieldName = _props.fieldName,
            _props$fieldId = _props.fieldId,
            fieldId = _props$fieldId === undefined ? fieldName : _props$fieldId,
            _props$fieldClasses = _props.fieldClasses,
            fieldClasses = _props$fieldClasses === undefined ? "" : _props$fieldClasses,
            fieldTitle = _props.fieldTitle,
            fieldPlaceholder = _props.fieldPlaceholder,
            _props$fieldState = _props.fieldState,
            fieldState = _props$fieldState === undefined ? formMethods.getFieldState(fieldName) : _props$fieldState,
            _props$inputClasses = _props.inputClasses,
            inputClasses = _props$inputClasses === undefined ? "" : _props$inputClasses,
            _props$labelClasses = _props.labelClasses,
            labelClasses = _props$labelClasses === undefined ? "" : _props$labelClasses,
            _props$handleValueCha = _props.handleValueChange,
            handleValueChange = _props$handleValueCha === undefined ? formMethods.handleValueChange : _props$handleValueCha,
            _props$handleBlur = _props.handleBlur,
            handleBlur = _props$handleBlur === undefined ? formMethods.handleBlur : _props$handleBlur,
            _props$handleFocus = _props.handleFocus,
            handleFocus = _props$handleFocus === undefined ? function () {} : _props$handleFocus,
            _props$showUISuccess = _props.showUISuccess,
            showUISuccess = _props$showUISuccess === undefined ? formMethods.showUISuccess(fieldState) : _props$showUISuccess,
            _props$showUIError = _props.showUIError,
            showUIError = _props$showUIError === undefined ? formMethods.showUIError(fieldState) : _props$showUIError;

        var options = fieldOptions.map(function (option, index) {
          return _react2.default.createElement(
            "option",
            { key: index, value: option.valueKey },
            option.valueText
          );
        });
        var validityClass = showUISuccess ? "has-success " : showUIError ? "has-error " : "";
        var requiredStar = fieldState.optional == true ? "" : _react2.default.createElement(
          "sup",
          null,
          "*"
        );
        var fieldValue = fieldState.value || "";
        var fieldPrimaryClass = "wvus-field-" + fieldName;

        return _react2.default.createElement(
          "div",
          {
            className: fieldPrimaryClass + " " + fieldClasses + " form-group has-icon " + validityClass
          },
          _react2.default.createElement(
            "label",
            { htmlFor: fieldName, className: labelClasses },
            fieldTitle,
            " ",
            requiredStar
          ),
          _react2.default.createElement(
            "div",
            { className: "form-control-wrapper" },
            _react2.default.createElement(
              "select",
              {
                id: fieldName,
                className: "form-control select-control " + inputClasses,
                value: fieldValue,
                name: fieldName,
                onBlur: handleBlur,
                onFocus: handleFocus,
                onChange: handleValueChange
              },
              options
            ),
            showUIError ? _react2.default.createElement(_message2.default, {
              showError: true,
              showSuccess: false,
              message: fieldState.errorMessage
            }) : "",
            showUISuccess ? _react2.default.createElement(_message2.default, { showError: false, showSuccess: true }) : ""
          )
        );
      }
    }]);

    return SelectControl;
  }(_react2.default.Component);

  SelectControl.propTypes = {
    fieldName: _propTypes2.default.string.isRequired,
    fieldOptions: _propTypes2.default.array.isRequired,
    formMethods: _propTypes2.default.shape({
      handleBlur: _propTypes2.default.func.isRequired,
      handleValueChange: _propTypes2.default.func.isRequired,
      getFieldState: _propTypes2.default.func.isRequired,
      showUIError: _propTypes2.default.func.isRequired,
      showUISuccess: _propTypes2.default.func.isRequired
    }).isRequired,
    validators: _propTypes2.default.array
  };

  exports.default = SelectControl;
});
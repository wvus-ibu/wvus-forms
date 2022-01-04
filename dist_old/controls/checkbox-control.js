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
    global.checkboxControl = mod.exports;
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

  var CheckboxControl = function (_Component) {
    _inherits(CheckboxControl, _Component);

    function CheckboxControl(props) {
      _classCallCheck(this, CheckboxControl);

      var _this = _possibleConstructorReturn(this, (CheckboxControl.__proto__ || Object.getPrototypeOf(CheckboxControl)).call(this, props));

      var _this$props = _this.props,
          fieldName = _this$props.fieldName,
          _this$props$fieldValu = _this$props.fieldValue,
          fieldValue = _this$props$fieldValu === undefined ? false : _this$props$fieldValu,
          _this$props$secondInt = _this$props.secondInteraction,
          secondInteraction = _this$props$secondInt === undefined ? false : _this$props$secondInt,
          _this$props$isValid = _this$props.isValid,
          isValid = _this$props$isValid === undefined ? true : _this$props$isValid,
          _this$props$validator = _this$props.validators,
          validators = _this$props$validator === undefined ? [] : _this$props$validator,
          formMethods = _this$props.formMethods;

      formMethods.addFieldToState(fieldName, fieldValue, secondInteraction, isValid, validators);
      return _this;
    }

    _createClass(CheckboxControl, [{
      key: "render",
      value: function render() {
        var _props = this.props,
            formMethods = _props.formMethods,
            fieldName = _props.fieldName,
            _props$fieldId = _props.fieldId,
            fieldId = _props$fieldId === undefined ? fieldName : _props$fieldId,
            _props$fieldClasses = _props.fieldClasses,
            fieldClasses = _props$fieldClasses === undefined ? "" : _props$fieldClasses,
            fieldTitle = _props.fieldTitle,
            _props$attributes = _props.attributes,
            attributes = _props$attributes === undefined ? {} : _props$attributes,
            _props$inputClasses = _props.inputClasses,
            inputClasses = _props$inputClasses === undefined ? "" : _props$inputClasses,
            _props$labelClasses = _props.labelClasses,
            labelClasses = _props$labelClasses === undefined ? "" : _props$labelClasses,
            _props$handleValueCha = _props.handleValueChange,
            handleValueChange = _props$handleValueCha === undefined ? formMethods.handleValueChange : _props$handleValueCha,
            _props$handleFocus = _props.handleFocus,
            handleFocus = _props$handleFocus === undefined ? function () {} : _props$handleFocus,
            _props$fieldState = _props.fieldState,
            fieldState = _props$fieldState === undefined ? formMethods.getFieldState(fieldName) : _props$fieldState;


        var disabled = attributes.disabled ? attributes.disabled : false;
        var fieldPrimaryClass = "wvus-field-" + fieldName;
        var fieldValue = fieldState.value || "";

        return _react2.default.createElement(
          "div",
          { className: fieldPrimaryClass + " " + fieldClasses + " checkbox-group" },
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
    }]);

    return CheckboxControl;
  }(_react.Component);

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
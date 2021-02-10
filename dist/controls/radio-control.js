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
    global.radioControl = mod.exports;
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

  var RadioControl = function (_Component) {
    _inherits(RadioControl, _Component);

    function RadioControl(props) {
      _classCallCheck(this, RadioControl);

      var _this = _possibleConstructorReturn(this, (RadioControl.__proto__ || Object.getPrototypeOf(RadioControl)).call(this, props));

      _this.handleValueChange = _this.handleValueChange.bind(_this);
      var _this$props = _this.props,
          fieldId = _this$props.fieldId,
          fieldName = _this$props.fieldName,
          _this$props$fieldChec = _this$props.fieldCheckedDefault,
          fieldCheckedDefault = _this$props$fieldChec === undefined ? false : _this$props$fieldChec,
          _this$props$secondInt = _this$props.secondInteraction,
          secondInteraction = _this$props$secondInt === undefined ? false : _this$props$secondInt,
          _this$props$isValid = _this$props.isValid,
          isValid = _this$props$isValid === undefined ? false : _this$props$isValid,
          _this$props$validator = _this$props.validators,
          validators = _this$props$validator === undefined ? [] : _this$props$validator,
          _this$props$optional = _this$props.optional,
          optional = _this$props$optional === undefined ? false : _this$props$optional,
          formMethods = _this$props.formMethods;


      // Only setup state if initally checked radio button
      if (fieldCheckedDefault) {
        // Set value to fieldId
        var fieldValue = fieldId;
        formMethods.addFieldToState(fieldName, fieldValue, secondInteraction, isValid, validators, optional);
      }
      return _this;
    }

    _createClass(RadioControl, [{
      key: "handleValueChange",
      value: function handleValueChange(e) {
        var setValueChange = this.props.formMethods.setValueChange;

        setValueChange(e.target.name, e.target.id);
      }
    }, {
      key: "render",
      value: function render() {
        var _props = this.props,
            formMethods = _props.formMethods,
            fieldId = _props.fieldId,
            fieldName = _props.fieldName,
            _props$fieldClasses = _props.fieldClasses,
            fieldClasses = _props$fieldClasses === undefined ? "" : _props$fieldClasses,
            fieldTitle = _props.fieldTitle,
            _props$inputClasses = _props.inputClasses,
            inputClasses = _props$inputClasses === undefined ? "" : _props$inputClasses,
            _props$labelClasses = _props.labelClasses,
            labelClasses = _props$labelClasses === undefined ? "" : _props$labelClasses,
            _props$fieldState = _props.fieldState,
            fieldState = _props$fieldState === undefined ? formMethods.getFieldState(fieldName) : _props$fieldState,
            _props$handleValueCha = _props.handleValueChange,
            handleValueChange = _props$handleValueCha === undefined ? this.handleValueChange : _props$handleValueCha,
            _props$handleBlur = _props.handleBlur,
            handleBlur = _props$handleBlur === undefined ? function () {} : _props$handleBlur,
            _props$handleFocus = _props.handleFocus,
            handleFocus = _props$handleFocus === undefined ? function () {} : _props$handleFocus;


        var fieldPrimaryClass = "wvus-field-" + fieldName + " wvus-field-" + fieldId;
        var fieldChecked = fieldState.value === fieldId;

        return _react2.default.createElement(
          "div",
          { className: "radio-group " + fieldPrimaryClass + " " + fieldClasses },
          _react2.default.createElement(
            "label",
            { className: "radio-inline " + labelClasses },
            _react2.default.createElement("input", {
              id: fieldId,
              className: inputClasses,
              value: fieldState.value,
              name: fieldName,
              onChange: handleValueChange,
              onFocus: handleFocus,
              onBlur: handleBlur,
              type: "radio",
              checked: fieldChecked
            }),
            fieldTitle
          )
        );
      }
    }]);

    return RadioControl;
  }(_react.Component);

  RadioControl.propTypes = {
    fieldId: _propTypes2.default.string.isRequired,
    fieldName: _propTypes2.default.string.isRequired,
    fieldCheckedDefault: _propTypes2.default.bool,
    formMethods: _propTypes2.default.shape({
      handleBlur: _propTypes2.default.func.isRequired,
      handleValueChange: _propTypes2.default.func.isRequired,
      getFieldState: _propTypes2.default.func.isRequired,
      addFieldToState: _propTypes2.default.func.isRequired,
      showUIError: _propTypes2.default.func.isRequired,
      showUISuccess: _propTypes2.default.func.isRequired
    }).isRequired,
    validators: _propTypes2.default.array
  };

  exports.default = RadioControl;
});
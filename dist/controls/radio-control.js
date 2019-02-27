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
      return _this;
    }

    _createClass(RadioControl, [{
      key: "componentWillMount",
      value: function componentWillMount() {
        var _props = this.props,
            fieldId = _props.fieldId,
            fieldName = _props.fieldName,
            _props$fieldCheckedDe = _props.fieldCheckedDefault,
            fieldCheckedDefault = _props$fieldCheckedDe === undefined ? false : _props$fieldCheckedDe,
            _props$secondInteract = _props.secondInteraction,
            secondInteraction = _props$secondInteract === undefined ? false : _props$secondInteract,
            _props$isValid = _props.isValid,
            isValid = _props$isValid === undefined ? false : _props$isValid,
            _props$validators = _props.validators,
            validators = _props$validators === undefined ? [] : _props$validators,
            _props$optional = _props.optional,
            optional = _props$optional === undefined ? false : _props$optional,
            formMethods = _props.formMethods;


        // Only setup state if initally checked radio button
        if (fieldCheckedDefault) {
          // Set value to fieldId
          var fieldValue = fieldId;
          formMethods.addFieldToState(fieldName, fieldValue, secondInteraction, isValid, validators, optional);
        }
      }
    }, {
      key: "handleValueChange",
      value: function handleValueChange(e) {
        var setValueChange = this.props.formMethods.setValueChange;

        setValueChange(e.target.name, e.target.id);
      }
    }, {
      key: "render",
      value: function render() {
        var _props2 = this.props,
            formMethods = _props2.formMethods,
            fieldId = _props2.fieldId,
            fieldName = _props2.fieldName,
            _props2$fieldClasses = _props2.fieldClasses,
            fieldClasses = _props2$fieldClasses === undefined ? "" : _props2$fieldClasses,
            fieldTitle = _props2.fieldTitle,
            _props2$inputClasses = _props2.inputClasses,
            inputClasses = _props2$inputClasses === undefined ? "" : _props2$inputClasses,
            _props2$labelClasses = _props2.labelClasses,
            labelClasses = _props2$labelClasses === undefined ? "" : _props2$labelClasses,
            _props2$fieldState = _props2.fieldState,
            fieldState = _props2$fieldState === undefined ? formMethods.getFieldState(fieldName) : _props2$fieldState,
            _props2$handleValueCh = _props2.handleValueChange,
            handleValueChange = _props2$handleValueCh === undefined ? this.handleValueChange : _props2$handleValueCh,
            _props2$handleBlur = _props2.handleBlur,
            handleBlur = _props2$handleBlur === undefined ? function () {} : _props2$handleBlur,
            _props2$handleFocus = _props2.handleFocus,
            handleFocus = _props2$handleFocus === undefined ? function () {} : _props2$handleFocus;


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
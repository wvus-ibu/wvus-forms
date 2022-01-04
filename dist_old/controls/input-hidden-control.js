(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "./message.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("./message.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.message);
    global.inputHiddenControl = mod.exports;
  }
})(this, function (exports, _react, _message) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

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

  var InputHiddenControl = function (_Component) {
    _inherits(InputHiddenControl, _Component);

    function InputHiddenControl(props) {
      _classCallCheck(this, InputHiddenControl);

      var _this = _possibleConstructorReturn(this, (InputHiddenControl.__proto__ || Object.getPrototypeOf(InputHiddenControl)).call(this, props));

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

    _createClass(InputHiddenControl, [{
      key: "render",
      value: function render() {
        var _props = this.props,
            formMethods = _props.formMethods,
            fieldName = _props.fieldName,
            _props$fieldId = _props.fieldId,
            fieldId = _props$fieldId === undefined ? fieldName : _props$fieldId,
            _props$fieldClasses = _props.fieldClasses,
            fieldClasses = _props$fieldClasses === undefined ? "" : _props$fieldClasses,
            _props$inputClasses = _props.inputClasses,
            inputClasses = _props$inputClasses === undefined ? "" : _props$inputClasses,
            _props$fieldState = _props.fieldState,
            fieldState = _props$fieldState === undefined ? formMethods.getFieldState(fieldName) : _props$fieldState;


        var fieldValue = fieldState.value || "";
        var fieldPrimaryClass = "wvus-field-" + fieldName;

        return _react2.default.createElement(
          "span",
          {
            className: fieldPrimaryClass + " " + fieldClasses + " input-hidden-control-wrapper",
            "data-field-container": fieldId
          },
          _react2.default.createElement("input", {
            id: fieldId,
            className: "input-hidden-control " + inputClasses,
            name: fieldName,
            value: fieldValue,
            type: "hidden"
          })
        );
      }
    }]);

    return InputHiddenControl;
  }(_react.Component);

  exports.default = InputHiddenControl;
});
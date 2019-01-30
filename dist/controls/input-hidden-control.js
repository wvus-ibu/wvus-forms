(function(global, factory) {
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
})(this, function(exports, _react, _message) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

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

  var InputHiddenControl = (function(_Component) {
    _inherits(InputHiddenControl, _Component);

    function InputHiddenControl(props) {
      _classCallCheck(this, InputHiddenControl);

      return _possibleConstructorReturn(
        this,
        (
          InputHiddenControl.__proto__ ||
          Object.getPrototypeOf(InputHiddenControl)
        ).call(this, props)
      );
    }

    _createClass(InputHiddenControl, [
      {
        key: "componentWillMount",
        value: function componentWillMount() {
          var _props = this.props,
            fieldName = _props.fieldName,
            _props$fieldValue = _props.fieldValue,
            fieldValue =
              _props$fieldValue === undefined ? "" : _props$fieldValue,
            _props$secondInteract = _props.secondInteraction,
            secondInteraction =
              _props$secondInteract === undefined
                ? false
                : _props$secondInteract,
            _props$isValid = _props.isValid,
            isValid = _props$isValid === undefined ? false : _props$isValid,
            _props$validators = _props.validators,
            validators =
              _props$validators === undefined ? [] : _props$validators,
            _props$optional = _props.optional,
            optional = _props$optional === undefined ? false : _props$optional,
            formMethods = _props.formMethods;

          formMethods.addFieldToState(
            fieldName,
            fieldValue,
            secondInteraction,
            isValid,
            validators,
            optional
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
            _props2$inputClasses = _props2.inputClasses,
            inputClasses =
              _props2$inputClasses === undefined ? "" : _props2$inputClasses,
            _props2$fieldState = _props2.fieldState,
            fieldState =
              _props2$fieldState === undefined
                ? formMethods.getFieldState(fieldName)
                : _props2$fieldState;

          var fieldValue = fieldState.value || "";
          var fieldPrimaryClass = "wvus-field-" + fieldName;

          return _react2.default.createElement(
            "span",
            {
              className:
                fieldPrimaryClass +
                " " +
                fieldClasses +
                " input-hidden-control-wrapper",
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
      }
    ]);

    return InputHiddenControl;
  })(_react.Component);

  exports.default = InputHiddenControl;
});

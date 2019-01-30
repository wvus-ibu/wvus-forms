(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.index);
    global.textareaControlForm = mod.exports;
  }
})(this, function (exports, _react, _index) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TextAreaFormNoConfig = exports.TextAreaFormTooMuchText = exports.TextAreaForm = undefined;

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var TextAreaForm = function TextAreaForm(props) {
    var getFieldState = props.formMethods.getFieldState;

    var MAX_MESSAGE_CHAR = 255;
    var messageFieldLength = getFieldState("message").value && !!getFieldState("message").value.length ? getFieldState("message").value.length : 0;
    var messageCharacterCount = parseInt(MAX_MESSAGE_CHAR, 10) - parseInt(messageFieldLength, 10);

    return _react2.default.createElement(
      "form",
      { className: "default-textarea-example" },
      _react2.default.createElement(_index.TextAreaControl, {
        fieldName: "message",
        fieldRows: 6,
        fieldPlaceholder: "Type your message here",
        fieldTitle: "Message",
        fieldClasses: "wvus-field-newletter-message",
        labelClasses: "message-label",
        inputClasses: "message-input",
        formMethods: props.formMethods,
        validators: [_index.validateRequired, (0, _index.validateMax)(MAX_MESSAGE_CHAR)],
        characterCount: messageCharacterCount
      })
    );
  };

  var TextAreaFormTooMuchText = function TextAreaFormTooMuchText(props) {
    var getFieldState = props.formMethods.getFieldState;

    var MAX_MESSAGE_CHAR = 255;
    var messageFieldLength = getFieldState("message").value && !!getFieldState("message").value.length ? getFieldState("message").value.length : 0;
    var messageCharacterCount = parseInt(MAX_MESSAGE_CHAR, 10) - parseInt(messageFieldLength, 10);

    return _react2.default.createElement(
      "form",
      null,
      _react2.default.createElement(_index.TextAreaControl, {
        fieldName: "message",
        fieldRows: 6,
        secondInteraction: true,
        isValid: false,
        fieldValue: "Bacon ipsum dolor amet cow kevin pork chop turducken ball tip chuck sausage strip steak tri-tip alcatra. Shankle landjaeger tenderloin short ribs burgdoggen alcatra corned beef salami ground round porchetta turducken. Short loin rump pork belly, ham hock beef ribs ribeye salami corned beef turducken jerky fatback tenderloin porchetta swine pork loin. Brisket chuck short ribs leberkas shoulder ham hock. Frankfurter buffalo turducken short loin jerky drumstick, andouille bacon. Beef ribs leberkas short loin, andouille ball tip ribeye burgdoggen short ribs. Pork loin venison meatloaf hamburger t-bone. Pork loin pork swine t-bone flank brisket. Beef ribs spare ribs salami drumstick landjaeger ball tip kielbasa pork belly pork meatball short ribs brisket short loin boudin jerky. Meatloaf salami prosciutto flank picanha, beef ribs capicola tenderloin pork chop jowl shoulder swine. Chicken jowl salami, leberkas biltong capicola hamburger filet mignon ball tip ham swine pig pork brisket. Fatback pork belly chicken pastrami leberkas, ribeye porchetta doner sirloin biltong cupim.",
        fieldPlaceholder: "Type your message here",
        fieldTitle: "Message",
        fieldClasses: "wvus-field-newletter-message",
        formMethods: props.formMethods,
        validators: [_index.validateRequired, (0, _index.validateMax)(MAX_MESSAGE_CHAR)],
        characterCount: messageCharacterCount
      })
    );
  };

  var TextAreaFormNoConfig = function TextAreaFormNoConfig(props) {
    return _react2.default.createElement(
      "form",
      null,
      _react2.default.createElement(_index.TextAreaControl, {
        fieldName: "message",
        fieldRows: 6,
        fieldPlaceholder: "Type your message here",
        fieldTitle: "Message",
        fieldClasses: "wvus-field-newletter-message",
        formMethods: props.formMethods,
        characterCount: 50
      })
    );
  };

  exports.TextAreaForm = TextAreaForm;
  exports.TextAreaFormTooMuchText = TextAreaFormTooMuchText;
  exports.TextAreaFormNoConfig = TextAreaFormNoConfig;
});
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
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _react, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.TextAreaFormTooMuchText = _exports.TextAreaFormNoConfig = _exports.TextAreaForm = void 0;
  _react = _interopRequireDefault(_react);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  const TextAreaForm = props => {
    const {
      getFieldState
    } = props.formMethods;
    const MAX_MESSAGE_CHAR = 255;
    const messageFieldLength = getFieldState("message").value && !!getFieldState("message").value.length ? getFieldState("message").value.length : 0;
    const messageCharacterCount = parseInt(MAX_MESSAGE_CHAR, 10) - parseInt(messageFieldLength, 10);
    return /*#__PURE__*/_react.default.createElement("form", {
      className: "default-textarea-example"
    }, /*#__PURE__*/_react.default.createElement(_index.TextAreaControl, {
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
    }));
  };
  _exports.TextAreaForm = TextAreaForm;
  const TextAreaFormTooMuchText = props => {
    const {
      getFieldState
    } = props.formMethods;
    const MAX_MESSAGE_CHAR = 255;
    const messageFieldLength = getFieldState("message").value && !!getFieldState("message").value.length ? getFieldState("message").value.length : 0;
    const messageCharacterCount = parseInt(MAX_MESSAGE_CHAR, 10) - parseInt(messageFieldLength, 10);
    return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_index.TextAreaControl, {
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
    }));
  };
  _exports.TextAreaFormTooMuchText = TextAreaFormTooMuchText;
  const TextAreaFormNoConfig = props => {
    return /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement(_index.TextAreaControl, {
      fieldName: "message",
      fieldRows: 6,
      fieldPlaceholder: "Type your message here",
      fieldTitle: "Message",
      fieldClasses: "wvus-field-newletter-message",
      formMethods: props.formMethods,
      characterCount: 50
    }));
  };
  _exports.TextAreaFormNoConfig = TextAreaFormNoConfig;
});
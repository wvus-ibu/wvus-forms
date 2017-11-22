import React from "react";

import {
  WVUSForm,
  TextAreaControl,
  validateRequired,
  validateMax
} from "../../index";

const TextAreaForm = props => {
  const { getFieldState } = props.formMethods;
  const MAX_MESSAGE_CHAR = 255;
  const messageFieldLength =
    getFieldState("message").value && !!getFieldState("message").value.length
      ? getFieldState("message").value.length
      : 0;
  const messageCharacterCount =
    parseInt(MAX_MESSAGE_CHAR, 10) - parseInt(messageFieldLength, 10);

  return (
    <form>
      <TextAreaControl
        fieldName="message"
        fieldRows={6}
        fieldPlaceholder="Type your message here"
        fieldTitle="Message"
        fieldClasses="wvus-field-newletter-message"
        formMethods={props.formMethods}
        validators={[validateRequired, validateMax(MAX_MESSAGE_CHAR)]}
        characterCount={messageCharacterCount}
      />
    </form>
  );
};

const TextAreaFormTooMuchText = props => {
  const { getFieldState } = props.formMethods;
  const MAX_MESSAGE_CHAR = 255;
  const messageFieldLength =
    getFieldState("message").value && !!getFieldState("message").value.length
      ? getFieldState("message").value.length
      : 0;
  const messageCharacterCount =
    parseInt(MAX_MESSAGE_CHAR, 10) - parseInt(messageFieldLength, 10);

  return (
    <form>
      <TextAreaControl
        fieldName="message"
        fieldRows={6}
        secondInteraction={true}
        isValid={false}
        fieldValue="Bacon ipsum dolor amet cow kevin pork chop turducken ball tip chuck sausage strip steak tri-tip alcatra. Shankle landjaeger tenderloin short ribs burgdoggen alcatra corned beef salami ground round porchetta turducken. Short loin rump pork belly, ham hock beef ribs ribeye salami corned beef turducken jerky fatback tenderloin porchetta swine pork loin. Brisket chuck short ribs leberkas shoulder ham hock. Frankfurter buffalo turducken short loin jerky drumstick, andouille bacon. Beef ribs leberkas short loin, andouille ball tip ribeye burgdoggen short ribs. Pork loin venison meatloaf hamburger t-bone. Pork loin pork swine t-bone flank brisket. Beef ribs spare ribs salami drumstick landjaeger ball tip kielbasa pork belly pork meatball short ribs brisket short loin boudin jerky. Meatloaf salami prosciutto flank picanha, beef ribs capicola tenderloin pork chop jowl shoulder swine. Chicken jowl salami, leberkas biltong capicola hamburger filet mignon ball tip ham swine pig pork brisket. Fatback pork belly chicken pastrami leberkas, ribeye porchetta doner sirloin biltong cupim."
        fieldPlaceholder="Type your message here"
        fieldTitle="Message"
        fieldClasses="wvus-field-newletter-message"
        formMethods={props.formMethods}
        validators={[validateRequired, validateMax(MAX_MESSAGE_CHAR)]}
        characterCount={messageCharacterCount}
      />
    </form>
  );
};

export { TextAreaForm, TextAreaFormTooMuchText };

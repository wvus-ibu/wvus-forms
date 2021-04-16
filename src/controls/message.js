import React from "react";

const Message = ({ 
  showError, 
  showSuccess, 
  message, 
  hideMessage,
  successIcon = (<i className="fa fa-check-circle" />), 
  errorIcon = (<i className="fa fa-exclamation-circle" />) }) => {
  const icon = showError ? errorIcon : showSuccess ? successIcon : null;
  return (
    <span>
      {icon}
      {!hideMessage && (
        <span className="message" data-field-validation-message>
          {message}
        </span>
      )}
    </span>
  );
};

export default Message;

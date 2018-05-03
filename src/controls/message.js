import React from "react";

const Message = ({ visible = true, showError, showSuccess, message }) => {
  const icon = showError ? (
    <i className="fa fa-exclamation-circle" />
  ) : showSuccess ? (
    <i className="fa fa-check-circle" />
  ) : null;
  if (visible) {
    return (
      <span>
        {icon}
        <span className="message" data-field-validation-message>
          {message}
        </span>
      </span>
    );
  }
  return null;
};

export default Message;

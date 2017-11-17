import React from 'react';
import Message from './message.js';


const TextAreaControl = ({ fieldId, fieldName, fieldRows, fieldTitle, fieldPlaceholder, fieldState, handleValueChange, handleBlur, classNames, characterCount, showUISuccess, showUIError }) => {
  const validityClass = showUISuccess ? 'has-success ' : showUIError ? 'has-error ': '';
  const requiredStar = fieldState.optional == true ? '' : <sup>*</sup>;
  fieldId = fieldId ? fieldId : fieldName;

  return (
    <div className={'form-group has-icon ' + validityClass}>
      <label className="control-label" htmlFor={fieldName}>{ fieldTitle } { requiredStar }</label>
      <div className="form-control-wrapper">
        <div className="text-area-wrapper">
          <textarea
            id={fieldId}
            value={fieldState.value}
            name={fieldName}
            onBlur={handleBlur}
            onChange={handleValueChange}
            className="form-control"
            rows={fieldRows}
            placeholder={fieldPlaceholder}>
          </textarea>
          { typeof characterCount !== 'undefined' ? <span className="message character-count">{characterCount}</span> : '' }
        </div>
        {  showUIError ? <Message showError={true} showSuccess={false} message={fieldState.errorMessage}></Message> : '' }
        { showUISuccess ? <Message showError={false} showSuccess={true}></Message> : '' }
      </div>
    </div>
  );
};

export default TextAreaControl;

import React from 'react';
import Message from './message.js';


const InputHiddenControl = ({ fieldName, fieldType, fieldState, handleValueChange, classNames }) => {

  return (
    <div className="input-hidden-control-wrapper">
        <input
          id={fieldName}
          name={fieldName}
          value={fieldState.value}
          className={'input-hidden-control ' + classNames}
          type={fieldType}
          >
        </input>
    </div>
  );
};

export default InputHiddenControl;

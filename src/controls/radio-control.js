import React from "react";
import Message from "./message.js";

const RadioControl = ({
  fieldId,
  fieldName,
  fieldTitle,
  fieldState,
  fieldChecked,
  handleValueChange,
  classNames,
  showUISuccess,
  showUIError
}) => {
  fieldId = fieldId ? fieldId : fieldName;
  return (
    <div className="radio-group">
      <label className="radio-inline">
        <input
          id={fieldId}
          value={fieldState.value}
          name={fieldName}
          onChange={handleValueChange}
          type="radio"
          checked={fieldChecked}
        />
        {fieldTitle}
      </label>
    </div>
  );
};

export default RadioControl;

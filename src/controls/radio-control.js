import React from 'react';
import Message from './message.js';


export default ({ fieldId, fieldName, fieldTitle, fieldState, fieldChecked, handleValueChange, classNames, showUISuccess, showUIError }) => {
	fieldId = fieldId ? fieldId : fieldName;
	return (
		<div className="radio-group">
			<label className="radio-inline">
				<input 	
					id={fieldId}
					value={fieldState.value}
					name={fieldName} 
					onChange={handleValueChange}
					type='radio'
					checked={fieldChecked}
					>
				</input>
				{fieldTitle}
			</label>
		</div>
	)
}


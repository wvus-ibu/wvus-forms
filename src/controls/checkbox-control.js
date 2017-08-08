import React from 'react';
import Message from './message.js';


export default ({ fieldId, fieldName, fieldClasses, fieldTitle, fieldChecked, handleValueChange }) => {
	fieldId = fieldId ? fieldId : fieldName;
	return (
		<div className={"checkbox-group " + (fieldClasses ? fieldClasses : '')}>
			<label className="checkbox-inline">
				<input 	
					id={fieldId}
					name={fieldName} 
					onChange={handleValueChange}
					type='checkbox'
					checked={fieldChecked}
					>
				</input>
				{fieldTitle}
			</label>
		</div>
	)
}


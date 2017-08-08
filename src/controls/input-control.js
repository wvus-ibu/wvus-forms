import React from 'react';
import Message from './message.js';


export default ({ fieldId, fieldName, fieldClasses, fieldType, fieldTitle, fieldPlaceholder, fieldState, handleValueChange, handleBlur, classNames, showUISuccess, showUIError }) => {
	const label = !(fieldType === 'hidden') ? <label htmlFor={fieldName}>{ fieldTitle }</label> : null;
	const validityClass = showUISuccess ? 'has-success ' : showUIError ? 'has-error ': '';
	fieldId = fieldId ? fieldId : fieldName;

	return (
		<div className={fieldClasses + ' form-group has-icon ' + validityClass} data-field-container={fieldId} data-field-is-valid={fieldState.isValid}>
			
			{ label }
			<div className="form-control-wrapper">
				<input 	
					id={fieldId}
					value={fieldState.value}
					name={fieldName} 
					onBlur={handleBlur} 
					onChange={handleValueChange}
					className="form-control"
					type={fieldType} 
					placeholder={fieldPlaceholder}>
				</input>
				{  showUIError ? <Message showError={true} showSuccess={false} message={fieldState.errorMessage}></Message> : '' }
				{ showUISuccess ? <Message showError={false} showSuccess={true}></Message> : '' }
			</div>
		</div>
	)
}

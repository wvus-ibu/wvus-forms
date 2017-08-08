import React from 'react';
import Message from './message.js';


export default ({ fieldId, fieldName, fieldRows, fieldTitle, fieldPlaceholder, fieldState, handleValueChange, handleBlur, classNames, characterCount, showUISuccess, showUIError }) => {
	const validityClass = showUISuccess ? 'has-success ' : showUIError ? 'has-error ': '';
	fieldId = fieldId ? fieldId : fieldName;
	
	return (
		<div className={'form-group has-icon ' + validityClass}>
			<label className="control-label" htmlFor={fieldName}>{ fieldTitle }</label>
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
			{/* TESTING ONLY (TO BE REMOVED) <br/>		
			Valid: { String(fieldState.isValid) }	<br/>			
			Second Interaction: { String(fieldState.secondInteraction) } <br/><br/> */}
		</div>
	)
}
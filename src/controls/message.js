import React from 'react';

const Message = ({ showError, showSuccess, message }) => {
	const icon = showError ? 
					<i className="fa fa-exclamation-circle"></i>
					: showSuccess ?
					<i className="fa fa-check-circle"></i>
					:
					null;
	return (
		<span>
			{ icon }
			<span className="message" data-field-validation-message>{ message }</span>
		</span>
	);
	
}
export default Message;
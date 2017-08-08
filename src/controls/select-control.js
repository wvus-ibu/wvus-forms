import React from 'react';
import Message from './message.js';

export default class SelectControl extends React.Component {
	constructor(props) {
		super(props);
		this.props = props;
	}

	render() {
		const { fieldOptions, fieldName, fieldClasses, fieldType, fieldTitle, fieldPlaceholder, fieldState, classNames, handleBlur, handleValueChange, showUISuccess, showUIError, labelClasses } = this.props;
		const options = fieldOptions.map((option, index) => <option key={index} value={option.valueKey}>{option.valueText}</option>);
		const validityClass = showUISuccess ? 'has-success ' : showUIError ? 'has-error ': '';
		const classes = fieldClasses ? fieldClasses : '';
		return (
			<div className={classes + ' form-group has-icon ' + validityClass}>
				<label htmlFor={fieldName} className={labelClasses}>{ fieldTitle }</label>
				<div className="form-control-wrapper">
					<select
						id={fieldName}
						value={fieldState.value} 
						name={fieldName}
						onBlur={handleBlur}
						onChange={handleValueChange}
						className="form-control select-control">
						{ options }
					</select>
					{ showUIError ? <Message showError={true} showSuccess={false} message={fieldState.errorMessage}></Message> : '' }
					{ showUISuccess ? <Message showError={false} showSuccess={true}></Message> : '' }
				</div>
			</div>
		)
	}
}

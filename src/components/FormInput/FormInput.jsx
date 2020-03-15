import React from 'react';

import './FormInput.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
	<div className='form-group'>
		{label ? (
			<label className={`${otherProps.value.length ? 'shrink' : ''}form-label`}>
				{label}
			</label>
		) : null}
		<input
			className='form-input form-control'
			onChange={handleChange}
			{...otherProps}
		/>
	</div>
);

export default FormInput;

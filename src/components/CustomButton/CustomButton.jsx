import React from 'react';

import './CustomButton.styles.scss';

const CustomButton = ({ children, isGoogleSign, ...otherProps }) => (
	<button
		className={`${isGoogleSign ? 'google-sign-in' : ''} custom-button`}
		{...otherProps}
	>
		{children}
	</button>
);
export default CustomButton;

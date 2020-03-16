import React from 'react';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';

import './SignInAndSignUp.styles.scss';

const SignInAndSignUp = () => (
	<div className='sign-in-sign-up'>
		<SignIn></SignIn>
		<SignUp></SignUp>
	</div>
);

export default SignInAndSignUp;

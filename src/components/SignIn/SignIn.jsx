import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput.jsx';
import CustomButton from '../CustomButton/CustomButton';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './SignIn.styles.scss';

export default class SignIn extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	}

	handleSubmit = async event => {
		event.preventDefault();
		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: '', password: '' });
		} catch (error) {
			console.error(error);
		}
	};

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className='sign-in'>
				<h2 className='title'>I already have an account</h2>

				<form className='sign-in-form' onSubmit={this.handleSubmit}>
					<div className='form-group'>
						<FormInput
							name='email'
							type='email'
							handleChange={this.handleChange}
							value={this.state.email}
							label='email'
							required
						/>

						<FormInput
							name='password'
							type='password'
							value={this.state.password}
							handleChange={this.handleChange}
							label='password'
							required
						/>
					</div>
					<div className='buttons'>
						<CustomButton type='submit'>Sign In</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSign>
							Sign In With Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

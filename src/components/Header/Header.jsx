import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../../assets/anna-logo.png';
import { auth } from '../../firebase/firebase.utils';

import './Header.styles.scss';

const Header = ({ currentUser }) => (
	<div className='header'>
		<Link className='logo-container' to='/'>
			<img className='logo' src={logo} alt='asd'></img>
		</Link>
		<div className='options'>
			<Link className='option' to='/shop'>
				SHOP
			</Link>
			<Link className='option' to='/contact'>
				CONTACT
			</Link>
			{currentUser ? (
				<Link className='option' onClick={() => auth.signOut()} to='#'>
					SIGN OUT
				</Link>
			) : (
				<Link className='option' to='/sign-in'>
					SIGN IN
				</Link>
			)}
		</div>
	</div>
);

const mapStateToProps = state => ({
	currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);

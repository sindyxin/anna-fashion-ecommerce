import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/anna-logo.png';

import './Header.styles.scss';

const Header = () => {
	return (
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
			</div>
		</div>
	);
};

export default Header;

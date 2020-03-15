import React from 'react';
import './HomePage.styles.scss';
import { Directory } from '../../components/Directory/Directory.jsx';
// import { Header } from '../../components/Header/script.jsx';

export const HomePage = () => (
	<div className='home-page'>
		{/* <Header></Header> */}
		<Directory></Directory>
	</div>
);

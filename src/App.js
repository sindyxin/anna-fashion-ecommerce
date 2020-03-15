import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage.jsx';
import { ShopPage } from './pages/ShopPage/ShopPage.jsx';
import Header from './components/Header/Header.jsx';
import './App.css';

function App() {
	return (
		<div>
			<Header></Header>
			<Switch>
				<Route exact path='/' component={HomePage}></Route>
				<Route exact path='/shop' component={ShopPage}></Route>
			</Switch>
		</div>
	);
}

export default App;

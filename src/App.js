import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/script.jsx';
import { ShopPage } from './pages/ShopPage/script.jsx';

function App() {
	return (
		<div>
			<Switch>
				<Route exact path='/' component={HomePage}></Route>
				<Route exact path='/shop' component={ShopPage}></Route>
			</Switch>
		</div>
	);
}

export default App;

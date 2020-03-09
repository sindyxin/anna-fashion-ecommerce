import React from 'react';
import { Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage/script.jsx';

const HatsPage = () => (
	<div>
		<h1>Hats Page</h1>
	</div>
);

function App() {
	return (
		<div>
			<Route exact path='/' component={HomePage}></Route>
			<Route exact path='/shop/hats' component={HatsPage}></Route>
		</div>
	);
}

export default App;

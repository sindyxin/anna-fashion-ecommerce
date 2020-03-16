import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			currentUser: null
		};
	}
	unsubscribeFormAuth = null;
	// once call fetch, it won't call fetch again until a component did mount lifecycle methods gets
	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					this.setState({
						currentUser: {
							id: snapShot.id,
							...snapShot.data()
						}
					});

					console.log(this.state);
				});
			}

			this.setState({ currentUser: userAuth });
		});
	}
	componentWillUnmount() {
		this.unsubscribeFormAuth();
	}
	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser}></Header>
				<Switch>
					<Route exact path='/' component={HomePage}></Route>
					<Route exact path='/shop' component={ShopPage}></Route>
					<Route exact path='/sign-in' component={SignInAndSignUp}></Route>
				</Switch>
			</div>
		);
	}
}

export default App;

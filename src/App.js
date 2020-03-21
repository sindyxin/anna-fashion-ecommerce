import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './pages/HomePage/HomePage';
import ShopPage from './pages/ShopPage/ShopPage';
import Header from './components/Header/Header';
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
	unsubscribeFormAuth = null;
	// once call fetch, it won't call fetch again until a component did mount lifecycle methods gets
	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot(snapShot => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					});
				});
			}
			setCurrentUser(userAuth);
		});
	}
	componentWillUnmount() {
		this.unsubscribeFormAuth();
	}
	render() {
		return (
			<div>
				<Header></Header>
				<Switch>
					<Route exact path='/' component={HomePage}></Route>
					<Route exact path='/shop' component={ShopPage}></Route>
					<Route exact path='/sign-in' component={SignInAndSignUp}></Route>
				</Switch>
			</div>
		);
	}
}
const mapDispatcgToProps = dispatch => ({
	setCurrentUser: user => dispatch(setCurrentUser(user))
});
export default connect(null, mapDispatcgToProps)(App);

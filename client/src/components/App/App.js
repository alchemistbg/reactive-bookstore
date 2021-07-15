import React, { useReducer } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

import Header from './../Header/Header';
import Footer from './../Footer/Footer';

import Home from './../Home/Home';
import LoginForm from './../Forms/LoginForm';
import RegisterForm from './../Forms/RegisterForm';
import Cart from './../Cart/Cart';
import Profile from './../User/Profile';
// import BookList from './components/BookList/BookList';
import BookListView from './../BookList/BookListView';
import BookDetails from './../BookDetails/BookDetails';

import About from './../Static/About';
import Contacts from './../Static/Contacts';
import Careers from './../Static/Careers';
import Project from './../Static/Project';
import NotFound from './../Static/NotFound/NotFound';

import { UserProvider } from './../../context/userContext/UserContext';
import { userReducer, initialUserState } from './../../reducers/userReducer';

import { CartProvider } from './../../context/cartContext/CartContext';
import { cartReducer, initialCartState } from './../../reducers/cartReducer';

function App() {
	const useAuthState = useReducer(userReducer, initialUserState);
	const useCartState = useReducer(cartReducer, initialCartState);

	return (
		document.title = "Reactive Bookstore",
		<UserProvider value={useAuthState}>
			<div>
				<div className='site-container'>
					<Router>
						<CartProvider value={useCartState}>
							<Header />
							<main className='site-main'>
								<Switch>
									{/* <Route exact path="/" component={Home} /> */}
									<Route exact path="/" render={(props) => <Home {...props} />} />
									<Route path="/login" component={LoginForm} />
									<Route path="/logout" >
										<Redirect to="/" />
									</Route>
									<Route path="/register" component={RegisterForm} />
									<Route path="/profile" component={Profile} />

									<Route exact path="/books" render={(props) => <BookListView {...props} />} />
									<Route exact path="/books/genres/:id" render={(props) => <BookListView {...props} />} />

									<Route exact path="/books/:id" component={BookDetails} />
									<Route path="/cart" component={Cart} />

									<Route path="/about" component={About} />
									<Route path="/contacts" component={Contacts} />
									<Route path="/careers" component={Careers} />
									<Route path="/project" component={Project} />
									<Route component={NotFound} />
									{/* <Redirect to="/not-found" /> */}
								</Switch>
							</main>
							<Footer />
						</CartProvider>
					</Router>
				</div >
			</div>
		</UserProvider>
	)
}

export default App;
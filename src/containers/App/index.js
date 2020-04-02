import React from 'react';
import { Switch, Route } from 'react-router-dom';

import styles from './app.module.css';

import Header from 'components/Layout/Header';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import Footer from 'components/Layout/Footer';
import Main from 'components/Layout/Main';
import BooksPage from 'containers/BooksPage';


function App() {
	return (
		<div className={styles.app}>
			<Header>
				<Logo />
				<Navigation />
			</Header>
			<Main>
				<Switch>
					<Route exact path="/" component={BooksPage} />
				</Switch>
			</Main>
			<Footer />
		</div>
	);
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import GlobalStyles from 'globalStyles';
import AppWrapper from './AppWrapper';

import Header from 'components/Layout/Header';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import Footer from 'components/Layout/Footer';
import Main from 'components/Layout/Main';
import BooksPage from 'containers/BooksPage';

function App() {
	return (
		<AppWrapper>
			<GlobalStyles />
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
		</AppWrapper>
	);
}

export default App;

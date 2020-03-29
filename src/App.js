import React from 'react';
import logo from './logo.svg';
import 'stylesheets/styles.scss';
import styles from './App.module.css';
import { BrowserRouter as Router } from 'react-router-dom';

import MainLayout from 'containers/MainLayout';

function App() {
	return (
		<div className={styles.App}>
			<MainLayout />
		</div>
	);
}

export default App;

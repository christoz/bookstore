import React from 'react';
import { Link } from 'react-router-dom';

import styles from './logo.module.css';
import logo from 'images/logo.svg';

const Logo = props => {
	return (
		<div className={styles.logo}>
			<img src={logo} alt="Book store" />
			<Link to="/">Book Store</Link>
		</div>
	)
}

export default Logo;

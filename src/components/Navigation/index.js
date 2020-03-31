import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './navigation.module.scss';

const Navigation = () => {
	return (
		<nav className={styles.navigation}>
			<ul className="menu menu--horizontal">
				<li className="menu__item">
					<NavLink to="/add" activeClassName="active">
						Add
					</NavLink>
				</li>
				<li className="menu__item">
					<NavLink to="/search" activeClassName="active">
						Search
					</NavLink>
				</li>
			</ul>

		</nav>
	)
}

export default Navigation;

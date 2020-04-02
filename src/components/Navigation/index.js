import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from 'components/Elements/Menu.js';

const Navigation = () => {
	return (
		<nav>
			<Menu justify="flex-end">
				<Menu.Item>
					<NavLink to="/add" activeClassName="active">
						Add
						</NavLink>
				</Menu.Item>
				<Menu.Item>
					<NavLink to="/search" activeClassName="active">
						Search
						</NavLink>
				</Menu.Item>
			</Menu>
		</nav>
	);
};

export default Navigation;

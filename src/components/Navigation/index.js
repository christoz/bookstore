import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from 'components/Elements/Menu.js';

const Navigation = () => {
	return (
		<nav>
			<Menu justify="flex-end">
				<Menu.Item>
					<NavLink to="/add" activeClassName="active">
						Add book
						</NavLink>
				</Menu.Item>
			</Menu>
		</nav>
	);
};

export default Navigation;

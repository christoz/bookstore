import React from 'react';
import { NavLink } from 'react-router-dom';
import Menu from 'components/Elements/Menu.js';
import NavWrapper from './NavWrapper';

const Navigation = () => {
	return (
		<NavWrapper>
			<Menu justify="flex-end">
				<Menu.Item>
					<NavLink to="/add" activeClassName="active" className="button">
						Add book
					</NavLink>
				</Menu.Item>
			</Menu>
		</NavWrapper>
	);
};

export default Navigation;

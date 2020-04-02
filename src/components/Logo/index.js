import React from 'react';
import { Link } from 'react-router-dom';

import LogoWrapper from './LogoWrapper';
import logo from 'images/logo.svg';

const Logo = props => {
	return (
		<LogoWrapper>
			<img src={logo} alt="Book store" />
			<Link to="/">Book Store</Link>
		</LogoWrapper>
	);
};


export default Logo;

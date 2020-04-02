import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from 'images/logo.svg';

const LogoWrapper = styled.div`
	padding: 0 2rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	a {
		color: inherit;
		font-size: 1.8rem;
		margin-left: 1rem;
		text-decoration: none;
	}
`;

const Logo = props => {
	return (
		<LogoWrapper>
			<img src={logo} alt="Book store" />
			<Link to="/">Book Store</Link>
		</LogoWrapper>
	);
};


export default Logo;

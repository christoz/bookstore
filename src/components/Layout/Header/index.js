import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Item } from 'react-flex-ready';

const Header = props => {
	return (
		<Flex col={2} as="header">
			{
				React.Children.map(props.children, (child, idx) => {
					return (
						<Item key={idx} col={6} gap={1}>
							{child}
						</Item>
					);
				})
			}
		</Flex >
	);
};

Header.propTypes = {
	children: PropTypes.node
};

export default Header;

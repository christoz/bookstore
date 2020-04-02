import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Item } from 'react-flex-ready';

import HeaderWrapper from './HeaderWrapper';

const Header = props => {
	return (
		<HeaderWrapper>
			<Flex col={2}>
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
		</HeaderWrapper>
	);
};

Header.propTypes = {
	children: PropTypes.node
};

export default Header;

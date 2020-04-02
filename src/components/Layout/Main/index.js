import React from 'react';
import PropTypes from 'prop-types';

import MainWrapper from './MainWrapper';

const Main = props => {
	return (
		<MainWrapper>
			{props.children}
		</MainWrapper>
	);
};

Main.propTypes = {
	children: PropTypes.node.isRequired
};

export default Main;

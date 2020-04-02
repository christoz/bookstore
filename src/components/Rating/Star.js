import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledStar = styled.span`
	display: inline-block;
	color: ${props => props.selected ? '#fc6' : '#ccc'};
`;

const Star = ({ onSelect, selected }) => {
	return (
		<StyledStar
			role="img"
			aria-label="star"
			selected={selected}
			onClick={onSelect}
		>
			★
		</StyledStar>
	)
};

Star.propTypes = {
	onSelect: PropTypes.func,
	selected: PropTypes.bool
}

export default Star;

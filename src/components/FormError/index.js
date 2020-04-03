import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ErrorWrapper = styled.div`
	color: ${props => props.theme.colors.errorColor};
	font-size: 1.2rem;
`;

const FormError = ({ visible, children }) => {
	if (!visible)
		return null;

	return (
		<ErrorWrapper>
			{children}
		</ErrorWrapper>
	)
}

FormError.propTypes = {
	visible: PropTypes.bool,
	children: PropTypes.node
}

export default FormError;

import styled from 'styled-components';

const HeaderWrapper = styled.header`
	min-height: 8rem;
	display: flex;
	align-items: center;
	background-color: #fff;
	min-height: 8rem;
	padding: 0 ${props => props.theme.grid.gutterWidth};

	> div {
		width: 100%;
	}
`;

export default HeaderWrapper;

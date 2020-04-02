import styled from 'styled-components';

const MainWrapper = styled.main`
	flex: 1 0 auto;
	min-height: auto;
	width: 100%;
	padding: 0 ${props => props.theme.grid.gutterWidth};

	> div {
		height: 100%;
	}
`;

export default MainWrapper;


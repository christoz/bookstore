import styled from 'styled-components';

const FooterWrapper = styled.footer`
	display: flex;
	width: 100%;
	min-height: 6rem;
	margin: 0 auto;
	padding: 0 ${props => props.theme.grid.gutterWidth};
	background-color: #fff;

`;

export default FooterWrapper;




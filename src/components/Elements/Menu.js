import styled from 'styled-components';

const Menu = styled.ul`
	display: flex;
	list-style-type: none;
	margin: 0;
	padding: 0;
	${props => props.vertical && 'flex-direction: column'};
	${props => props.justify && `justify-content: ${props.justify}`};
`;

const Item = styled.li`
	margin: 0;
	padding: 0 10px;
	font-size: 1.6rem;

	a {
		text-decoration: none;
	}
`;

Menu.Item = Item;

export default Menu;

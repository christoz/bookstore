import styled from 'styled-components';

const Card = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	border-radius: .5rem;
	box-shadow: ${props => props.theme.boxShadow};
	overflow: hidden;

	img {
		object-fit: cover;
		width: 100%;
		height: 50%;
	}
`;

const Asset = styled.div`
	align-items: center;
	background-color: ${props => props.bgColor ? props.bgColor : '#fff'};
	display: flex;
	height: 20rem;
	justify-content: center;
`;

const Details = styled.div`
	padding: 27px 35px 35px;
	background-color: #fff;
	flex: 1;
`;

const Title = styled.h4`
	margin: 0;
	font-size: 1.8rem;
	color: #393c45;
`

const Author = styled.div`
	font-size: 1.6rem;
	color: #b1b1b3;
	padding: 2px 0 20px 0;
`;

const Options = styled.div`
	margin-bottom: 10px;
	strong {
		font-weight: 700;
		color: #393c45;
		font-size: 1.4rem;
		display: block;
	}

	span:not([role="img"]) {
		color: #969699;
		font-size: 1.4rem;
		display: block;
		margin-bottom: 8px;
		text-transform: capitalize;
	}
`;

Card.Details = Details;
Card.Asset = Asset;
Card.Title = Title;
Card.Author = Author;
Card.Options = Options;

export default Card;

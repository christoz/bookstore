import styled from 'styled-components';

const Product = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
	border-radius: .4rem;
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

	h4 {
		margin: 0;
		font-size: 2.2rem;
		color: #393c45;
	}
`;

Product.Details = Details;
Product.Asset = Asset;

export default Product;

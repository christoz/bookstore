import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import randomColor from 'randomcolor';

import Rating from 'components/Rating';
import Card from './Card';
import { rateBook } from 'actions/books';

/**
 * Product list item
 * @param {Object} props
 */
const Product = props => {
	const dispatch = useDispatch();
	const colorOptions = { hue: 'purple', luminosity: 'light' };
	// We memoize color since we want to run once
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const color = useMemo(() => randomColor(colorOptions), []);

	function rateProduct(rate) {
		dispatch(rateBook(props.isbn, rate))
	}

	return (
		<Card>
			<Card.Asset bgColor={color}></Card.Asset>
			<Card.Details>
				<Card.Title>
					{props.title}
				</Card.Title>
				<Card.Author>{props.author}</Card.Author>
				<Card.Options>
					<strong>CATEGORY</strong>
					<span>{props.category}</span>
				</Card.Options>
				<Card.Options>
					<strong>Rate it!</strong>
					<Rating stars={5} rating={props.rating} onRate={rateProduct} />
				</Card.Options>
			</Card.Details>
		</Card >
	);
};

Product.propTypes = {
	img: PropTypes.any,
	title: PropTypes.string,
	id: PropTypes.number,
	author: PropTypes.string,
	rating: PropTypes.number
};

export default Product;


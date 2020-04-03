import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import randomColor from 'randomcolor';

import Rating from 'components/Rating';
import ProductWrapper from './ProductWrapper';
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
		<ProductWrapper>
			<ProductWrapper.Asset bgColor={color}></ProductWrapper.Asset>
			<ProductWrapper.Details>
				<h4>
					{props.title}
				</h4>
				<div>{props.author}</div>
				<div>
					<Rating stars={5} rating={props.rating} onRate={rateProduct} />
				</div>
			</ProductWrapper.Details>
		</ProductWrapper>
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


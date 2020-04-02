import React from 'react';
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';

import ProductWrapper from './Product';

const Product = props => {
	const color = randomColor({ hue: 'purple', luminosity: 'light' });
	return (
		<ProductWrapper>
			<ProductWrapper.Asset bgColor={color}></ProductWrapper.Asset>
			<ProductWrapper.Details>
				<h4>
					{props.title}
				</h4>
				<span>{props.author}</span>
			</ProductWrapper.Details>
		</ProductWrapper>
	);
};

Product.propTypes = {
	img: PropTypes.any,
	title: PropTypes.string,
	id: PropTypes.number,
	author: PropTypes.string
};

export default Product;


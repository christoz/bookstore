import React from 'react';
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';

import Rating from 'components/Rating';
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
				<div>{props.author}</div>
				<div>
					<Rating stars={5} />
				</div>
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


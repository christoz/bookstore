import React from 'react';
import PropTypes from 'prop-types';

import styles from './product.module.scss';

const Product = props => {
	const imgSrc = (index) => {
		return props.img || `http://lorempixel.com/300/360/abstract/${index}`;
	};

	return (
		<div className={styles.product}>
			<img src={imgSrc(props.id)} alt={props.title} className={styles.productImg} />
			<h4 className={styles.productTitle}>
				{props.title}
			</h4>
		</div>
	);
};

Product.propTypes = {
	img: PropTypes.any,
	title: PropTypes.string,
	id: PropTypes.number
};

export default Product;


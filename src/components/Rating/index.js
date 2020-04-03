import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import Star from './Star';
import Wrapper from './RatingWrapper';

const Rating = ({ onRate, rating, stars }) => {
	const [rateValue, setRateValue] = useState(rating);

	const onSetRate = useCallback(function (value) {
		setRateValue(value)
		// Optional call to lift up rate to parent component
		if (onRate) {
			onRate(value)
		}
	}, [onRate]);

	return (
		<Wrapper>
			{
				[...Array(stars)].map((_, idx) => {
					return (
						<Star
							key={idx}
							selected={idx < rateValue}
							onSelect={() => onSetRate(idx + 1)}
						/>
					)
				})}
		</Wrapper>
	);
};

Rating.propTypes = {
	stars: PropTypes.number,
	rating: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
	onRate: PropTypes.func
};

export default Rating;

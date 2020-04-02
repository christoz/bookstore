import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Star from './Star';
import Wrapper from './RatingWrapper';

const Rating = props => {
	const [rateValue, setRateValue] = useState(0);

	return (
		<Wrapper>
			{
				[...Array(props.stars)].map((_, idx) => {
					return (
						<Star
							key={idx}
							selected={idx < rateValue}
							onSelect={() => setRateValue(idx + 1)}
						/>
					)
				})}
		</Wrapper>
	);
};

Rating.propTypes = {
	stars: PropTypes.number
};

export default Rating;

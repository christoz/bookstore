import React from 'react';
import ReactDom from 'react-dom';
import Rating from './index';

describe('<Rating /> spec', () => {
	it('renders without problems', () => {
		const div = document.createElement('div');
		ReactDom.render(<Rating />, div);
	});

	it('should render 5 stars', () => {
		const div = document.createElement('div');
		ReactDom.render(<Rating stars={5} />, div);

		const numOfStars = div.querySelectorAll('[role="img"]').length;
		expect(numOfStars).toBe(5);
	});
});

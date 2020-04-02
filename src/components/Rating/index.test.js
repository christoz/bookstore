import React from 'react';
import ReactDom from 'react-dom';
import {
	fireEvent,
	render
} from "@testing-library/react";


import Rating from './index';

describe('<Rating /> spec', () => {
	it('should render without crashing', () => {
		const div = document.createElement('div');
		ReactDom.render(<Rating />, div);
	});

	it('should render 5 stars', () => {
		const div = document.createElement('div');
		ReactDom.render(<Rating stars={5} />, div);

		const numOfStars = div.querySelectorAll('[role="img"]').length;
		expect(numOfStars).toBe(5);
	});

	it('should select 3 stars', () => {
		const { container } = render(<Rating stars={5} />);
		const stars = container.querySelectorAll('[role="img"]');

		fireEvent.click(stars[2])
		/**
		 * Asserts that first three stars are selected
		 */
		const selectedAssertion = Array.from(stars)
			.slice(0, 3)
			.filter(star => star.dataset.selected === 'true')
			.length === 3;
		/**
		 * Asserts that last two stars are not selected
		 */
		const unselectedAssertion = Array.from(stars)
			.slice(-2)
			.filter(star => star.dataset.selected === 'false')
			.length === 2;

		expect(selectedAssertion && unselectedAssertion).toBe(true);

	});
});

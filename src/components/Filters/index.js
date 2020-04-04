import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from 'actions/booksFilter';
import { getSelectedFilter } from 'reducers/root';
import FiltersWrapper from './FiltersWrapper';

const Filters = (props) => {
	const dispatch = useDispatch();
	const selectedFilter = useSelector(state => getSelectedFilter(state));

	function pickFilter(filter) {
		dispatch(setFilter(filter));
	}

	return (
		<>
			<FiltersWrapper>
				<label>
					<input type="radio" name="none" checked={selectedFilter === 'SHOW_ALL'} onChange={() => pickFilter(null)} />
					<span>No category</span>
				</label>
				<label>
					<input type="radio" name="beginner" checked={selectedFilter === 'beginner'} onChange={() => pickFilter('beginner')} />
					<span>Beginner</span>
				</label>
				<label>
					<input type="radio" name="intermediate" checked={selectedFilter === 'intermediate'} onChange={() => pickFilter('intermediate')} />
					<span>Intermediate</span>
				</label>
				<label>
					<input type="radio" name="expert" checked={selectedFilter === 'expert'} onChange={() => pickFilter('expert')} />
					<span>Expert</span>
				</label>
			</FiltersWrapper>
			<div style={{ textAlign: 'center' }}>
				<i>Categories are hard copied in books.json</i>
			</div>
		</>
	)
}

export default Filters;

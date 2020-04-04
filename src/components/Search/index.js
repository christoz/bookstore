import React from 'react';
import { useDispatch } from 'react-redux';

import SearchForm from './SearchForm'
import useForm from 'hooks/useForm';
import { setQuery } from 'actions/booksFilter';

const Search = props => {
	const dispatch = useDispatch();

	const {
		values,
		handleSubmit,
		handleChange
	} = useForm({
		initialValues: { searchTerm: '' },
		onSubmit: doSearch
	});

	function doSearch() {
		dispatch(setQuery(values.searchTerm));
	}

	return (
		<SearchForm onSubmit={handleSubmit}>
			<input
				type="text"
				name="searchTerm"
				value={values.searchTerm}
				onChange={handleChange}
				placeholder="Type something and click search or press enter"
			/>
			<button
				className="button button--primary"
				type="submit"
			>
				Search
			</button>
		</SearchForm>
	)
}

export default Search;

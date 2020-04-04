import React from 'react';
import { useSelector } from 'react-redux';
import { Flex, Item } from 'react-flex-ready';
import { Route, useHistory } from 'react-router-dom';

import { getVisibleBooks, getSelectedFilter, getBookQuery } from 'reducers/root';
import { getBooksByQuery } from './selectors';

import BooksPageWrapper from './BooksPageWrapper';
import { H3 } from 'components/Elements/Heading';
import Product from 'components/Product';
import Modal from 'components/Modal';
import CreateBookForm from 'containers/CreateBookForm';
import Search from 'components/Search';
import Filters from 'components/Filters';

const BooksPage = props => {
	const history = useHistory();

	const selectedFilter = useSelector(state => getSelectedFilter(state));
	const selectedBooks = useSelector(state => getVisibleBooks(state, selectedFilter));
	const selectedQuery = useSelector(state => getBookQuery(state));

	const resultedBooks = getBooksByQuery(selectedBooks, selectedQuery);

	return (
		<BooksPageWrapper>
			<Search />
			<Filters />
			<H3>Books list</H3>
			<Flex style={{ justifyContent: 'flex-start' }}>
				{
					resultedBooks.map((item, index) => (
						<Item
							key={index}
							col={3}
							marginBottom={20}
							stretch
							gap={1}
							style={{ padding: '0 10px' }}
						>
							<Product {...item} id={index} />
						</Item>
					))
				}
			</Flex>
			<Route
				path="/add"
			>
				<Modal
					visible={true}
					onHide={() => history.push("/")}
				>
					<CreateBookForm />
				</Modal>
			</Route>
		</BooksPageWrapper>
	);
};

export default BooksPage;


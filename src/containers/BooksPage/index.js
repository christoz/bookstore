import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Flex, Item } from 'react-flex-ready';
import { Route, Link, useHistory } from 'react-router-dom';

import { hideDialog } from 'actions/dialog';

import BooksPageWrapper from './BooksPageWrapper';
import { H3 } from 'components/Elements/Heading';
import Product from 'components/Product';
import Modal from 'components/Modal';
import CreateBookForm from 'containers/CreateBookForm';

const BooksPage = props => {
	const dispatch = useDispatch();
	const history = useHistory();
	const books = useSelector(state => state.books.list);
	const productFormVisible = useSelector(state => state.dialog.visible);

	return (
		<BooksPageWrapper>
			<H3>Books list</H3>
			<Flex>
				{
					books.map((item, index) => (
						<Item
							key={index}
							col={3}
							marginBottom={20}
							stretch
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


import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Flex, Item } from 'react-flex-ready';

import BooksPageWrapper from './BooksPageWrapper';
import { H3 } from 'components/Elements/Heading';
import Product from 'components/Product';

const BooksPage = props => {
	const books = useSelector(state => state.books.list);

	return (
		<BooksPageWrapper>
			<H3>Books list</H3>
			<Flex>
				{
					books.map((item, index) => (
						<Item key={index} col={3} marginBottom={20}>
							<Product {...item} id={index} />
						</Item>
					))
				}
			</Flex>
		</BooksPageWrapper>
	);
};

export default BooksPage;


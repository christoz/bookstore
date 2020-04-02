import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from './booksPage.module.scss';
import Product from 'components/Product';

const BooksPage = () => {
	const books = useSelector(state => state.books.list);

	return (
		<div className={styles.booksPage}>
			<h3 className="title">Books list</h3>
			<div className="row">
				{
					books.map((item, index) => (
						<div className="column" key={index} >
							<Product {...item} id={index} />
						</div>
					))
				}
			</div>
		</div>
	);
};

export default BooksPage;


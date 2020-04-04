import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useForm from 'hooks/useForm';
import FormError from 'components/FormError';
import bookSchema from './bookSchema';
import { getVisibleBooks } from 'reducers/root';
import { addBook } from 'actions/books';
import { getCategories } from './selectors';

const CreateBookForm = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const books = useSelector(state => getVisibleBooks(state, 'SHOW_ALL'))

	const {
		values,
		handleChange,
		handleSubmit,
		handleBlur,
		errors,
		valid,
		touched
	} = useForm({
		initialValues: {
			title: '',
			description: '',
			author: '',
			publisher: '',
			published: '',
			pages: '',
			isbn: ''
		},
		onSubmit: () => dispatch(addBook(values)).then(() => history.push('/')),
		validationSchema: bookSchema
	});

	function renderOptions() {
		return getCategories(books).map((cat, index) => {
			return (
				<option key={index} value={cat.value}>{cat.label}</option>
			);
		})
	}

	return (
		<form onSubmit={handleSubmit}>
			<div className="form-group">
				<label htmlFor="title">Title</label>
				<input name="title" type="text" value={values.title} onChange={handleChange} onBlur={handleBlur} />
				<FormError visible={touched}>{errors.title}</FormError>
			</div>
			<div className="form-group">
				<label htmlFor="description">Description</label>
				<input name="description" type="text" value={values.description} onChange={handleChange} onBlur={handleBlur} />
				<FormError visible={touched}>{errors.description}</FormError>
			</div>
			<div className="form-group">
				<label htmlFor="author">Author</label>
				<input name="author" type="text" value={values.author} onChange={handleChange} onBlur={handleBlur} />
				<FormError visible={touched}>{errors.author}</FormError>
			</div>
			<div className="form-group">
				<label htmlFor="publisher">Publisher</label>
				<input name="publisher" type="text" value={values.publisher} onChange={handleChange} onBlur={handleBlur} />
				<FormError visible={touched}>{errors.publisher}</FormError>
			</div>
			<div className="form-group">
				<label htmlFor="category">Category</label>
				<select name="category" onChange={handleChange} onBlur={handleBlur} >
					{renderOptions()}
				</select>
				<FormError visible={touched}>{errors.category}</FormError>
			</div>
			<div className="form-group">
				<label htmlFor="published">Published (<i>year</i>)</label>
				<input name="published" type="text" value={values.published} onChange={handleChange} onBlur={handleBlur} />
				<FormError visible={touched}>{errors.published}</FormError>
			</div>
			<div className="form-group">
				<label htmlFor="pages">Pages</label>
				<input name="pages" type="text" value={values.pages} onChange={handleChange} onBlur={handleBlur} />
				<FormError visible={touched}>{errors.pages}</FormError>
			</div>
			<div className="form-group">
				<label htmlFor="isbn">ISBN-10 / ISBN-13</label>
				<input name="isbn" type="text" value={values.isbn} onChange={handleChange} onBlur={handleBlur} />
				<FormError visible={touched}>{errors.isbn}</FormError>
			</div>
			<div className="form-group" style={{ textAlign: 'right' }}>
				<button type="submit" disabled={!valid} className="button button--primary">Save</button>
			</div>
		</form>
	);
}

export default CreateBookForm;


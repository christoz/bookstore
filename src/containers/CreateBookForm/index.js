import React from 'react';
import useForm from 'hooks/useForm';

import FormError from 'components/FormError';
import bookSchema from './bookSchema'

const CreateBookForm = () => {

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
			categories: '',
			authorName: '',
			publisher: '',
			year: '',
			pageNumbers: ''
		},
		onSubmit: () => console.log('submit'),
		validationSchema: bookSchema
	});

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
				<label htmlFor="categories">Categories</label>
				<input name="categories" type="text" value={values.categories} onChange={handleChange} onBlur={handleBlur} />
				<FormError visible={touched}>{errors.categories}</FormError>
			</div>
			<div className="form-group">
				<label htmlFor="authorName">Author</label>
				<input name="authorName" type="text" value={values.authorName} onChange={handleChange} onBlur={handleBlur} />
				<FormError visible={touched}>{errors.authorName}</FormError>
			</div>
			<div className="form-group">
				<label htmlFor="publisher">Publisher</label>
				<input name="publisher" type="text" value={values.publisher} onChange={handleChange} onBlur={handleBlur} />
				<FormError visible={touched}>{errors.publisher}</FormError>
			</div>
			<div className="form-group">
				<label htmlFor="year">Year</label>
				<input name="year" type="text" value={values.year} onChange={handleChange} onBlur={handleBlur} />
				<FormError visible={touched}>{errors.year}</FormError>
			</div>
			<div className="form-group">
				<label htmlFor="pageNumbers">Page numbers</label>
				<input name="pageNumbers" type="text" value={values.pageNumbers} onChange={handleChange} onBlur={handleBlur} />
				<FormError visible={touched}>{errors.pageNumbers}</FormError>
			</div>
			<div className="form-group">
				<label htmlFor="ISBN">ISBN-10 / ISBN-13</label>
				<input name="ISBN" type="text" value={values.ISBN} onChange={handleChange} onBlur={handleBlur} />
				<FormError visible={touched}>{errors.ISBN}</FormError>
			</div>
			<div className="form-group">
				<button type="submit" disabled={!valid} className="button button--primary" onChange={handleChange} onBlur={handleBlur}>Save</button>
			</div>
		</form>
	);
}

export default CreateBookForm;


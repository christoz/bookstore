import * as yup from 'yup';

const bookSchema = yup.object().shape({
	title: yup
		.string()
		.matches(/^[a-zA-Z\@"#&*!]+$/, 'Field can contain letters or any of @, #, &, *, !, special characters.')
		.min(10, 'Too Short!')
		.max(120, 'Too Long!')
		.required('Required!'),
	description: yup
		.string()
		.matches(/^[A-Z]/, 'First character must be uppercase')
		.max(512)
		.required('Required!'),
	categories: yup
		.string()
		.required('Required!'),
	authorName: yup
		.string()
		.required('Required!'),
	publisher: yup
		.string()
		.min(5, 'Too Short!')
		.max(60, 'Too Long!')
		.required('Required!'),
	year: yup
		.string()
		.test('is-year', 'Enter a valid year', (value) => {
			// We assume that max year is current year
			if (value > new Date().getFullYear()) {
				return false;
			}

			return /^[0-9]{1,4}$/.test(value)
		})
		.required('Required!'),
	pageNumbers: yup
		.string()
		.matches(/^\d+$/, 'Field accepts only digits')
		.test('is-digit', 'Field must contain only digits', (value) => /^\d+$/.test(value))
		.test('is-value', 'Field value must be between 10 and 9999', (value) => value >= 10 && value <= 9999)
		.required('Required!'),
	// TODO: Create ISBN validator task
	ISBN: yup
		.string()
		.min(10, 'Too Short!')
		.max(13, 'Too Long!')
		.required('Required!')
});


export default bookSchema;

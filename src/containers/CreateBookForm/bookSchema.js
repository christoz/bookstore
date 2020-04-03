import * as yup from 'yup';

const bookSchema = yup.object().shape({
	title: yup
		.string()
		.required('Required!')
		.matches(/^[a-zA-Z\@"#&*!]+$/, 'Field can contain letters or any of @, #, &, *, !, special characters.')
		.min(10, 'Too Short!')
		.max(120, 'Too Long!'),
	description: yup
		.string()
		.required('Required!')
		.matches(/^[A-Z]/, 'First character must be uppercase')
		.max(512),
	categories: yup
		.string()
		.required('Required!'),
	authorName: yup
		.string()
		.required('Required!'),
	publisher: yup
		.string()
		.required('Required!')
		.min(5, 'Too Short!')
		.max(60, 'Too Long!'),
	year: yup
		.string()
		.required('Required!')
		.test('is-year', 'Enter a valid year', (value) => {
			// We assume that max year is current year
			if (value > new Date().getFullYear()) {
				return false;
			}

			return /^[0-9]{1,4}$/.test(value)
		}),
	pageNumbers: yup
		.string()
		.required('Required!')
		.matches(/^\d+$/, 'Field accepts only digits')
		.test('is-digit', 'Field must contain only digits', (value) => /^\d+$/.test(value))
		.test('is-value', 'Field value must be between 10 and 9999', (value) => value >= 10 && value <= 9999),
	// TODO: Create ISBN validator task
});


export default bookSchema;

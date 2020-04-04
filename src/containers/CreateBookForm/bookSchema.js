import * as yup from 'yup';

const bookSchema = yup.object().shape({
	title: yup
		.string()
		.required('Required!')
		.matches(/^[a-zA-Z\@"#&*! ]+$/, 'Field can contain letters or any of @, #, &, *, !, \' \' special characters.')
		.min(10, 'Too Short!')
		.max(120, 'Too Long!'),
	description: yup
		.string()
		.required('Required!')
		.matches(/^[A-Z]/, 'First character must be uppercase')
		.max(512),
	author: yup
		.string()
		.required('Required!'),
	publisher: yup
		.string()
		.required('Required!')
		.min(5, 'Too Short!')
		.max(60, 'Too Long!'),
	published: yup
		.string()
		.required('Required!')
		.test('is-year', 'Enter a valid year', (value) => {
			// We assume that max year is current year
			if (value > new Date().getFullYear()) {
				return false;
			}

			return /^[0-9]{1,4}$/.test(value)
		}),
	pages: yup
		.string()
		.required('Required!')
		.matches(/^\d+$/, 'Field accepts only digits')
		.test('is-digit', 'Field must contain only digits', (value) => /^\d+$/.test(value))
		.test('is-value', 'Field value must be between 10 and 9999', (value) => value >= 10 && value <= 9999),
	isbn: yup
		.string()
		.required('Required!')
		.test('is-isbn', 'Please enter a number with length between 10 and 13', (value) => {
			// TODO: need more time for research,
			// We just test for digits only and length between 10 and 13 just to present something meaningful, sort of.
			return /^[0-9]{10,13}$/.test(value)
		})
});


export default bookSchema;

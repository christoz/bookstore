import { useState, useEffect } from 'react';
import * as yup from 'yup'

/**
 * Form hook that handles field updates, performs submission and error reporting
 *
 * @param {Object}, initialValues
 * @param {Function}, onSubmit
 * @param {Function}, onValidate,
 * @param {Object}, validationSchema - Yup.js schema
 *
 * @returns {Object}
 */
const useForm = (props) => {
	const { initialValues, onSubmit, validationSchema, onValidate } = props;
	const [values, setValues] = useState(initialValues);
	const [errors, setErrors] = useState({});
	const [valid, setValid] = useState(false);
	const [touched, setTouched] = useState(false);

	function handleSubmit(event) {
		event.preventDefault();
		onSubmit();
	}

	function handleChange(event) {
		event.persist();
		const { target } = event;
		const { name } = target;

		if (validationSchema) {
			validateField(name, target.value);
			setValid(formIsValid());
		}

		setValues(values => (
			{
				...values,
				[event.target.name]: event.target.value
			}
		));

		if (!touched) {
			setTouched(true);
		}
	}

	function handleBlur(event) {
		const { target } = event;
		const { name, value } = target;

		validateField(name, value);
		setTouched(true);
	}

	function validateField(name, value) {
		if (!validationSchema.fields[name])
			return;

		yup
			.reach(validationSchema, name)
			.validate(value)
			.then(_ => {
				const { [name]: value, ...restErrors } = errors;
				setErrors((prevErrors) => ({ ...restErrors }))
			})
			.catch(e => {
				// We use a callback because closure keeps the initial "errors" reference.
				setErrors((prevErrors) => ({ ...prevErrors, [name]: e.errors }))
			});
	}
	/**
	 * This function is used to check if we have at least one error reported
	 */
	const formIsValid = () => Object.keys(errors).length === 0;

	/**
	 * Side effects for custom validation,
	 * custom validator must return an object
	 */
	useEffect(() => {
		if (onValidate) {
			const errors = onValidate(values);

			return setErrors(errors);
		}
	}, [errors, onValidate, values]);

	// We break the deps rule here to validate form also initially, which is not great
	useEffect(() => {
		Object.keys(initialValues).forEach((name) => validateField(name, initialValues[name]))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return {
		handleChange,
		handleSubmit,
		values,
		errors,
		valid,
		touched,
		handleBlur
	}
};

export default useForm;

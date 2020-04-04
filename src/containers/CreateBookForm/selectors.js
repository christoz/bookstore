/**
 * Returns all unique values of an array, for on a given comparison function.

 * @param {Array} arr
 * @param {Function} fn
 */
const uniqueElementsBy = (arr, fn) =>
	arr.reduce((acc, v) => {
		if (!acc.some(x => fn(v, x))) acc.push(v);
		return acc;
	}, []);

/**
 * Extracts the categories of the book
 * @param {Array} books
 */
export const getCategories = (books) => {
	const categories = books.map((book, index) => {
		return {
			label: book.category,
			value: book.category.toLowerCase()
		}
	})

	return uniqueElementsBy(categories, (a, b) => a.value === b.value)

}

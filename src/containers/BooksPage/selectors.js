/**
 * Selector function of books page that filters incoming array of books
 * @param {Array} books
 * @param {String} query
 *
 * @returns {Array}
 */
export const getBooksByQuery = (books, query) => {
	if (!query || query.length === 0) {
		return books;
	}

	// Case insesitive queries on book object attributes with type string
	return books.filter(b => {
		const lcQuey = query.toLowerCase();
		return Object.keys(b).some(key => {
			if (typeof b[key] !== 'string') {
				return false;
			}

			return (
				b[key]
					.toLowerCase()
					.includes(lcQuey)
			);
		})
	});
};

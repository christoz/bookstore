import styled from 'styled-components';

const SearchForm = styled.form`
	margin: 0 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 4rem auto 2rem;
	max-width: 500px;
	align-self: center;

	.button {
		height: 5rem;
		margin: 0;
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
		padding-left: 20px;
		padding-right: 20px;

		&:focus {
			outline: 0;
		}
	}

	[type="text"] {
		border-top-right-radius: 0;
		border-bottom-right-radius: 0;
		border-right: 0;
		border-color: white;

		&:focus {
			outline: 0;
		}
	}
`;

export default SearchForm;

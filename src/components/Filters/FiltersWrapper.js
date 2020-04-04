import styled from 'styled-components';

const FiltersWrapper = styled.form`
	display: flex;
	align-items: center;
	justify-content: center;

	label {
		display flex;
		align-items: center;
	}

	label + label {
		margin-left: 2rem;
	}

	input {
		display: block;
		width: 2rem;
	}

	span {
		display: inline-block;
		padding: 0 1rem;
	}
`;

export default FiltersWrapper;

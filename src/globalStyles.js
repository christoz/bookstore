import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
	${normalize}

	html {
		box-sizing: border-box;
	}

	html,
	body {
		height: 100%;
		width: 100%;
		line-height: 1.5;
		font-size: 10px;
		color: #333;
	}

	body {
		font-family: 'Roboto', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}

	#root {
		background-color: #fafafa;
		height: 100%;
		min-width: 100%;
	}

	@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');


	${'' /* TODO: Move form styles to somewhere else and more appropriate */}
	form {
		&-group {
			margin-bottom: 1.6rem;
		}
	}

	input {
		font-size: 1.6rem;
		font-weight: 700;
		border-radius: 4px;
		border: 1px solid #ededed;
		height: 50px;
		line-height: 5rem;
		padding: 0 20px;
		width: 100%;
	}

	label {
		font-size: 2rem;
		line-height: 4rem;
	}

	.button {
		border-width: 2px;
		border-style: solid;
		border-radius: 39px;
		cursor: pointer;
		font-weight: 500;
		font-size: 1.9rem;
		display: inline-block;
		letter-spacing: .1px;
		padding: 13px 56px;
		margin: 24px 0 12px;
    	border-radius: 4px;
		background-color: #9d77ee;
    	border-color: #9d77ee;
    	color: #fff;
	}

	a {
		color: #9d77ee;
	}
`;

export default GlobalStyles;

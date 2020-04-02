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
		min-height: 100%;
		min-width: 100%;
	}

	@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
`;

export default GlobalStyles;

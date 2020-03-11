import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import App from './App';
const rootElement = document.getElementById('react-app');

ReactDOM.render(
	<>
		{/* <GlobalStyles /> */}
		<App />
	</>,
	rootElement
);

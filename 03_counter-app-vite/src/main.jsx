import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import {CounterApp} from './CounterApp.jsx';
import {FirstApp} from './FirstApp';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<CounterApp value={20} />
		{/*<FirstApp title='Hola, Soy Vegeta' />*/}
	</React.StrictMode>
);
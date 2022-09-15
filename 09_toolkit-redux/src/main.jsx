import React from 'react';
import ReactDOM from 'react-dom/client';
// import {PokemonApp} from './PokemonApp';
import {store} from './store/store.js';
import {Provider} from 'react-redux';
import App from './App';
import './index.css';
import {TodoApp} from './TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

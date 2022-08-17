import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import {HooksApp} from './HooksApp';
// import {CounterApp} from './01_useState/CounterApp';
// import {CounterWithCustomHook} from './01_useState/CounterWithCustomHook.jsx';
// import {SimpleForm} from './02_useEffect/SimpleForm';
// import {FormWithCustomHook} from './02_useEffect/FormWithCustomHook';
// import {MultipleCustomHooks} from './03_examples/MultipleCustomHooks';
// import {FocusScreen} from './04_useRef/FocusScreen';
// import {Layout} from './05_useLayoutEffect/Layout';
// import {Memorize} from './06_memos/Memorize';
// import {MemoHook} from './06_memos/MemoHook';
// import {CallbackHook} from './06_memos/CallbackHook';
import {Padre} from './07-tarea-memo/Padre';

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
	<Padre />
	// </React.StrictMode>
);

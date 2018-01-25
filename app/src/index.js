import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import { createStore } from 'redux';
// import todoApp from './redux/reducers';
// import App from './components/App';
// import { Provider} from 'react-redux';
import App from './model/App';

// let store = createStore(todoApp);
//
// ReactDOM.render(
// 	<Provider store={store}>
// 		<App />
// 	</Provider>,
// 	document.getElementById('root'));
// registerServiceWorker();

ReactDOM.render(<App /> ,document.getElementById('root'));
registerServiceWorker();
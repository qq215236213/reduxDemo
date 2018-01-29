import React, { Component } from 'react';
import { HashRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Routers from './Routers';
import reducer from './reducers/reducers';

let store = createStore(reducer,applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
        <Provider store={store}>
			<Router>
				<Routers />
			</Router>
        </Provider>
    );
  }
}

export default App;

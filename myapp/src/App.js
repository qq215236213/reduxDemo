import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {HashRouter as Router} from 'react-router-dom';
import Routers from './components/common/Routers';
import reducer from './reducers/reducers';

let store = createStore(reducer);
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

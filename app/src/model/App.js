import React ,{Component} from 'react';
import {HashRouter as Router,Route} from 'react-router-dom';
import Login from '../components/Login';

class App extends Component{
    render(){
        return (
            <Router>
                <div>
                    <Route path={'/login'} component={Login}/>
                </div>
            </Router>
        );
    }
}

export default App;
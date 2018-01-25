import React ,{Component}from 'react';
import {withRouter,Route} from 'react-router-dom';
import LoginContainer from '../../containers/login/LoginContainer';

class Routers extends Component{
	render(){
		const {location} = this.props;
		const route = () =>{
			if(location.pathname === '/login'){
				return <Route path={'/login'} component={LoginContainer}/>
			}else{
				return (
					<div></div>
				);
			}
		}
		return (
			<div>
				{route()}
			</div>
		);
	}
}

export default withRouter(Routers);




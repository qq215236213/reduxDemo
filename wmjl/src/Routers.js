import LoginContainer from './containers/login/LoginContainer';
import {withRouter,Route} from 'react-router-dom';
import React,{ Component } from 'react';
import PageLayout from './components/PageLayout';
import MembersContainer from './containers/members/MembersContainer';
import PlatFormContainer from './containers/platforms/PlatFormContainer';

class Routers extends Component{
	render(){
		const {location} = this.props;
		const route = () =>{
			if(location.pathname === '/login'){
				return <Route path={'/login'} component={LoginContainer}/>
			}else{
				return (
					<PageLayout>
						<div>
							<Route path='/' exact component={MembersContainer}/>
							<Route path='/platform' component={PlatFormContainer}/>
						</div>
					</PageLayout>
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

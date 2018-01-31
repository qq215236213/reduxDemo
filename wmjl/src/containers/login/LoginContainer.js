import React ,{ Component } from 'react';
import {connect} from 'react-redux';
import Login from '../../components/Login';
import {loginAction} from '../../actions/login/actions';

class LoginContainer extends Component{
	render(){
		return (
			<div>
				<Login onLogin={this.props.onLogin}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return state.login;
}

const mapDispatchToProps = (dispatch) =>{
	return {
		onLogin:(username,pwd) => dispatch(loginAction(username,pwd))
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);

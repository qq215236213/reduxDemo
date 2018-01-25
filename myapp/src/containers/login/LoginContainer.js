import React , { Component } from 'react';
import {connect} from 'react-redux';
import Login from '../../components/login/Login';

class LoginContainer extends Component{
	render(){
		console.log(this.props)
		return (
			<div>
				<Login />
			</div>
		);
	}
}

export default connect()(LoginContainer);
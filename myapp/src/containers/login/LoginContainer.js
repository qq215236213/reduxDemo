import React , { Component } from 'react';
import {connect} from 'react-redux';
import Login from '../../components/login/Login';
import PropTypes from 'prop-types';

class LoginContainer extends Component{
	constructor(props,context){
		super(props,context);
	}
	render(){
		return (
			<div>
				<Login />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		loginInfo :state.loginInfo
	}
}

LoginContainer.contextTypes = {
	store : PropTypes.object
}

export default connect(mapStateToProps)(LoginContainer);

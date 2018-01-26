import React , { Component } from 'react';
import {connect} from 'react-redux';
import Login from '../../components/login/Login';
import PropTypes from 'prop-types';

class LoginContainer extends Component{
	render(){
		return (
			<div>
				<Login />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {...state};
}

LoginContainer.contextTypes = {
	store : PropTypes.object
}

export default connect(mapStateToProps)(LoginContainer);

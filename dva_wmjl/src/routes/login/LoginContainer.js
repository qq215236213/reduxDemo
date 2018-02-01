import React ,{Component} from 'react';
import Login from '../../components/Login';
import {connect} from 'dva';

class LoginContainer extends Component {
    render(){
        return (
            <Login  onLogin={this.props.onLogin}/>
        );
    }
}

const mapStateToProps = (state) =>{
    console.log(state)
    return state.login;
}

const mapDispatchToProps = (dispatch) =>{
    return {
        onLogin:(params) => dispatch({
            type:'login/login',
            payload:{
                username:params.username,
                pwd:params.pwd
            }
        })
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);

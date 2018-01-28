import React,{Component} from 'react';
import {connect} from 'dva';
import Login from '../components/Login';

class LoginContainer extends Component{
  login = (username,pwd) =>{
    this.props.dispatch({
      type:'logins/getData',
      payload:{
        username:username,
        password:pwd
      }
    });
  }
  render(){
    return  (
      <div>
        <Login onClick={this.login}/>
      </div>
    );
  }
}

/*
const LoginContainer = (dispatch) => {

  function onLogin(username,pwd) {
    console.log(username)
    dispatch({
      type:'login/getLoginData',
      payload:{username:username,password:pwd}
    });
  }

  return (
    <div>
      <Login onClick={onLogin}/>
    </div>
  );
}
*/



export default connect()(LoginContainer) ;

import {message} from 'antd';
import {loginQuery} from '../services/login';
import {routerRedux} from 'dva/router';
const loginData = (user,pwd) =>{
  return loginQuery(user,pwd);
}
export default {
  namespace:'logins',
  state:{},
  reducers:{
    login(state,{payload:data}){
      return {...state,data}
    }
  },
  effects:{
    *getData({payload},{put/*,select*/,call}){
      const {data} = yield call(loginData,payload.username,payload.password);
      if(data.IsError){
        message.error(data.Msg);
        return;
      }
      yield put({type:'login',payload:data});
      yield put(routerRedux.push('/memberlist'));//页面跳转
      // const stData = yield select(state => state);

    },
  },
  subscriptions:{

  }
}

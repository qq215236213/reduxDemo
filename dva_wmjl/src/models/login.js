import md5 from 'md5';
import {message} from 'antd';
import {cookie} from '../libs/cookie';
import {loginQuery} from '../services/login/service';
import {routerRedux} from 'dva/router';

export default {
  namespace: 'login',
  state: {},
  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },
  effects: {
    *login({ payload }, { call, put }) {
        const {data} = yield call(loginQuery,{username:payload.username,pwd:md5(payload.pwd)});
        if(data.IsError){
            message.error(data.Msg);
            return;
        }
        yield put({ type: 'save' ,payload: data});
        yield put(routerRedux.push('/'));
    },
  },
  reducers: {
    save(state, action) {
        cookie('token',action.payload.Data.Token,{path:'/'});
        cookie('username',action.payload.Data.User.MemberName,{path:'/'});
        cookie('userid',action.payload.Data.User.MemberId,{path:'/'});
        cookie('ismanager',action.payload.Data.User.IsSystemManager,{path:'/'});
      return { ...state, token:action.payload.Data.Token,user:action.payload.Data.User };
    },
  },
};

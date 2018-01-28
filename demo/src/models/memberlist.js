import {getMemberList} from '../services/memberlist';
import {routerRedux} from 'dva/router';

export default {
  namespace:'memberlist',
  state:{},
  reducers:{
    save(state,{payload:data}){
      return {...state,list:data.Data.Collection||[],
        totalcount:data.Data.TotalCount
      };
    }
  },
  effects:{
    *load({payload},{call,put,select}){
      const state = yield select(state =>state.logins);
      if(typeof state.data === 'undefined' || typeof state.data.Data.Token === 'undefined' ||
        state.data.Data.Token === ''){
        yield put(routerRedux.push('/login'));
        return ;
      }
      payload.accesstoken = state.data.Data.Token;
      const data = yield call(getMemberList,payload);
      console.log(data)
      yield put({
        type:'save',
        payload:data
      });
    },
  },
  subscriptions: {
    setup({dispatch,history}){
      history.listen(location => {
        if(location.pathname === '/memberlist'){
          dispatch({
            type:'load',
            payload:{pageindex:1,pagesize:20}
          })
        }
      })
    }
  }
}

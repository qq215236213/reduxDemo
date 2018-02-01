import {loadData} from '../services/platforms/service';
export default{
    namespace:'platforms',
    state:{},
    reducers:{
        save(state,action){
            return {
                ...state,
                list:action.payload.Data.Collection,
                totalcount:action.payload.Data.TotalCount,
                pageindex:action.payload.Data.PageIndex,
                pagesize:action.payload.Data.PageSize,
            }
        }
    },
    effects:{
        *loaddata({payload},{call,put}){
            const data = yield call(loadData,payload);
            yield put({type:'save',payload:data});
        }
    },
    subscriptions:{
        setup({dispatch,history}){
            history.listen(location =>{
                if(location.pathname === '/platform'){
                    dispatch({
                        type:'loaddata',
                        payload:{}
                    })
                }
            })
        }
    }
}

import {loadData} from '../services/members/service';
import {message} from 'antd';
export default{
    namespace:'members',
    state:{
        searchvalue:'membername',
        isloading:false    
    },
    reducers:{
        save(state,action){
            return {
                ...state,
                list:action.payload.Collection,
                totalcount:action.payload.TotalCount,
                pageindex:action.payload.PageIndex,
                pagesize:action.payload.PageSize
            };
        },
        saveSearchTxt(state,action){
            return {
                ...state,searchtxt:action.payload
            }
        },
        saveDateTime(state,action){
            return {
                ...state,
                startdate:action.payload[0],
                enddate:action.payload[1]
            }
        },
        saveSearchValue(state,action){
            return {
                ...state,
                searchvalue:action.payload
            }
        }
    },
    effects:{
        *loaddata({payload},{call,put}){
            yield put({type:'saveSearchTxt',payload:payload.searchtxt});
            const data = yield call(loadData,payload);
            if(data.Data.IsError){
                message.error(data.Data.Msg);
                return;
            }
            yield put({type:'save',payload:data.Data});
        }
    },
    subscriptions:{
        setup({dispatch,history}){
            history.listen(location =>{
                if(location.pathname === '/'){
                    dispatch({
                        type:'loaddata',
                        payload:{}
                    })
                }
            })
        }
    }
}

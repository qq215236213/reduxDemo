import {loadData} from '../services/members/service';
import {message} from 'antd';
export default{
    namespace:'members',
    state:{},
    reducers:{
        save(state,action){
            console.log(action.payload)
            return {
                ...state,...action.payload
            };
        }
    },
    effects:{
        *loaddata({payload},{call,pull}){
            const pa = {...payload};
            console.log(pa)
            const {data} = yield call(loadData,pa);
            console.log(data)
            if(data.IsError){
                message.error(data.Msg);
                return;
            }
            yield pull({type:'save',payload:data});
        }
    },
    subscriptions:{
        setup({dispatch,history}){
            history.listen(location =>{
                if(location.pathname === '/'){
                    dispatch({
                        type:'loaddata',
                        payload:{
                            pageindex:1,
                            pagesize:10
                        }
                    })
                }
            })
        }
    }
}

import {loadData} from '../../services/members/service';
export const loadDataAction = (params) =>{
    return dispatch =>{
        const promise = loadData(params);
        promise.then(res =>{
            dispatch(saveSearchTxt(params.searchtxt));
            dispatch(saveData(res));
        })
    }
}

export const saveSearchValueAction = (searchvalue)=>{
    return dispatch =>{
        dispatch(saveSearchValue(searchvalue));
    }
}

export const saveCreateTimeAction = (date,datestring) =>{
    return dispatch =>{
        dispatch(saveCreateTime(datestring));
    }
}

const saveData = (payload) =>{
    return {
        type:'loaddata',
        payload,
    }
}


const saveSearchTxt =(payload) =>{
    return {
        type:'savetxt',
        payload
    }
}

const saveSearchValue = (payload) =>{
    return {
        type:'savevalue',
        payload
    }
}

const saveCreateTime = (payload) =>{
    return {
        type:'savetime',
        payload
    }
}

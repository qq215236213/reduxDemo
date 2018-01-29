import {loadData} from '../../services/members/service';
export const loadDataAction = (params) =>{
    return dispatch =>{
        const promise = loadData(params);
        promise.then(res =>{
            dispatch(saveSearchTxt(params.searchtxt));
            dispatch(saveSearchValue(params.searchvalue));
            dispatch(saveData(res));
        })
    }
}

export const saveData = (payload) =>{
    return {
        type:'loaddata',
        payload,
    }
}


export const saveSearchTxt =(payload) =>{
    return {
        type:'savetxt',
        payload
    }
}

export const saveSearchValue = (payload) =>{
    return {
        type:'sevevalue',
        payload
    }
}

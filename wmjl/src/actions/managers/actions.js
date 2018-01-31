import {loadData,batchDeleteData,saveData,getSingle,updataData} from '../../services/managers/service';

export const loadDataAction = (params) =>{
    return dispatch =>{
        dispatch(saveSearchTxt(params?params.loginname:''));
        const promise = loadData(params);
        promise.then(res =>{
            dispatch(load(res));
        })
    }
}

export const changeSelectedIdsAction = (ids) =>{
    return dispatch =>{
        dispatch(saveSelectedIds(ids));
    }
}

export const deleteDataAction = (ids) =>{
    return dispatch =>{
        const promise = batchDeleteData(ids);
        promise.then(res =>{
            dispatch(saveSelectedIds([]));
            dispatch(loadDataAction());
        })
    }
}

export const showDialogAction = (params) =>{
    return dispatch =>{
        dispatch(showDialog(params));
    }
}

export const saveDataAction = (params) =>{
    return dispatch =>{
        const promise = saveData(params);
        promise.then(res =>{
            dispatch(showDialogAction({isshow:false}));
            dispatch(loadDataAction());
        })
    }
}

export const getSingleAction =(id) =>{
    return dispatch => {
        const promise = getSingle(id);
        promise.then(res =>{
            dispatch(saveDetail(res));
            dispatch(showDialog({isshow:true,isedit:true,dialogtitle:'修改'}));
        })
    }
}

export const updateDataAction = (params) =>{
    return dispatch => {
        const promise = updataData(params);
        promise.then(res =>{
            dispatch(showDialog({isshow:false}));
            dispatch(loadDataAction());
        })
    }
}

const showDialog = (payload) =>{
    return {
        type:'managedialog',
        payload
    }
}

const load = (payload) =>{
    return {
        type:'managerload',
        payload
    }
}

const saveSelectedIds = (payload) =>{
    return {
        type:'managerselectedids',
        payload
    }
}

const saveSearchTxt = (payload) =>{
    return {
        type:'managersavesearchtxt',
        payload
    }
}

const saveDetail = (payload) =>{
    return {
        type:'managedetail',
        payload
    }
}

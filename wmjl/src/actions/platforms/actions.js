import {loadDate, deleteData,addData,getSingle,updataData} from '../../services/platforms/service';
export const loadDataAction = (params) => {
    return dispatch => {
        const promise = loadDate(params);
        dispatch(saveSearchTxt(params?params.searchtxt:''));
        promise.then(res => {
            dispatch(savePageInfo({pageindex: res.Data.PageIndex, pagesize: res.Data.PageSize}));
            dispatch(save(res));
        });
    }
}

export const deleteDataAction = (id) => {
    return dispatch => {
        const promise = deleteData(id);
        promise.then(res => {
            dispatch(deleteInfo(id));
        });
    }
}

export const showDialogAction = (payload) => {
    return {type: 'platformshowdialog', payload}
}

export const addDataAction = (params) =>{
    return dispatch =>{
        const promise = addData(params);
        promise.then(res =>{
            dispatch(showDialogAction({isshow:false}));
            dispatch(loadDataAction());
        });
    }
}

export const getSingleAction = (id) =>{
    return dispatch =>{
        const promise = getSingle(id);
        promise.then(res =>{
            dispatch(singleInfo(res));
            dispatch(showDialogAction({isshow:true,isedit:true,dialogtitle:'修改'}));
        })
    }
}

export const viewDetailAction = (id) =>{
    return dispatch => {
        const promise = getSingle(id);
        promise.then(res =>{
            dispatch(setIsViewDate(true));
            dispatch(singleInfo(res));
            dispatch(showDialogAction({isshow:true,dialogtitle:'详情'}));
        })
    }
}

export const updataDataAction = (params) =>{
    return dispatch =>{
        const promise = updataData(params);
        promise.then(res =>{
            dispatch(showDialogAction({isshow:false}));
            dispatch(loadDataAction());
        })
    }
}

const save = (payload) => {
    return {type: 'saveplatform', payload}
}

const saveSearchTxt = (payload) => {
    return {type: 'platformsearchtxt', payload}
}

const savePageInfo = (payload) => {
    return {type: 'platformpageinfo', payload}
}

const deleteInfo = (payload) => {
    return {type: 'platformdelete', payload}
}

const singleInfo = (payload) =>{
    return {
        type:'platformdetail',
        payload
    }
}

const setIsViewDate = (payload) =>{
    return {
        type:'platformisview',
        payload
    }
}

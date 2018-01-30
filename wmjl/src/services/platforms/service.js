import $ from 'jquery/dist/jquery.min';
import {message} from 'antd';
import cookie from '../../libs/cookie';

export const loadDate = (params) => {
    const param = Object.assign({}, params, {accesstoken: cookie('token')});
    const promise = new Promise(resolve => {
        $.get('/platform', param, d => {
            if (d.IsError) {
                message.error(d.Msg);
                return;
            }
            resolve(d);
        });
    });
    return promise;
}

export const deleteData = (id) => {
    const params = Object.assign({}, {accesstoken: cookie('token')});
    const promise = new Promise(resolve => {
        $.post('/platform/delete/' + id, params, d => {
            if (d.IsError) {
                message.error(d.Msg);
                return;
            }
            resolve(d);
        });
    });
    return promise;
}

export const addData = (params) =>{
    const param = Object.assign({},params,{accesstoken: cookie('token')});
    const promise = new Promise(resolve =>{
        $.post('/platform',param,d =>{
            if(d.IsError){
                message.error(d.Msg);
                return;
            }
            resolve(d);
        });
    });
    return promise;
}

export const getSingle = (id) => {
    const params = {accesstoken: cookie('token')};
    const promise = new Promise(resolve =>{
        $.get('/platform/'+id,params,d =>{
            if(d.IsError){
                message.error(d.Msg);
                return;
            }
            resolve(d);
        })
    });
    return promise;
}

export const updataData = (params) =>{
    if(params.isstoped === "0")
        params.isstop = false;
    else
        params.isstop = true;
    const param = Object.assign({},params,{accesstoken:cookie('token')});
    console.log(param)
    const promise = new Promise(resolve =>{
        $.post('/platform/'+params.recid,param,d=>{
            if(d.IsError){
                message.error(d.Msg);
                return;
            }
            resolve(d);
        });
    });
    return promise;
}

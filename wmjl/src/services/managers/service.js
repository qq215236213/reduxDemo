import $ from 'jquery/dist/jquery.min';
import {message} from 'antd';
import cookie from '../../libs/cookie';
import md5 from 'md5';

export const loadData = (params) =>{
    const param = Object.assign({},params,{accesstoken:cookie('token')});
    const promise = new Promise(resolve =>{
        $.get('/manager',param,d =>{
            if(d.IsError){
                message.error(d.Msg);
                return ;
            }
            resolve(d);
        });
    });
    return promise;
}

export const batchDeleteData = (ids) =>{
    let arrayids = [];
    if(!ids.length){
        arrayids.push(ids);
    }else{
        arrayids = [...ids];
    }
    const params = Object.assign({ids:arrayids},{accesstoken:cookie('token')});
    const promise = new Promise(resolve =>{
        $.post('/manager/batchdel',params,d =>{
            if(d.IsError){
                message.error(d.Msg);
                return;
            }
            resolve(d);
        });
    });
    return promise;
}

export const saveData = (params) =>{
    let p = {};
    if(params.issystem === '1'){
        p.IsSystemManager = true;
    }else{
        p.IsSystemManager = false;
    }
    p.loginname = params.loginname;
    p.loginpwd = md5(params.password);

    const param = Object.assign({},p,{accesstoken:cookie('token')});
    console.log(param)
    const promise = new Promise(resolve =>{
        $.post('/manager',param,d =>{
            if(d.IsError){
                message.error(d.Msg);
                return;
            }
            resolve(d);
        });
    });
    return promise;
}

export const getSingle = (id) =>{
    const promise = new Promise(resolve =>{
        $.get('/manager/'+id,{accesstoken:cookie('token')},d =>{
            if(d.IsError){
                message.error(d.Msg);
                return ;
            }
            resolve(d);
        });
    });
    return promise;
}

export const updataData = (params) =>{
    console.log(params)
    let p = {};
    p.id = params.id;
    if(params.curstatus === "0"){
        p.curstatus = 0;
    }else{
        p.curstatus = 1;
    }
    if(params.issystem ==='1'){
        p.IsSystemManager = true;
    }else{
        p.IsSystemManager = false;
    }
    if(params.editchk){
        p.loginpwd = md5(params.password);
    }
    const param = Object.assign({},p,{accesstoken:cookie('token')});
    const promise = new Promise(resolve =>{
        $.post('/manager/'+param.id,param , d =>{
            if(d.IsError){
                message.error(d.Msg);
                return;
            }
            resolve(d);
        });
    });
    return promise;
}

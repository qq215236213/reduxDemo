import $ from 'jquery/dist/jquery.min';
import {message} from 'antd';
import cookie from '../../libs/cookie';

export function loadData(params){
    const token = cookie('token');
    params[params.searchvalue]=params.searchtxt;
    const param = Object.assign({},params,{accesstoken:token});
    const promise = new Promise(resolve =>{
        $.get('/member',param,d=>{
            if(d.IsError){
                message.error(d.Msg);
                return ;
            }
            resolve(d);
        })
    })
    return promise;
}

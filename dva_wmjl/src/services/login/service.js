import $ from 'jquery/dist/jquery.min';
import {hosturl} from '../hosturl';
import {message} from 'antd';

export function loginQuery(params){
    const promise = new Promise(resolve =>{
        $.post(hosturl+'managelogin',params,d =>{
            if(d.IsError){
                message.error(d.Msg);
                return ;
            }
            resolve(d);
        })
    })
    return promise;
}

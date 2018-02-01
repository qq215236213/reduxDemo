import {cookie} from '../../libs/cookie';
import {hosturl} from '../hosturl';
import $ from 'jquery/dist/jquery.min';
import {message} from 'antd';

export const loadDate = (params) => {
    console.log(params);
    const p = {...params,accesstoken:cookie('token')};
    console.log(p)
    const promise = new Promise( resolve => {
        $.get(hosturl+'member',p, d => {
                if(d.IsError){
                    message.error(d.Msg);
                    return;
                }
                resolve(d);
        })
    })
    return promise;
}

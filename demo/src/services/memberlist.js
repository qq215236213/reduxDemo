import {request} from '../utils/request';
import $ from 'jquery/dist/jquery.min';
import {message} from 'antd';

export function memberQuery(pageindex,pagesize,token) {
  if(!pageindex)
    pageindex = 1;
  if(!pagesize)
    pagesize = 20;
  return request('http://localhost:8088/member',{pageindex:pageindex,pagesize:pagesize,accesstoken:token});
}


export function getMemberList(params) {
  if(!params.pageindex)
    params.pageindex = 1;
  if(!params.pagesize)
    params.pagesize = 20;

  const promise = new Promise(resolve => {
    $.get('http://localhost:8088/member',params,(d)=>{
      if(d.IsError){
        message.error(d.Msg);
        return  ;
      }
      resolve(d);
    })
  })

  return promise;
}

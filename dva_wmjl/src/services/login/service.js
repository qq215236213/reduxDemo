import request from '../../utils/request';
import querystring from 'query-string';

export function loginQuery(params) {
    const options = {
         method:'post',
         headers: {'Content-Type':'application/x-www-form-urlencoded'},
         body:querystring.stringify(params)
    }
  return request('http://localhost:8088/managelogin',options);
}

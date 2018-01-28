import {post} from '../utils/request';

export function loginQuery(username,pwd) {
  return post('http://localhost:8088/managelogin',{username:username,pwd:pwd});
}

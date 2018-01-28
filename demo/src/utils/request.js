import fetch from 'dva/fetch';
import querystring from 'query-string';


function parseJSON(response) {
 /* response.json().then(function (data) {
    if(data.IsError){
      message.error(data.Msg);
      return;
    }
  },function (error) {
      console.log(error);
      return ;
  })
  console.log(response.json())*/
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export function request(url, options) {
  console.log(options)
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export function post(url, options) {
  return fetch(url, {method:'post',
    headers: {'Content-Type':'application/x-www-form-urlencoded'},
    body:querystring.stringify(options)})
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}

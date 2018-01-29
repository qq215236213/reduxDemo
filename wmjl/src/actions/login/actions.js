import {login} from '../../services/login/service';

export function saveLoginData(payload){
	return {
		type:'save',
		payload,
	}
}


export const loginAction = (username,pwd) => {
	return dispatch => {
		const promise = login(username,pwd);
		promise.then(res => {
			dispatch(saveLoginData(res));
		});
	}
}

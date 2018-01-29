import {login} from '../../services/login/service';
import cookie from '../../libs/cookie';

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
			cookie('token',res.Data.Token,{path:'/'});
			cookie('username',res.Data.User.MemberName,{path:'/'});
			cookie('userid',res.Data.User.MemberId,{path:'/'});
			cookie('issystemmanager',res.Data.User.IsSystemManager);
			dispatch(saveLoginData(res));
		});
	}
}

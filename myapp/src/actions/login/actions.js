import $ from "jquery/dist/jquery.min";
import {message} from 'antd';
export function login(data) {
	return {
		type:'login',
		data
	}
}

export const getLoginData = (username,pwd) =>{
	return dispatch =>{
		$.post('/managelogin',{username:username,pwd:pwd},(d)=>{
			if(d.IsError){
				message.error(d.Msg);
				return;
			}
			dispatch(login(d.Data));
		});
	}
}

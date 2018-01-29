import $ from 'jquery/dist/jquery.min';
import {message} from 'antd';

export const login = (username,pwd) =>{
	const promise = new Promise(resolve => {
		$.post('/managelogin',{username:username,pwd:pwd},(d)=>{
			if(d.IsError){
				message.error(d.Msg);
				return;
			}
			resolve(d);
		});
	});

	return promise;
}

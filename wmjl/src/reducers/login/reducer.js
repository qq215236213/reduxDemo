import cookie from '../../libs/cookie';

export const loginReducer = (state={},action) =>{
	switch(action.type){
		case 'save':
			if(action.payload){
				cookie('token',action.payload.Data.Token,{path:'/'});
				cookie('username',action.payload.Data.User.MemberName,{path:'/'});
				cookie('userid',action.payload.Data.User.MemberId,{path:'/'});
				cookie('issystemmanager',action.payload.Data.User.IsSystemManager);
			}
			return Object.assign({},state,{token:action.payload.Data.Token,user:action.payload.Data.User});
		default:
			return state;
	}
}

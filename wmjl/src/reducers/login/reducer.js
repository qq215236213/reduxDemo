export const loginReducer = (state={},action) =>{
	switch(action.type){
		case 'save':
			return Object.assign({},state,{token:action.payload.Data.Token,user:action.payload.Data.User});
		default:
			return state;
	}
}
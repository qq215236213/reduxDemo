export const reducer = (state={}, action) =>{
	switch (action.type){
		case 'login':
			return Object.assign({},state,action.data);
		default:
			return state;
	}
}
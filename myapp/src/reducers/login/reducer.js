export const reducer = (state={},action) =>{
	switch (action.type){
		case 'login':
			return "haha";
		default:
			return state;
	}
}
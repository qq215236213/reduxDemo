export function todoReducer(state,action) {
    if(typeof state === 'undefined'){
        return [];
    }

    switch (action.type){
        case 'add_todo':
            return state.concat({
                text:action.text,
            });
        default:
            return state;
    }
}
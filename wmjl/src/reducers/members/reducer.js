export const memberReducer = (state={searchvalue:'membername'},action) =>{
    switch(action.type){
        case 'loaddata':
        return Object.assign({},state,
            {list:action.payload.Data.Collection,
                totalcount:action.payload.Data.TotalCount,
                pageindex:action.payload.Data.PageIndex,
                pagesize:action.payload.Data.PageSize,
            }
        );
        case 'savetxt':
        return Object.assign({},state,{searchtxt:action.payload});
        case 'savevalue':
        return Object.assign({},state,{searchvalue:action.payload});
        default:
        return state;
    }
}
